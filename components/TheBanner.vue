<template>
  <div class="banner">
    <hero-slider></hero-slider>
    <div class="banner__title">
      <div class="banner__title-img">
        <img src="/logo2022.png" alt="" />
      </div>
      <div class="banner__title-text">
        ARKADAG SERDARLY <br />
        BAGTYÝAR ÝAŞLAR ÝYLY
      </div>
    </div>
    <div class="banner__statistics">
      <div class="banner__statistics-item">
        <div class="banner__statistics-icon">
          <img src="@/assets/icons/faculti.png" alt="" />
        </div>
        <div class="banner__statistics-text">
          <span>Fakultetler</span>
          <span>4</span>
        </div>
      </div>
      <div class="banner__statistics-item">
        <div class="banner__statistics-icon">
          <img src="@/assets/icons/hunaler.png" alt="" />
        </div>
        <div class="banner__statistics-text">
          <span>Hünärler</span>
          <span>52</span>
        </div>
      </div>
      <div class="banner__statistics-item">
        <div class="banner__statistics-icon">
          <img src="@/assets/icons/teacher.png" alt="" />
        </div>
        <div class="banner__statistics-text">
          <span>Mugallymlar</span>
          <span>277</span>
        </div>
      </div>
      <div class="banner__statistics-item">
        <div class="banner__statistics-icon">
          <img src="@/assets/icons/student.png" alt="" />
        </div>
        <div class="banner__statistics-text">
          <span>Talyplar</span>
          <span>3320</span>
        </div>
      </div>
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
    top: 40%;
    left: 0;
    transform: translateY(-50%);
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 8px 40px;
    background: linear-gradient(
      90.7deg,
      var(--primary) -7.43%,
      rgba(255, 255, 255, 0.13) 109.11%
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
      font-weight: 500;
      color: var(--white);
      font-size: 30px;
      line-height: 36px;
      text-transform: uppercase;
      //   -webkit-text-stroke: 0.7px var(--text); /* width and color */
    }
  }
}
</style>
