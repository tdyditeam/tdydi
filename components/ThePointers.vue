<template>
  <div class="pointers">
    <h2 class="pointers__title">Ýokary görkezjiler!</h2>
    <div class="pointers__row">
      <div class="pointers__left">
        <div class="pointers__item">
          <p>1.</p>
          <p>
            Türkmen döwlet ykdysadyýet we dolandyryş institutynyň 4-nji ýyl
            talyby: Durdyýew Oraz
          </p>
        </div>
        <div class="pointers__item">
          <p>2.</p>
          <p>
            Türkmen döwlet ykdysadyýet we dolandyryş institutynyň 4-nji ýyl
            talyby: Durdyýew Oraz
          </p>
        </div>
        <div class="pointers__item">
          <p>3.</p>
          <p>
            Türkmen döwlet ykdysadyýet we dolandyryş institutynyň 4-nji ýyl
            talyby: Durdyýew Oraz
          </p>
        </div>
        <div class="pointers__item">
          <p>4.</p>
          <p>
            Türkmen döwlet ykdysadyýet we dolandyryş institutynyň 4-nji ýyl
            talyby: Durdyýew Oraz
          </p>
        </div>
        <div class="pointers__item">
          <p>5.</p>
          <p>
            Türkmen döwlet ykdysadyýet we dolandyryş institutynyň 4-nji ýyl
            talyby: Durdyýew Oraz
          </p>
        </div>
        <div class="pointers__item">
          <p>6.</p>
          <p>
            Türkmen döwlet ykdysadyýet we dolandyryş institutynyň 4-nji ýyl
            talyby: Durdyýew Oraz
          </p>
        </div>
        <div class="pointers__item">
          <p>7.</p>
          <p>
            Türkmen döwlet ykdysadyýet we dolandyryş institutynyň 4-nji ýyl
            talyby: Durdyýew Oraz
          </p>
        </div>
        <div class="pointers__item">
          <p>8.</p>
          <p>
            Türkmen döwlet ykdysadyýet we dolandyryş institutynyň 4-nji ýyl
            talyby: Durdyýew Oraz
          </p>
        </div>
        <div class="pointers__item">
          <p>9.</p>
          <p>
            Türkmen döwlet ykdysadyýet we dolandyryş institutynyň 4-nji ýyl
            talyby: Durdyýew Oraz
          </p>
        </div>
        <div class="pointers__item">
          <p>10.</p>
          <p>
            Türkmen döwlet ykdysadyýet we dolandyryş institutynyň 4-nji ýyl
            talyby: Durdyýew Oraz
          </p>
        </div>
      </div>
      <div class="pointers__right">
        <div class="pointers__image">
          <img src="@/assets/img/home/pointers-image.png" alt="img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.pointers {
  padding: 15px 0px;
  &__title {
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    color: #333333;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
    @media (max-width: 479px) {
      font-size: 16px;
    }
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 520px;
    max-height: 400px;
    overflow: auto;
    @media (max-width: 767px) {
      max-width: 100%;
      max-height: 300px;
    }
  }

  &__item {
    display: flex;
    align-items: flex-start;
    padding: 10px;
    margin-right: 2px;
    border-bottom: 1px solid #ebebeb;
    border-radius: 4px;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: #333333;
    @media (max-width: 479px) {
      font-size: 16px;
    }
  }

  &__right {
    width: 800px;
    @media (max-width: 1100px) {
      width: 100%;
    }
  }

  &__image {
    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;
    }
  }
}
</style>
