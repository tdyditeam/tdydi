<template>
  <div class="popup">
    <div class="popup__wrapper">
      <div class="row">
        <div class="col-3 row-4">
          <div class="popup__image">
            <img v-if="newsImg?.blobFile" :src="newsImg.blobFile" alt="" />
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
        <div class="col-7">
          <text-filed
            :value="main.nameWriter[activeKey]"
            @updateValue="(val) => (main.nameWriter[activeKey] = val)"
            label="Ýazyjynyň ady"
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
            <base-button isActive text="Cancel"></base-button>
            <base-button @click="save" isActive text="Save"></base-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const Editor = () => import('@/components/admin/Editor.vue')
import changeImage from '@/mixins/changeImage'

export default {
  components: {
    Editor,
  },
  mixins: [changeImage],

  data() {
    return {
      newsImg: null,
      activeLang: 1,
      activeKey: 'tm',
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
        nameWriter: {
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
      this.newsImg = this.changeImage(event)
      console.log(this.newsImg)
    },

    toggleLang(id, key) {
      this.activeLang = id
      this.activeKey = key
    },

    save() {
      console.log(this.main.description.tm)
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
