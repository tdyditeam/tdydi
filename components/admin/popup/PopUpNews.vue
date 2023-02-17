<template>
  <div class="popup">
    <div class="popup__wrapper">
      <div class="row">
        <div class="col-3 row-4">
          <div class="popup__image">
            <img v-if="newsImg" :src="newsImg" alt="" />
            <img v-else src="@/assets/img/admin/addphoto.png" alt="" />
            <input
              @change="change"
              accept=".jpg, .jpeg, .png"
              class="popup__image-input"
              type="file"
            />
          </div>
        </div>
        <div class="col-9">
          <div class="popup__tab">
            <span
              v-for="lang in langs"
              :key="lang.id"
              @click="toggleLang(lang.id, lang.key)"
              :class="{ active: activeLang === lang.id }"
              >{{ lang.name }}</span
            >
          </div>
        </div>
        <div class="col-9">
          <text-filed
            label="Title"
            :value="main.title[activeKey]"
            @updateValue="(val) => (main.title[activeKey] = val)"
          ></text-filed>
        </div>
        <div class="col-9">
          <text-filed
            label="Date"
            type="Date"
            :value="newsDate"
            @updateValue="(val) => (newsDate = val)"
          ></text-filed>
        </div>
        <div class="col-12">
          <span class="editor__label">Makala</span>
          <editor v-model="main.description[activeKey]" class="editor" />
        </div>

        <div class="col-3 row-4">
          <div class="popup__image">
            <img v-if="studentImg" :src="studentImg" alt="" />
            <img v-else src="@/assets/img/admin/addphoto.png" alt="" />
            <input
              @change="changeStudent"
              accept=".jpg, .jpeg, .png"
              class="popup__image-input"
              type="file"
            />
          </div>
        </div>
        <div class="col-7">
          <text-filed
            :value="main.nameTeacher[activeKey]"
            @updateValue="(val) => (main.nameTeacher[activeKey] = val)"
            label="Mugallym"
          ></text-filed>
        </div>
        <div class="col-7">
          <text-filed
            :value="main.nameStudent[activeKey]"
            @updateValue="(val) => (main.nameStudent[activeKey] = val)"
            label="Talyp"
          ></text-filed>
        </div>
        <div class="col-5">
          <text-filed
            :value="main.profession[activeKey]"
            @updateValue="(val) => (main.profession[activeKey] = val)"
            label="Hünari"
          ></text-filed>
        </div>
        <div class="col-12">
          <div class="popup__actions">
            <base-button
              @click="$emit('close')"
              isActive
              text="Cancel"
            ></base-button>
            <base-button @click="save" isActive text="Save"></base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from '@/api/generic.api'
// import changeImage from '@/mixins/changeImage'
import fileUpload from '@/mixins/fileUpload'
const Editor = () => import('@/components/admin/Editor.vue')

export default {
  components: {
    Editor,
  },
  mixins: [fileUpload],

  data() {
    return {
      newsImg: null,
      studentImg: null,
      activeLang: 1,
      activeKey: 'tm',
      images: null,
      newsDate: '',
      langs: [
        {
          id: 1,
          name: 'TKM',
          key: 'tm',
        },
        {
          id: 2,
          name: 'RUS',
          key: 'ru',
        },
        {
          id: 3,
          name: 'ENG',
          key: 'en',
        },
      ],
      main: {
        title: {
          tm: '',
          ru: '',
          en: '',
        },
        description: {
          tm: '',
          ru: '',
          en: '',
        },
        nameTeacher: {
          tm: '',
          ru: '',
          en: '',
        },
        nameStudent: {
          tm: '',
          ru: '',
          en: '',
        },
        profession: {
          tm: '',
          ru: '',
          en: '',
        },
      },
    }
  },
  methods: {
    change(event) {
      this.newsImg = URL.createObjectURL(event.target.files[0])
      this.images = event.target.files[0]
      //   fileUpload('', event.target.files[0])
    },
    changeStudent(event) {
      this.studentImg = URL.createObjectURL(event.target.files[0])

      //   this.newsImg = this.changeImage(event)
    },
    toggleLang(id, key) {
      this.activeLang = id
      this.activeKey = key
    },

    async save() {
      const formData = new FormData()
      formData.append('title', this.main.title.en)
      formData.append('description', this.main.description.en)
      formData.append('student_fullname', this.main.nameTeacher.en)
      formData.append('teacher_fullname', this.main.nameStudent.en)
      formData.append('date', this.newsDate)
      formData.append('images', this.images)
      formData.append('lang', 'en')
      //   let arr = [
      //     {
      //       title: this.main.title.tm,
      //       description: this.main.description.tm,
      //       student_full_name: this.main.nameStudent.tm,
      //       teacher_full_name: this.main.nameTeacher.tm,
      //       date: this.newsDate,
      //       lang: 'tm',
      //     },
      //     {
      //       title: this.main.title.ru,
      //       description: this.main.description.ru,
      //       student_full_name: this.main.nameStudent.ru,
      //       teacher_full_name: this.main.nameTeacher.ru,
      //       date: this.newsDate,
      //       lang: 'ru',
      //     },
      //     {
      //       title: this.main.title.en,
      //       description: this.main.description.en,
      //       student_fullname: this.main.nameStudent.en,
      //       teacher_fullname: this.main.nameTeacher.en,
      //       date: this.newsDate,
      //       lang: 'en',
      //     },
      //   ]
      let arr = {
        title: this.main.title.en,
        description: this.main.description.en,
        student_fullname: this.main.nameStudent.en,
        teacher_fullname: this.main.nameTeacher.en,
        date: this.newsDate,
        images_path: '/some.png',
        lang: 'en',
      }
      try {
        const res = await request({ url: '/news', data: formData })
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  &__wrapper {
    background: #fff;
    width: 700px;
    padding: 15px;
  }
  &__image {
    border: 1px dashed #969494;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #f4f4f4;
    height: 100%;
    width: 100%;

    &-input {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center center;
    }
  }
  &__tab {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    span {
      padding: 8px 28px;
      margin-right: 2px;
      font-family: 'Gilroy';
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;

      color: #969494;
      border-radius: 2px;
    }

    span:hover {
      color: #333333;
      background: #f4f4f4;
    }
    span.active {
      color: #333333;
      background: #f4f4f4;
    }
  }
  &__actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .button {
      margin-right: 10px;
      border-radius: 4px;
      &:nth-child(1) {
        background: #333333;
      }
    }
  }
}

.editor {
  background: var(--input);
  padding: 12px 10px;
  border-radius: 4px;
  border: 1px solid transparent;
  height: 150px;
}
.editor__label {
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #333333;
}
</style>
