<template>
  <div class="partners-swiper">
    <div v-swiper:mySwiper="options" class="partners-swiper__swiper swiper">
      <div class="partners-swiper__wrapper swiper-wrapper">
        <div
          v-for="(img, index) in items"
          :key="img.id"
          class="partners-swiper__slide swiper-slide"
        >
          <div class="partners-swiper__body">
            <div class="partners-swiper__image">
              <img :src="`${imageUrl}${img.image}`" alt="surat" />
            </div>
            <div class="partners-swiper__title" v-html="img.description"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters(['imageUrl']),
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      options: {
        spaceBetween: 30,
        loop: true,
        slidesPerView: 7.4,
        speed: 2000,
        breakpoints: {
          320: {
            slidesPerView: 2.4,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 3.4,
            spaceBetween: 15,
          },
          740: {
            slidesPerView: 5.4,
          },
          1050: {
            slidesPerView: 7.4,
          },
        },
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.partners-swiper {
  position: relative;
  padding-bottom: 100px;
  @media (max-width: 767px) {
    padding-bottom: 40px;
  }
  &__swiper {
    position: relative;
  }

  &__wrapper {
    display: flex;

    height: 100%;
  }

  &__slide {
    border: 1px solid #aeaeae;
    border-radius: 4px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 12px 14px;
    height: 218px;
  }

  &__image {
    width: 134px;
    height: 134px;
    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: contain;
    }
  }

  &__title {
    text-align: center;
  }
}
</style>
