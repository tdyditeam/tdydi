<template>
  <div class="partners-swiper">
    <div v-swiper:mySwiper="options" class="partners-swiper__swiper swiper">
      <div class="partners-swiper__wrapper swiper-wrapper">
        <div
          v-for="(img, index) in images"
          :key="img.id"
          class="partners-swiper__slide swiper-slide"
        >
          <div class="partners-swiper__body">
            <div class="partners-swiper__image">
              <img
                :src="require(`@/assets/img/home/partners/${img.imgPath}`)"
                alt="surat"
              />
            </div>
            <h2 class="partners-swiper__title">
              {{ $t(`internationalPartnership[${index}]`) }}
            </h2>
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
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
      images: [
        {
          id: 1,
          imgPath: 'img_1.png',
        },
        {
          id: 2,
          imgPath: 'img_2.png',
        },
        {
          id: 3,
          imgPath: 'img_3.png',
        },
        {
          id: 4,
          imgPath: 'img_4.png',
        },
        {
          id: 5,
          imgPath: 'img_5.png',
        },
        {
          id: 6,
          imgPath: 'img_6.png',
        },
        {
          id: 7,
          imgPath: 'img_7.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.partners-swiper {
  padding-bottom: 100px;
  @media (max-width: 767px) {
    padding-bottom: 40px;
  }
  &__swiper {
  }

  &__wrapper {
    display: flex;
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
  }

  &__image {
    img {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    text-align: center;
  }
}
</style>
