<template>
  <div class="header">
    <div class="header__top">
      <div class="header__top-title">
        <h2>
          Türkmen döwlet ykdysadyýet <br />
          we dolandyryş instituty
        </h2>
      </div>
      <div class="header__top-logo">
        <img src="@/assets/icons/logo.png" alt="" />
      </div>
      <div class="header__top-content">
        <div class="languages">TM</div>
        <div class="contact">Contact</div>
      </div>
    </div>
    <div class="header__bottom"></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header {
  &__top {
    display: flex;
    align-items: center;
    &-title {
      h2 {
        padding: 29px 0;
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #333333;
      }
    }
    &-logo {
      width: 84px;
      height: 84px;
      flex: 1 1 auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
    &-content {
      display: flex;
      align-items: center;
      .languages {
      }
      .contact {
        margin-left: 15px;
        position: relative;
        &::after {
          content: '';
          position: absolute;
        }
      }
    }
  }
}
</style>
