<template>
  <div class="wrapper">
    <div class="admin-about">
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
          <text-filed
            label="Title"
            :value="main.title"
            :error="!main.title && error"
            @updateValue="(val) => (main.title = val)"
          ></text-filed>
        </div>
        <div class="col-9">
          <editor v-model="text" class="editor" />
        </div>
        <div class="col-2">
          <base-button text="Save"></base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from '@/api/generic.api'

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
      main: {
        title: '',
      },
    }
  },
  methods: {
    change(event) {
      this.image = URL.createObjectURL(event.target.files[0])
      console.log(event)
      //   this.images = event.target.files[0]
      //   fileUpload('', event.target.files[0])
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #fff;
  height: 100%;
  border-radius: 6px;
}
.admin-about {
  padding: 20px;
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
