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
        v-swiper:mySwiper="options"
      >
        <div class="body-gallery-photo-popup__wrapper swiper-wrapper">
          <div class="body-gallery-photo-popup__slide swiper-slide">
            <div class="body-gallery-photo-popup__image">
              <img
                src="@/assets/img/home/gallery-popup/img_1.png"
                alt="surat"
              />
            </div>
          </div>
          <div class="body-gallery-photo-popup__slide swiper-slide">
            <div class="body-gallery-photo-popup__image">
              <img
                src="@/assets/img/home/gallery-popup/img_1.png"
                alt="surat"
              />
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      options: {
        loop: true,
        slidesPerView: 1,
        speed: 2000,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
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
.gallery-photo-popup {
  &.active {
    opacity: 1;
    visibility: visible;
  }
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
  &__block {
    padding: 90px 20px;
    max-width: 1400px;
  }

  &__icon-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }

  &__icon {
    padding: 20px;
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(25px);
    display: inline-flex;
    border-radius: 50%;
    cursor: pointer;
  }

  &__body {
  }
}
.body-gallery-photo-popup {
  position: relative;
  &__wrapper {
    display: flex;
    width: 100%;
  }

  &__slide {
    position: relative;
  }

  &__image {
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
    padding: 20px;
    top: 50%;
    left: 20px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    z-index: 100;
    cursor: pointer;
  }

  &__next {
    position: absolute;
    padding: 20px;
    top: 50%;
    right: 20px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    z-index: 100;
    cursor: pointer;
  }
}
</style>
