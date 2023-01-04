<template>
  <div class="banner__title">
    <div class="banner__title-img">
      <img src="/logo2022.png" alt="" />
    </div>
    <div class="banner__title-text">
      ARKADAG SERDARLY <br />
      BAGTYÝAR ÝAŞLAR ÝYLY
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banner {
  &__title {
    position: absolute;
    top: 20%;
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
    &-img {
      width: 100px;
      height: 100px;
      margin-right: 14px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-text {
      font-family: 'Gilroy';
      font-weight: 700;
      color: var(--white);
      font-size: 30px;
      line-height: 36px;
      text-transform: uppercase;
      //   -webkit-text-stroke: 0.7px var(--text); /* width and color */
    }
  }
}
</style>
