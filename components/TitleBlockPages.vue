<template>
  <div class="title-block-pages">
    <div class="title-block-pages__row">
      <div class="title-block-pages__title-wrapper">
        <h2 class="title-block-pages__title">MAGLUMAT ULGAMLARY KAFEDRASY</h2>
      </div>
      <div class="title-block-pages__button-wrapper">
        <button class="title-block-pages__button">
          <p>Hormatly mugallymlar</p>
          <span><img src="@/assets/img/home/icon-go.svg" alt="icon" /></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.title-block-pages {
  max-width: 900px;
  padding: 10px 0px 20px 0px;
  font-family: 'Gilroy';
  &__row {
    display: flex;
    align-items: center;
  }

  &__title-wrapper {
    flex: 1 1 auto;
  }

  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    text-transform: uppercase;
    color: #16ab65;
    &::before {
      content: '';
      border-left: 3px solid;
      padding-right: 20px;
    }
  }

  &__button-wrapper {
  }

  &__button {
    display: flex;
    gap: 5px;
    background-color: #16ab65;
    border-radius: 9px;
    color: #fff;
    padding: 12px 14px;
    span {
      margin-top: 2px;
    }
  }
}
</style>
