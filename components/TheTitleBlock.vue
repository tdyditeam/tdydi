<template>
  <div class="title-block">
    <div class="title-block__row">
      <div class="title-block__title">Wakalar</div>
      <div class="title-block__buttons buttons-title-block">
        <button
          class="buttons-title-block__button buttons-title-block__button--green"
        >
          Täzelikler
        </button>
        <button
          class="buttons-title-block__button buttons-title-block__button--light"
        >
          Makalalar
        </button>
        <button
          class="buttons-title-block__button buttons-title-block__button--dark"
        >
          Hemmesi
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.title-block {
  padding-bottom: 20px;
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 1px solid #808884;
  }

  &__title {
    font-weight: 500;
    font-size: 40px;
    line-height: 117.5%;
    @media (max-width: 767px) {
      font-size: 26px;
    }
    @media (max-width: 479px) {
      font-size: 16px;
    }
  }

  &__buttons {
  }
}
.buttons-title-block {
  display: flex;
  gap: 5px;
  &__button {
    padding: 8px 12px;
    color: #16ab65;
    font-weight: 400;
    font-size: 14px;
    line-height: 116.6%;
    transition: all 0.3s;
    &:active {
      background-color: #16ab65;
    }
    &--green {
      background-color: #e5f3ff;
      border-radius: 6px 0px 0px 6px;
      &:hover {
        background-color: #16ab65;
        color: #fff;
      }
    }
    &--light {
      background-color: #e5f3ff;
      &:hover {
        background-color: #16ab65;
        color: #fff;
      }
    }
    &--dark {
      color: #fff;
      background-color: #333333;
      border-radius: 0px 6px 6px 0px;
      &:hover {
        background-color: #4f4e4e;
      }
    }
    @media (max-width: 479px) {
      font-size: 12px;
      padding: 6px 10px;
    }
  }
}
</style>
