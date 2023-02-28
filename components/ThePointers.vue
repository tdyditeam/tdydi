<template>
  <div class="pointers">
    <h2 class="pointers__title">{{ $t('button.theBest') }}</h2>
    <div class="pointers__row">
      <div class="pointers__left">
        <div v-for="(item, index) in 10" :key="item" class="pointers__item">
          <p>{{ index + 1 }}.</p>
          <p>
            Türkmen döwlet ykdysadyýet we dolandyryş institutynyň 4-nji ýyl
            talyby:Durdyýew Oraz
          </p>
        </div>
      </div>
      <div class="pointers__right">
        <div class="pointers__image">
          <img src="@/assets/img/home/pointers-image.webp" alt="img" />
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
    box-shadow: 0px 3px 9px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-right: 2px;
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
