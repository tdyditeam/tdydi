<template>
  <div class="wrapper">
    <div class="admin-about">
      <h2 class="admin-about__title">Rektorat</h2>
      <div class="row">
        <div class="col-3 row-3">
          <div class="admin-about__img">
            <div class="popup__image">
              <img v-if="image" :src="image" alt="" />
              <img v-else src="@/assets/img/admin/addphoto.png" alt="" />
              <input
                @change="change"
                accept=".jpg, .jpeg, .png"
                class="popup__image-input"
                type="file"
              />
            </div>
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
          <editor v-model="main.text" class="editor" />
        </div>
        <div @click="addAbout" class="col-2">
          <base-button text="Save" style="text-align: center"></base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from '@/api/generic.api'
import { mapGetters } from 'vuex'

const Editor = () => import('@/components/admin/Editor.vue')
export default {
  layout: 'admin',
  components: {
    Editor,
  },
  data() {
    return {
      text: null,
      image: null,
      error: false,
      activeLang: 1,
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
        text: '',
        lang: 'tm',
        image: null,
        id: null,
      },
    }
  },
  computed: {
    ...mapGetters(['imageUrl']),
  },
  async mounted() {
    await this.fetcAbout()
  },

  methods: {
    async toggleLang(id, key) {
      this.activeLang = id
      this.main.lang = key
      await this.fetcAbout()
    },
    change(event) {
      this.image = URL.createObjectURL(event.target.files[0])
      this.main.image = event.target.files[0]
    },

    async addAbout() {
      try {
        const res = await request({
          url: `/about/${this.main.id}`,
          method: 'PUT',
          data: this.main,
          file: true,
        })
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
    async fetcAbout() {
      try {
        const { about, status } = await request({
          url: `/about?lang=${this.main.lang}`,
          method: 'GET',
        })
        if (status) {
          this.main.text = about[0].text
          this.image = `${this.imageUrl}${about[0].image}`
          this.main.id = about[0].id
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #fff;
  height: 100%;
  border-radius: 6px;
  height: 100%;
  overflow: overlay;
}
.admin-about {
  padding: 20px;
}
.editor {
  overflow: overlay;
  height: 400px;
}
.admin-about__title {
  padding: 10px;
  font-weight: 700;
  font-size: 22px;
}
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
      font-family: 'Roboto Flex';
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
.popup__image {
  border: 1px dashed #969494;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #f4f4f4;
  width: 100%;
  height: 250px;
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
</style>
