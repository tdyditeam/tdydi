<template>
  <div class="view">
    <div class="view__row">
      <div class="view__item">
        <div class="view__left">
          <p class="view__number">152</p>
          <p class="view__text">Okyjalaryn sany</p>
        </div>
        <div class="view__right">
          <div class="view__image">
            <img src="@/assets/img/home/icon-view.svg" alt="icon" />
          </div>
        </div>
      </div>
      <div class="view__item view__item-second">
        <div class="view__left">
          <p class="view__number">1663</p>
          <p class="view__text">Web sahypany gorenlerin sany</p>
        </div>
        <div class="view__right">
          <div class="view__image">
            <img src="@/assets/img/home/icon-view_2.svg" alt="icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.view {
  padding: 15px 0px;
  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 122px;
    justify-content: space-between;
    padding: 20px 20px;
    background-color: #f8f8f8;
    border-radius: 10px;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background: #ddfdef;
    border-radius: 10px;
  }

  &__item-second {
    background-color: #e9f4fe;
  }

  &__left {
  }

  &__number {
    font-weight: 400;
    font-size: 50px;
    line-height: 120%;
    color: #333333;
    @media (max-width: 479px) {
      font-size: 30px;
    }
  }

  &__text {
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    color: #586a84;
    @media (max-width: 479px) {
      font-size: 14px;
    }
  }

  &__right {
  }

  &__image {
  }
}
</style>
