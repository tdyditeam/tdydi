<template>
  <div class="hero-slider" v-if="video">
    <video class="banner__video" id="videos" autoplay muted loop poster="1.jpg">
      <source :src="`${imageUrl}${video}`" />
    </video>
    <div class="overlay"></div>
  </div>
  <!-- <div class="hero-slider">
    <div
      v-swiper:mySwiper="options"
      class="swiper-container hero-slider__slider"
    >
      <div class="swiper-wrapper hero-slider__wrapper">
        <div
          v-for="img in images"
          :key="img.id"
          class="swiper-slide hero-slider__img"
        >
          <nuxt-img :src="img.path" alt="" />
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    video: {
      type: String,
      default: () => '',
    },
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['imageUrl']),
  },
  mounted() {
    let slide = document.querySelector(
      '.hero-slider__img[data-swiper-slide-index="0"]'
    )
    if (slide) {
      if (slide.children && slide.children[0]) {
        slide.children[0].style.animationDuration = '7s'
      }
    }
  },
}
</script>

<style scoped lang="scss">
.banner__video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000057;
}
.hero-slider {
  height: calc(100vh - 40px);
  width: 100%;
  position: relative;
  @media (max-width: 600px) {
    height: calc(100vh - 140px);
  }
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
  animation-duration: 9s;
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
