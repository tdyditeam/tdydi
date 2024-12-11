<template>
  <div class="publication__swiper-block-publication">
    <div
      v-swiper:mySwiper="options"
      ref="imageContainer"
      class="swiper-block-publication-publication swiper"
    >
      <div class="swiper-block-publication__wrapper swiper-wrapper">
        <div
          v-for="(img, index) in images.map((item) => {
            return {
              ...item,
              isLoading: true,
            }
          })"
          :key="img.id"
          class="swiper-block-publication__slide swiper-slide"
        >
          <div
            class="swiper-block-publication__image"
            :class="{ 'loading-image': img.isLoading }"
          >
            <img
              v-if="isVisible"
              :src="`${imageUrl}${img.image}`"
              alt="surat"
              @load="images[index].isLoading = true"
            />
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
    images: {
      type: Array,
      default: () => [],
    },
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      isVisible: false,
      options: {
        spaceBetween: 30,
        loop: true,
        slidesPerView: 6.3,
        lazy: true,
        speed: 2000,
        breakpoints: {
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3.3,
          },
          740: {
            slidesPerView: 4.3,
          },
          1050: {
            slidesPerView: 6.3,
          },
        },
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        keyboard: {
          enabled: true,
        },
        grabCursor: true,
      },
    }
  },
  computed: {
    ...mapGetters(['imageUrl']),
  },
  mounted() {
    if (this.$refs.imageContainer) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true
          observer.disconnect()
        }
      })
      observer.observe(this.$refs.imageContainer)
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper-block-publication {
  &__image {
    width: 100%;
    height: 270px;
    cursor: pointer;
    transition: all 0.3s;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    &:hover {
      box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    }
    @media (max-width: 992px) {
      height: 220px;
    }
    @media (max-width: 620px) {
      height: 180px;
    }
    @media (max-width: 479px) {
      height: 250px;
    }
    @media (max-width: 400px) {
      height: 200px;
    }
  }
}
.loading-image {
  width: 100%;
  height: 270px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
  @media (max-width: 992px) {
    height: 220px;
  }
  @media (max-width: 620px) {
    height: 180px;
  }
  @media (max-width: 479px) {
    height: 250px;
  }
  @media (max-width: 400px) {
    height: 200px;
  }
}
@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>
