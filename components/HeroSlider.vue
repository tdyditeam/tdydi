<template>
  <div class="hero-slider">
    <div
      v-swiper:mySwiper="options"
      class="swiper-container hero-slider__slider"
    >
      <div class="swiper-wrapper hero-slider__wrapper">
        <div class="swiper-slide hero-slider__img">
          <img src="/1.jpg" alt="" />
        </div>
        <div class="swiper-slide hero-slider__img">
          <img src="/TDYweDI_3.jpg" alt="" />
        </div>
        <div class="swiper-slide hero-slider__img">
          <img src="/TDYweDI_2.jpg" alt="" />
        </div>
      </div>
    </div>
    <!-- <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        v-for="(slider, index) in images"
        :key="index"
        class="slider-item"
      >
      </swiper-slide
    ></swiper> -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {},
  data() {
    return {
      options: {
        slidesPerView: 1,
        loop: true,
        speed: 2000,
        breakpoints: {},
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
      },

      images: [
        // {
        //   id: 1,
        //   path: '/TDYweDI_1.jpg',
        // },
        // {
        //   id: 2,
        //   path: '/TDYweDI_2.jpg',
        // },
        {
          id: 3,
          path: '/1.jpg',
        },
      ],
    }
  },

  methods: {},
}
</script>

<style scoped lang="scss">
.hero-slider {
  height: calc(100vh - 205px);
  width: 100%;
  //   height: 500px;
  &__slider {
    width: 100%;
    height: 100%;
  }
  &__wrapper {
    width: 100%;
    height: 100%;
  }
  &__img {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      transform: scale(1);
    }
  }
}
.swiper-slide-active.hero-slider__img img {
  animation-name: mymove;
  animation-timing-function: linear;
  animation-duration: 7s;
  animation-fill-mode: forwards;
}
.swiper-slide-prev.hero-slider__img img {
  transform: scale(1.4);
}
@keyframes mymove {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.1);
  }

  50% {
    transform: scale(1.2);
  }
  75% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1.4);
  }
}
</style>
