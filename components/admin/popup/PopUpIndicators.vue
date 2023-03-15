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
            <span class="active">{{ lang.toUpperCase() }}</span>
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
import { mapGetters } from 'vuex'
import { request } from '@/api/generic.api'
import changeImage from '@/mixins/changeImage'
const Editor = () => import('@/components/admin/Editor.vue')

export default {
  components: {
    Editor,
  },
  mixins: [changeImage],
  props: {
    lang: {
      type: String,
      default: () => '',
    },
    height: {
      type: String,
      default: () => null,
    },
    editItemDatas: {
      type: Object,
      default: () => null,
    },
  },
  watch: {},
  computed: {
    ...mapGetters(['imageUrl']),
  },
  data() {
    return {
      newsImg: null,
      activeLang: 1,
      newsDate: '',
      main: {
        name: '',
        count: null,
        order_number: null,
        lang: this.lang,
        image: '',
      },
    }
  },
  mounted() {
    console.log(this.editItemDatas)
    if (this.editItemDatas) {
      this.main.name = this.editItemDatas.name
      this.main.count = this.editItemDatas.count
      this.main.order_number = this.editItemDatas.order_number
      this.newsImg = {
        blobFile: `${this.imageUrl}${this.editItemDatas.image}`,
      }
      this.main.image = null
    }
  },
  methods: {
    change(event) {
      this.newsImg = this.changeImage(event)
      this.main.image = this.newsImg.postFile
      console.log(this.main.image)
    },
    async save() {
      try {
        const res = await request({
          url: this.editItemDatas
            ? `/indicators/${this.editItemDatas.id}`
            : '/indicators',
          file: this.editItemDatas ? (this.main.image ? true : false) : true,
          data: this.editItemDatas
            ? this.main.image
              ? this.main
              : {
                  lang: this.main.lang,
                  name: this.main.name,
                  count: this.main.count,
                  order_number: this.main.order_number,
                }
            : this.main,
          method: this.editItemDatas ? 'PUT' : 'POST',
        })
        console.log(res)
        if (res.status) {
          if (this.editItemDatas) {
            alert('Üstünlikli üýtgedildi !')
          } else {
            alert('Üstünlikli goşuldy !')
          }
          this.$emit('indicatorsCreated')
        } else {
          alert('Ýalňyşlyk ýa-da internet nä sazlygy !')
        }
      } catch (error) {
        console.log(error)
        alert('Ýalňyşlyk ýa-da internet nä sazlygy !')
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
