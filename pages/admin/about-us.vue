<template>
  <div class="wrapper">
    <div class="admin-about">
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
      <div class="admin-about__text">
        <div class="admin-about__title">
          <input type="text" />
        </div>
        <div class="admin-about__description">
          <editor v-model="text" class="editor" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
    }
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
  display: flex;
}

.popup__image {
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
</style>
