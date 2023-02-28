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
          delay: 1500,
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
          id: 7,
          imgPath: 'img_7.png',
        },
        {
          id: 4,
          imgPath: 'img_4.png',
        },
        {
          id: 8,
          imgPath: 'img_8.png',
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
          id: 9,
          imgPath: 'img_9.png',
        },
        {
          id: 10,
          imgPath: 'img_10.png',
        },
        {
          id: 11,
          imgPath: 'img_11.png',
        },
        {
          id: 12,
          imgPath: 'img_12.png',
        },
        {
          id: 13,
          imgPath: 'img_13.png',
        },
        {
          id: 14,
          imgPath: 'img_14.png',
        },
        {
          id: 15,
          imgPath: 'img_15.png',
        },
      ],
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
</style>
