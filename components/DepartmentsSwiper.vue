<template>
  <div class="departments-swiper">
    <div
      v-if="items && items.length"
      class="departments-swiper__swiper-top departments-swiper-top swiper mySwiper2"
      ref="swiperTop"
    >
      <div class="departments-swiper-top__wrapper swiper-wrapper">
        <div class="departments-swiper-top__slide swiper-slide">
          <div
            class="departments-swiper-top__image"
            v-for="(item, index) in items"
            :key="index"
          >
            <img
              :src="require(`@/assets/img/home/events/news/${item}`)"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="items.length > 1"
      class="departments-swiper__swiper-mini departments-swiper-mini swiper mySwiper"
      ref="mySwiperSmall"
      :options="swiperSmallOptions"
    >
      <div class="departments-swiper-mini__wrapper swiper-wrapper">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="departments-swiper-mini__slide swiper-slide"
        >
          <div class="departments-swiper-mini__image">
            <img
              :src="require(`@/assets/img/home/events/news/${item}`)"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="departments-swiper__text" v-html="datas.description"></div>
  </div>
</template>

<script>
import Swiper from '@/plugins/thumbs'

export default {
  computed: {
    swiperSmall() {
      return this.$refs.mySwiperSmall.$swiper
    },
  },
  props: {
    datas: {
      type: Object,
      default: () => {},
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      swiperSmallOptions: null,
      // items: [
      //   { id: 1, path: 'img_1.png' },
      //   { id: 2, path: 'img_2.png' },
      //   { id: 3, path: 'img_3.png' },
      //   { id: 4, path: 'img_4.png' },
      // ],
      swiperOptionThumbs: {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 4,
        speed: 2000,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
      },
      swiperOptionTop: {
        slidesPerView: 1,
        speed: 2000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  mounted() {
    this.swiperMainMini()
    this.swiperMainBig()
  },
  methods: {
    swiperMainMini() {
      this.swiperSmallOptions = new Swiper('.departments-swiper-mini', {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 4,
        speed: 2000,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
      })
    },
    swiperMainBig() {
      this.swiperSmallOptions = new Swiper('.departments-swiper-top', {
        slidesPerView: 1,
        speed: 2000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: this.swiperSmallOptions,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.departments-swiper {
  //   max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: hidden;
  &__text {
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000;
    text-align: justify;
  }
}
.departments-swiper-top {
  width: 100%;
  height: 370px;
  position: relative;
  &__wrapper {
    display: flex;
  }

  &__slide {
  }

  &__image {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
      border-radius: 10px;
    }
  }

  &__buttons {
  }
}
.departments-swiper-mini {
  width: 100%;
  &__wrapper {
    display: flex;
  }

  &__slide {
  }

  &__image {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
