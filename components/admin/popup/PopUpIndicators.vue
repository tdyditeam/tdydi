<template>
  <div class="popup">
    <div
      class="popup__wrapper"
      :style="`height: ${height ? `${height}px` : null}`"
    >
      <div class="row">
        <div class="col-3 row-3">
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
            label="Ugur"
            :value="main.name"
            @updateValue="(val) => (main.name = val)"
          ></text-filed>
        </div>
        <div class="col-4">
          <text-filed
            label="Sany"
            type="number"
            :value="main.count"
            @updateValue="(val) => (main.count = val)"
          ></text-filed>
        </div>
        <div class="col-2">
          <text-filed
            label="Ýeri"
            type="number"
            :value="main.order_number"
            @updateValue="(val) => (main.order_number = val)"
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
import changeImage from '@/mixins/changeImage'
const Editor = () => import('@/components/admin/Editor.vue')

export default {
  components: {
    Editor,
  },
  mixins: [changeImage],
  props: {
    height: {
      type: String,
      default: () => null,
    },
  },
  data() {
    return {
      newsImg: null,
      activeLang: 1,
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
        lang: 'tm',
        name: '',
        count: null,
        order_number: null,
        image: '',
      },
    }
  },
  methods: {
    change(event) {
      this.newsImg = this.changeImage(event)
      this.main.image = this.newsImg.postFile
    },

    toggleLang(id, key) {
      this.activeLang = id
      this.main.lang = key
      this.main.name = ''
    },

    async save() {
      try {
        const res = await request({
          url: '/indicators',
          file: true,
          data: this.main,
        })
        console.log(res)
        if (res) {
          this.$emit('indicatorsCreated')
        }
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
