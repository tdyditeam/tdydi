<template>
  <div class="banner">
    <hero-slider></hero-slider>
    <the-banner-title></the-banner-title>
    <the-banner-statistics></the-banner-statistics>
    <div class="banner__figure">
      <img src="@/assets/img/home/figure.png" alt="" />
    </div>
    <!-- <div class="banner__figure-white white1"></div> -->
    <!-- <div class="banner__figure-white white2"></div> -->
    <!-- <div class="banner__figure-green green1"></div> -->
    <!-- <div class="banner__figure-green green2"></div> -->
    <!-- <div class="banner__figure-green green3"></div> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  &__figure {
    position: absolute;
    right: 0;
    top: 0;
    width: 50%;
    height: 100%;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    //  background: url('@/assets/img/home/figure.png');
    //  background-position: center center;
    //  background-repeat: no-repeat;

    &-white {
      height: 88px;
      border: 4px solid #ffffff;
      background: transparent;
      border-radius: 10px;
      width: 516px;
      z-index: 1;
      position: absolute;
    }
    &-green {
      height: 88px;
      border-radius: 10px;
      background: var(--primary);
      width: 516px;
      z-index: 1;
      position: absolute;
    }
  }
}
.white1 {
  right: 434px;
  top: 204px;
  transform: rotate(45deg);
}
.green1 {
  right: 312px;
  top: 178px;
  transform: rotate(45deg);
}
.green2 {
  right: -197px;
  top: 131px;
  transform: rotate(-45deg);
}
.green3 {
  right: 0;
  bottom: 0;
  transform: rotate(45deg);
  transform-origin: 50% 0%;
}
</style>
