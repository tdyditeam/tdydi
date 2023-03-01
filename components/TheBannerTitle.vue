<template>
  <div class="banner__title">
    <div class="banner__title-img">
      <img src="/logo2022.png" alt="" />
    </div>
    <div v-html="$t('slogan')" class="banner__title-text"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banner {
  &__title {
    position: absolute;
    top: 30%;
    left: 0;
    transform: translateY(-50%);
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 8px 40px;
    background: linear-gradient(
      90.45deg,
      var(--primary) -7.63%,
      rgba(255, 255, 255, 0) 98.57%
    );
    @media (max-width: 992px) {
      padding: 5px 20px;
      top: 30%;
    }
    @media (max-width: 767px) {
      top: 25%;
    }
    &-img {
      width: 100px;
      height: 100px;
      margin-right: 14px;
      img {
        width: 100%;
        height: 100%;
      }
      @media (max-width: 767px) {
        width: 70px;
        height: 70px;
      }
      @media (max-width: 479px) {
        width: 40px;
        height: 40px;
      }
    }
    &-text {
      font-family: 'Roboto Flex';
      font-weight: 700;
      color: var(--white);
      font-size: 30px;
      line-height: 120%;
      text-transform: uppercase;
      @media (max-width: 767px) {
        font-size: 24px;
      }
      @media (max-width: 767px) {
        font-size: 14px;
      }
    }
  }
}
</style>
