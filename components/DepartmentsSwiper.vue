<template>
  <div class="departments-swiper">
    <div
      class="departments-swiper__swiper-top departments-swiper-top swiper mySwiper2"
      v-swiper:mySwiper="optionsTop"
    >
      <div class="departments-swiper-top__wrapper swiper-wrapper">
        <div class="departments-swiper-top__slide swiper-slide">
          <div class="departments-swiper-top__image">
            <img src="@/assets/img/home/departments/img_1.png" alt="surat" />
          </div>
        </div>
        <div class="departments-swiper-top__slide swiper-slide">
          <div class="departments-swiper-top__image">
            <img src="@/assets/img/home/departments/img_2.png" alt="surat" />
          </div>
        </div>
        <div class="departments-swiper-top__slide swiper-slide">
          <div class="departments-swiper-top__image">
            <img src="@/assets/img/home/departments/img_3.png" alt="surat" />
          </div>
        </div>
        <div class="departments-swiper-top__slide swiper-slide">
          <div class="departments-swiper-top__image">
            <img src="@/assets/img/home/departments/img_4.png" alt="surat" />
          </div>
        </div>
      </div>
      <div class="departments-swiper-top__buttons">
        <div class="departments-swiper-top__prev swiper-button-prev">
          <img src="@/assets/img/home/departments/prev.svg" alt="prev" />
        </div>
        <div class="departments-swiper-top__next swiper-button-next">
          <img src="@/assets/img/home/departments/next.svg" alt="next" />
        </div>
      </div>
    </div>
    <div
      class="departments-swiper__swiper-mini departments-swiper-mini swiper mySwiper"
    >
      <div class="departments-swiper-mini__wrapper swiper-wrapper">
        <div class="departments-swiper-mini__slide swiper-slide">
          <div class="departments-swiper-mini__image">
            <img src="@/assets/img/home/departments/img_1.png" alt="surat" />
          </div>
        </div>
        <div class="departments-swiper-mini__slide swiper-slide">
          <div class="departments-swiper-mini__image">
            <img src="@/assets/img/home/departments/img_2.png" alt="surat" />
          </div>
        </div>
        <div class="departments-swiper-mini__slide swiper-slide">
          <div class="departments-swiper-mini__image">
            <img src="@/assets/img/home/departments/img_3.png" alt="surat" />
          </div>
        </div>
        <div class="departments-swiper-mini__slide swiper-slide">
          <div class="departments-swiper-mini__image">
            <img src="@/assets/img/home/departments/img_4.png" alt="surat" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      optionsTop: {
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
}
</script>

<style lang="scss" scoped>
.departments-swiper {
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &__swiper-top {
  }

  &__swiper-mini {
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
      object-position: center;
    }
  }

  &__buttons {
  }

  &__prev {
    position: absolute;
    top: 50%;
    left: 20px;
    z-index: 10;
    img {
      height: 100px;
    }
  }

  &__next {
    position: absolute;
    top: 50%;
    right: 10px;
    z-index: 10;
    img {
      height: 100px;
    }
  }
}
.departments-swiper-mini {
  &__wrapper {
  }

  &__slide {
  }

  &__image {
  }
}
</style>
