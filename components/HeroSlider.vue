<template>
  <div class="hero-slider">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        v-for="(slider, index) in images"
        :key="index"
        class="slider-item th-fullpage hero-area"
        :style="`backgroundImage:url(${slider.path}); width:100%; heigth:100% `"
      >
      </swiper-slide
    ></swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    // sliders: {
    //   type: Array,
    //   default: () => [],
    // },
    // imgURL: {
    //   type: String,
    //   default: () => '',
    // },
  },
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        loop: true,
        speed: 2000,
        autoplayStopOnLast: false,

        navigation: {
          //   nextEl: '.prevArrow .slick-arrow',
          //   prevEl: '.nextArrow .slick-arrow',
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
      },
      images: [
        {
          id: 1,
          path: '/TDYweDI_1.jpg',
        },
        {
          id: 2,
          path: '/TDYweDI_2.jpg',
        },
        {
          id: 3,
          path: '/TDYweDI_3.jpg',
        },
        {
          id: 4,
          path: '/TDYweDI_4.jpg',
        },
      ],
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    calculateImage() {
      return this.images.filter((slider) => {
        if (slider && slider.path) {
          return `background-image:url(${slider.path}); width:100%; heigth:100%`
        }
      })
    },
  },
  async mounted() {
    await this.swiper
    // await this.addClass()
  },
  methods: {
    addClass() {
      const elemActive = document.querySelector('.swiper-slide-active')
      const elH1Active =
        elemActive &&
        elemActive.children[0] &&
        elemActive.children[0].children[0] &&
        elemActive.children[0].children[0].children[0] &&
        elemActive.children[0].children[0].children[0].children[0]
          ? elemActive.children[0].children[0].children[0].children[0]
          : ''
      const elDivActive =
        elemActive &&
        elemActive.children[0] &&
        elemActive.children[0].children[0] &&
        elemActive.children[0].children[0].children[0] &&
        elemActive.children[0].children[0].children[0].children[1]
          ? elemActive.children[0].children[0].children[0].children[1]
          : ''

      elH1Active && elH1Active.classList && elH1Active.classList.add('fadeInUp')
      elH1Active && elH1Active.classList && elH1Active.classList.add('animated')
      elDivActive &&
        elDivActive.classList &&
        elDivActive.classList.add('fadeInUp')
      elDivActive &&
        elDivActive.classList &&
        elDivActive.classList.add('animated')
    },
    onSwiperSlideChangeTransitionStart() {
      this.addClass()
    },
    onSwiperSlideChangeTransitionEnd() {
      const elemNext = document.querySelector('.swiper-slide-next')
      const elemPrev = document.querySelector('.swiper-slide-prev')
      const elH1Next = elemNext.children[0].children[0].children[0].children[0]
      const elDivNext = elemNext.children[0].children[0].children[0].children[1]
      const elH1Prev = elemPrev.children[0].children[0].children[0].children[0]
      const elDivPrev = elemPrev.children[0].children[0].children[0].children[1]

      elH1Next.classList.remove('fadeInUp')
      elH1Next.classList.remove('animated')
      elDivNext.classList.remove('fadeInUp')
      elDivNext.classList.remove('animated')
      elH1Prev.classList.remove('fadeInUp')
      elH1Prev.classList.remove('animated')
      elDivPrev.classList.remove('fadeInUp')
      elDivPrev.classList.remove('animated')
    },
  },
}
</script>

<style scoped>
.swiper-slide-active {
  background-size: 150% !important;
}

.hero-area {
  background-size: cover;
  height: 100vh;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.hero-area:before {
  content: '';
  background: rgba(0, 0, 0, 0.63);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.hero-area .block {
  color: #fff;
}

.hero-area .block h1 {
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 20px;
  text-transform: uppercase;
}

.hero-area .block p {
  color: #fff;
  width: 50%;
  margin-bottom: 20px;
}

.hero-area .block .btn-main {
  margin-right: 8px;
}

.hero-area .block .btn-main:hover {
  opacity: 0.8;
}

.hero-area-video {
  height: 100vh;
  position: inherit !important;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.hero-area-video .block {
  color: #fff;
  text-align: center;
}

.hero-area-video .block h1 {
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 20px;
}

.hero-area-video .block p {
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 3px;
  margin-bottom: 20px;
}

.hero-area-video .block .btn-main {
  margin-top: 20px;
}

.dark-bg {
  background: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
}

.slider-item {
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  transition: 20s background-size;
}

.slider-item::before {
  position: absolute !important;
  content: '' !important;
  height: 100% !important;
  width: 100% !important;
  background: rgba(0, 0, 0, 0.5) !important;
  left: 0 !important;
  top: 0 !important;
}

.slider-item .container {
  position: absolute !important;
  left: 0 !important;
  right: 0 !important;
  top: 50% !important;
  -webkit-transform: translateY(-50%) !important;
  transform: translateY(-50%) !important;
}

.slider-item h1 {
  color: #fff !important;
  font-size: 60px !important;
  line-height: 70px !important;
  letter-spacing: 2px !important;
  font-weight: 700 !important;
  margin-bottom: 20px !important;
}

.slider-item p {
  color: #fff !important;
  margin-bottom: 20px !important;
}

.hero-slider {
  overflow-x: hidden;
}
.hero-slider .slider-item.slick-active {
  background-size: 120%;
}

/* .hero-slider .prevArrow {
  left: -100px;
}

.hero-slider .nextArrow {
  right: -100px;
}

.hero-slider:hover .prevArrow {
  left: 20px;
}

.hero-slider:hover .nextArrow {
  right: 20px;
} */

/* slick style */
.slick-slide {
  outline: 0;
}

.slick-slide img {
  display: unset;
}

/* slick arrows */
/* .slick-arrow {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 9;
  height: 70px;
  width: 70px;
  background: rgba(255, 0, 0, 0.24);

  color: #fff;
  border: 0;
  line-height: 70px;
  font-size: 35px;
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
  border-radius: 50%;
}

.slick-arrow::before {
  position: absolute;
  content: '';
  height: 10px;
  width: 10px;
  background: transparent;
  top: 50%;
  -webkit-transform: translateY(-50%) rotate(-45deg);
  transform: translateY(-50%) rotate(-45deg);
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
}

.slick-arrow::after {
  position: absolute;
  content: '';
  height: 2px;
  width: 25px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  background: #fff;
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
}

.slick-arrow:focus {
  outline: 0;
}

.slick-arrow:hover {
  background: #ff0000;
}

.prevArrow {
  left: 0px;
}

.prevArrow::before {
  border-left: 2px solid #fff;
  border-top: 2px solid #fff;
  right: 35px;
}

.prevArrow::after {
  right: 20px;
}

.nextArrow {
  right: 0px;
}

.nextArrow::before {
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  left: 35px;
}

.nextArrow::after {
  left: 20px;
} */
</style>
