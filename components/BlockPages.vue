<template>
  <div class="block__wrapper">
    <div class="block__content">
      <title-block-pages :title="title"></title-block-pages>
      <div class="block__description">
        <div class="block__description-img-pdf" v-if="img && imgPdf">
          <!-- <img :src="require(`@/assets/img/about-us/${img}`)" alt="" /> -->
          <!-- <a href="http://" target="_blank" rel="noopener noreferrer"
            ><img src="@/assets/img/about-us/zurnal.png" alt=""
          /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"
            ><img src="@/assets/img/about-us/zurnal2.png" alt=""
          /></a> -->
        </div>
        <div class="block__description-img" v-if="img && !imgPdf">
          <img :src="`${imageUrl}${img}`" alt="" />
        </div>
        <div v-html="description" class="block__description-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    description: {
      type: String,
      default: () => '',
    },
    title: {
      type: String,
      default: () => '',
    },
    img: {
      type: String,
      default: () => '',
    },
    imgPdf: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    ...mapGetters(['imageUrl']),
  },
}
</script>

<style lang="scss" scoped>
.block__wrapper {
  display: flex;
}
.block__content {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}
.block__title {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
}
.block__title-text {
  position: relative;
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--primary);
  border-left: 3px solid var(--primary);
  padding: 0px 20px;
}
.block__description {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.block__description-img {
  width: 100%;
  height: 500px;
  margin-bottom: 30px;
}
.block__description-img-pdf {
  width: 100%;
  height: 400px;
  margin-bottom: 30px;
  padding: 22px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 100%;
    width: 550px;
    cursor: pointer;
    object-fit: contain;
    object-position: center center;
    &:hover {
      filter: drop-shadow(5px 4px 12px rgba(0, 0, 0, 0.1));
    }
  }
}
.block__description-img img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 10px;
}
.block__description-content {
  //   max-width: 900px;
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-align: justify;
  color: #000000;
}
.block__menu {
  margin-left: 73px;
}
</style>
