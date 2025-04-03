<template>
  <div class="banner">
    <hero-slider :video="video"></hero-slider>
    <the-banner-title :mainYearText="mainYearText"></the-banner-title>
    <the-banner-statistics :indicators="indicators"></the-banner-statistics>
    <div class="neutrality-wrapper">
      <a href="https://neutrality.gov.tm" target="_blank">
        <img
          style="object-fit: contain"
          src="@/assets/img/neutrality.webp"
          alt=""
        />
      </a>
    </div>
    <!-- <the-video-banner></the-video-banner> -->

    <!-- <div class="banner-figure__wrapper">
      <div class="banner-figure__content"></div>
    </div>
    <div class="banner-figure__wrapper2">
      <div class="banner-figure__content2"></div>
    </div>
    <div class="banner-figure__wrapper3">
      <div class="banner-figure__content3"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: String,
      default: () => '',
    },
    mainYearText: {
      type: Object,
      default: () => null,
    },
    indicators: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  //   top: -215px;
  &-figure {
    &__wrapper {
      position: absolute;
      z-index: 2;
      border-radius: 10px;
      top: 204px;
      transform: translateY(-100%);
      //   transform: translateX(-488px);
      right: 433px;
    }
    &__content {
      width: 88px;
      height: 516px;
      border-radius: 10px;
      border: 4px solid var(--white);
      transform: rotate(-45deg);
      transform-origin: bottom left;
    }
    &__wrapper2 {
      position: absolute;
      z-index: 2;
      border-radius: 10px;
      top: 178px;
      transform: translateY(-100%);
      right: 312px;
    }
    &__content2 {
      width: 88px;
      height: 516px;
      border-radius: 10px;
      background: var(--primary);
      transform: rotate(-45deg);
      transform-origin: bottom left;
    }
    &__wrapper3 {
      position: absolute;
      z-index: 2;
      border-radius: 10px;
      top: 131px;
      transform: translateY(-100%);
      right: 168px;
    }
    &__content3 {
      width: 88px;
      height: 516px;
      border-radius: 10px;
      background: var(--primary);
      transform: rotate(45deg);
      transform-origin: bottom right;
    }
  }
}
.neutrality-wrapper {
  position: absolute;
  top: 37%;
  left: 10px;
  @media (max-width: 992px) {
    top: 38%;
  }
  @media (max-width: 767px) {
    top: 29%;
    left: 0px;
  }
  img {
    width: 150px;
    height: 100px;
    @media (max-width: 992px) {
    }
    @media (max-width: 767px) {
      width: 100px;
      height: 50px;
    }
  }
}
</style>
