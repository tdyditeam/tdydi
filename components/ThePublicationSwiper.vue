<template>
  <div class="publication__swiper-block-publication">
    <div
      v-swiper:mySwiper="options"
      class="swiper-block-publication-publication swiper"
    >
      <div class="swiper-block-publication__wrapper swiper-wrapper">
        <div
          v-for="img in images"
          :key="img.id"
          class="swiper-block-publication__slide swiper-slide"
        >
          <div class="swiper-block-publication__image">
            <img
              :src="require(`@/assets/img/home/publication/${img.imgPath}`)"
              alt="surat"
            />
          </div>
        </div>
        <!-- <div class="swiper-block-publication__slide swiper-slide">
          <div class="swiper-block-publication__image">
            <img src="@/assets/img/home/publication/img_1.png" alt="surat" />
          </div>
        </div>
        <div class="swiper-block-publication__slide swiper-slide">
          <div class="swiper-block-publication__image">
            <img src="@/assets/img/home/publication/img_1.png" alt="surat" />
          </div>
        </div>
        <div class="swiper-block-publication__slide swiper-slide">
          <div class="swiper-block-publication__image">
            <img src="@/assets/img/home/publication/img_1.png" alt="surat" />
          </div>
        </div>
        <div class="swiper-block-publication__slide swiper-slide">
          <div class="swiper-block-publication__image">
            <img src="@/assets/img/home/publication/img_1.png" alt="surat" />
          </div>
        </div>
        <div class="swiper-block-publication__slide swiper-slide">
          <div class="swiper-block-publication__image">
            <img src="@/assets/img/home/publication/img_1.png" alt="surat" />
          </div>
        </div>
        <div class="swiper-block-publication__slide swiper-slide">
          <div class="swiper-block-publication__image">
            <img src="@/assets/img/home/publication/img_1.png" alt="surat" />
          </div>
        </div>
        <div class="swiper-block-publication__slide swiper-slide">
          <div class="swiper-block-publication__image">
            <img src="@/assets/img/home/publication/img_1.png" alt="surat" />
          </div>
        </div>
        <div class="swiper-block-publication__slide swiper-slide">
          <div class="swiper-block-publication__image">
            <img src="@/assets/img/home/publication/img_1.png" alt="surat" />
          </div>
        </div>
        <div class="swiper-block-publication__slide swiper-slide">
          <div class="swiper-block-publication__image">
            <img src="@/assets/img/home/publication/img_1.png" alt="surat" />
          </div>
        </div> -->
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
        slidesPerView: 6.3,
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
          id: 3,
          imgPath: 'img_4.png',
        },
        {
          id: 3,
          imgPath: 'img_5.png',
        },
        {
          id: 3,
          imgPath: 'img_6.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.swiper-block-publication {
  &__slide {
  }

  &__image {
    width: 100%;
    height: 270px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
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
</style>
