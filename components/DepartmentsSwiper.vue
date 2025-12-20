<template>
  <div class="departments-swiper">
    <div
      v-if="Number($route.params.slug) === 3"
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
            <img :src="getImageSrc(item)" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div
      v-else-if="items && items.length && items[0] !== ''"
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
            <img :src="getImageSrc(item)" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div
      v-else-if="items && items.length > 1"
      class="departments-swiper__swiper-mini departments-swiper-mini swiper mySwiper"
      ref="mySwiperSmall"
    >
      <div class="departments-swiper-mini__wrapper swiper-wrapper">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="departments-swiper-mini__slide swiper-slide"
        >
          <div class="departments-swiper-mini__image">
            <img :src="getImageSrc(item)" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="departments-swiper__text" v-html="datas?.description"></div>
  </div>
</template>

<script>
import Swiper from '@/plugins/thumbs'
import { mapGetters } from 'vuex'
export default {
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
      swiperSmallInstance: null,
      swiperTopInstance: null,
    }
  },
  computed: {
    ...mapGetters(['imageUrl']),
  },
  mounted() {
    this.$nextTick(() => {
      this.initSwipers()
    })
  },
  beforeDestroy() {
    if (this.swiperSmallInstance) {
      this.swiperSmallInstance.destroy(true, true)
    }
    if (this.swiperTopInstance) {
      this.swiperTopInstance.destroy(true, true)
    }
  },
  methods: {
    getImageSrc(imageUrl) {
      if (!imageUrl) return ''
      // Если изображение уже полный URL, используем его как есть
      if (imageUrl.startsWith('http://') || imageUrl.startsWith('https://')) {
        return imageUrl
      }
      // Иначе добавляем префикс imageUrl
      return `${this.imageUrl}${imageUrl}`
    },
    initSwipers() {
      const currentSlug = Number(this.$route.params.slug)
      const hasMultipleItems = this.items && this.items.length > 1

      // Не инициализируем Swiper для slug === 3 или когда только одно изображение
      if (currentSlug === 3 || !hasMultipleItems) {
        return
      }

      // Инициализируем мини-свайпер только если есть несколько элементов
      const miniElement = document.querySelector('.departments-swiper-mini')
      if (miniElement) {
        this.swiperSmallInstance = new Swiper('.departments-swiper-mini', {
          loop: true,
          spaceBetween: 20,
          slidesPerView: 4,
          speed: 2000,
          watchSlidesProgress: true,
          slideToClickedSlide: true,
        })

        // Инициализируем верхний свайпер с thumbs
        const topElement = document.querySelector('.departments-swiper-top')
        if (topElement) {
          this.swiperTopInstance = new Swiper('.departments-swiper-top', {
            slidesPerView: 1,
            speed: 2000,
            thumbs: {
              swiper: this.swiperSmallInstance,
            },
          })
        }
      }
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
  flex: 1 1 auto;
  &__text {
    font-family: 'Roboto Flex';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000;
    text-align: justify;
    :deep(a) {
      color: var(--primary);
    }
  }
}
.departments-swiper-top {
  width: 100%;
  height: 500px;
  position: relative;
  @media (max-width: 700px) {
    height: 400px;
  }
  @media (max-width: 500px) {
    height: 300px;
  }
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
      @media (max-width: 720px) {
        object-fit: fill;
      }
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
    width: 210px;
    height: 150px;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
