<template>
  <div class="article__swiper-block">
    <div v-swiper:mySwiper="options" class="swiper-block swiper">
      <div class="swiper-block__wrapper swiper-wrapper">
        <article-item
          class="swiper-slide"
          v-for="(event, index) in events"
          :key="event.id"
          :event="event"
          @clickOneItem="
            (id) => $router.push(localeLocation(`/events/${activeId}/${id}`))
          "
        ></article-item>
      </div>
      <div class="swiper-block__buttons">
        <div class="swiper-block__next swiper-button-prev">
          <img src="@/assets/img/home/article/prev.svg" alt="icon" />
        </div>
        <div class="swiper-block__prev swiper-button-next">
          <img src="@/assets/img/home/article/next.svg" alt="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
export default {
  props: {
    events: {
      type: Array,
      default: () => [],
    },
    activeId: {
      type: Number,
      default: () => 1,
    },
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      options: {
        spaceBetween: 30,
        loop: false,
        cache: false,
        autoplay: false,
        slidesPerView: 3.2,
        speed: 1000,
        lazy: true,
        lazyPreloaderClass: 'swiper-lazy-preloader',
        breakpoints: {
          320: {
            slidesPerView: 1.2,
          },
          480: {
            slidesPerView: 1.2,
          },
          740: {
            slidesPerView: 2.2,
          },
          1050: {
            slidesPerView: 3.2,
          },
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        keyboard: {
          enabled: true,
        },
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.article {
  font-family: 'Roboto Flex';
}
.swiper-block {
  &__wrapper {
    margin-bottom: 20px;
  }

  &__buttons {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
  }

  &__next {
    padding: 14px;
    background: #eef0f4;
    border-radius: 24px;
    border-radius: 50%;
    cursor: pointer;
    @media (max-width: 479px) {
      padding: 10px;
    }
  }

  &__prev {
    padding: 14px;
    background: #eef0f4;
    border-radius: 24px;
    border-radius: 50%;
    cursor: pointer;
    @media (max-width: 479px) {
      padding: 10px;
    }
  }
}
</style>
