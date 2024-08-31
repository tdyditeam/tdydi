<template>
  <div :class="['gallery-photo-popup', { active: isActive }]">
    <div class="gallery-photo-popup__block">
      <div class="gallery-photo-popup__icon-wrapper">
        <div class="gallery-photo-popup__icon" @click="$emit('close')">
          <img src="@/assets/img/home/gallery-popup/icon.svg" alt="icon" />
        </div>
      </div>
      <div
        class="gallery-photo-popup__body body-gallery-photo-popup swiper"
        ref="swiperTop"
      >
        <div class="body-gallery-photo-popup__wrapper swiper-wrapper">
          <div
            class="body-gallery-photo-popup__slide swiper-slide"
            v-for="image in images"
            :key="image.id"
          >
            <div class="body-gallery-photo-popup__image">
              <img :src="`${imageUrl}${image.image}`" alt="" />
            </div>
          </div>
        </div>
        <div class="body-gallery-photo-popup__buttons">
          <div class="body-gallery-photo-popup__prev swiper-button-prev">
            <img src="@/assets/img/home/gallery-popup/prev.svg" alt="prev" />
          </div>
          <div class="body-gallery-photo-popup__next swiper-button-next">
            <img src="@/assets/img/home/gallery-popup/next.svg" alt="next" />
          </div>
        </div>
      </div>
      <div
        class="gallery-photo-popup__body-mini mini-body swiper"
        ref="mySwiperSmall"
        :options="swiperSmallOptions"
      >
        <div class="mini-body__wrapper swiper-wrapper">
          <div
            class="mini-body__slide swiper-slide"
            v-for="image in images"
            :key="image.id"
          >
            <div class="mini-body__image">
              <img :src="`${imageUrl}${image.image}`" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '@/plugins/thumbs'
import { mapGetters } from 'vuex'
export default {
  computed: {
    swiperSmall() {
      return this.$refs.mySwiperSmall.$swiper
    },
  },
  props: {
    isActive: {
      type: Boolean,
      default: () => false,
    },
    images: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters(['imageUrl']),
  },
  data() {
    return {
      swiperSmallOptions: null,
      // options: {
      //   loop: true,
      //   slidesPerView: 1,
      //   speed: 2000,
      //   keyboard: {
      //     enabled: true,
      //     onlyInViewport: true,
      //     pageUpDown: true,
      //   },
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   },
      // },
      swiperSmallOptions: null,
      swiperOptionThumbs: {
        loop: true,
        spaceBetween: 5,
        slidesPerView: 4,
        speed: 2000,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
      },
      swiperOptionTop: {
        slidesPerView: 1,
        loop: true,
        speed: 2000,
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
      this.swiperSmallOptions = new Swiper('.mini-body', {
        loop: true,
        spaceBetween: 5,
        slidesPerView: 4,
        speed: 2000,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
      })
    },
    swiperMainBig() {
      this.swiperSmallOptions = new Swiper('.body-gallery-photo-popup', {
        slidesPerView: 1,
        loop: true,
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
.gallery-photo-popup {
  transition: all 1s;
  opacity: 0;
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(9px);
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 479px) {
    background: #333333;
    backdrop-filter: none;
    align-items: inherit;
  }
  &__block {
    padding: 90px 20px;
    max-width: 76%;
    @media (max-width: 992px) {
      max-width: 85%;
    }
    @media (max-width: 479px) {
      padding: 0px;
      max-width: 100%;
    }
  }

  &__icon-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    @media (max-width: 479px) {
      position: absolute;
      z-index: 10;
      top: 40px;
      right: 20px;
    }
  }

  &__icon {
    padding: 20px;
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(25px);
    display: inline-flex;
    border-radius: 50%;
    cursor: pointer;
    @media (max-width: 767px) {
      padding: 14px;
      img {
        width: 14px;
        height: 14px;
      }
    }
    @media (max-width: 479px) {
      img {
        width: 11px;
        height: 11px;
      }
    }
  }

  &__body {
  }
}
.body-gallery-photo-popup {
  width: 100%;
  overflow: hidden;
  position: relative;
  @media (max-width: 479px) {
    margin-top: 286px;
    margin-bottom: 130px;
  }
  &__wrapper {
    display: flex;
    width: fit-content;
  }

  &__slide {
  }

  &__image {
    width: 100%;
    height: 788px;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  &__buttons {
  }

  &__prev {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    top: 50%;
    left: 20px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    z-index: 100;
    cursor: pointer;
  }

  &__next {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    top: 50%;
    right: 20px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    z-index: 100;
    cursor: pointer;
  }
}
.mini-body {
  opacity: 0;
  visibility: hidden;
  max-height: 0px;
  overflow: hidden;
  @media (max-width: 479px) {
    opacity: 1;
    visibility: visible;
    max-height: 100%;
    margin: 0px 20px;
  }

  &__wrapper {
    display: flex;
    width: fit-content;
  }

  &__slide {
  }

  &__image {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-slide-thumb-active {
    transition: all 0.3s;
    border: 1px solid #ffffff;
    border-radius: 2px;
  }
}
</style>
