<template>
  <div class="banners-outside">
    <div class="banners-outside__row">
      <div class="banners-outside__bannner-left">
        <div class="banners-outside__image">
          <img
            v-if="$i18n.locale === 'tm'"
            src="@/assets/img/home/banners-outside/imageonline-co-gifimage.gif"
            alt="img"
          />
          <img
            v-if="$i18n.locale === 'ru'"
            src="@/assets/img/home/banners-outside/imageonline-co-gifimageRu.gif"
            alt="img"
          />
          <img
            v-if="$i18n.locale === 'en'"
            src="@/assets/img/home/banners-outside/imageonline-co-gifimageEn.gif"
            alt="img"
          />
        </div>
      </div>
      <div class="banners-outside__bannner-right">
        <div class="banners-outside__image">
          <img
            v-if="$i18n.locale === 'tm'"
            src="@/assets/img/home/banners-outside/banking.gif"
            alt="img"
          />
          <img
            v-if="$i18n.locale === 'ru'"
            src="@/assets/img/home/banners-outside/bankingRu.gif"
            alt="img"
          />
          <img
            v-if="$i18n.locale === 'en'"
            src="@/assets/img/home/banners-outside/bankingEn.gif"
            alt="img"
          />
        </div>
        <div class="banners-outside__image">
          <img
            v-if="$i18n.locale === 'tm'"
            src="@/assets/img/home/banners-outside/olimpiada.gif"
            alt="img"
          />
          <img
            v-if="$i18n.locale === 'ru'"
            src="@/assets/img/home/banners-outside/olimpiadaRu.gif"
            alt="img"
          />
          <img
            v-if="$i18n.locale === 'en'"
            src="@/assets/img/home/banners-outside/olimpiadaEn.gif"
            alt="img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banners-outside {
  margin-top: 80px;
  position: sticky;
  top: 165px;
  // .banners-outside__row
  &__row {
    position: relative;
    display: flex;
    justify-content: space-between;
  }

  // .banners-outside__bannner-left

  &__bannner-left {
    background: #ecf7f8;
    width: 238px;
    position: absolute;
    left: -280px;
    cursor: pointer;
  }

  // .banners-outside__image

  &__image {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  // .banners-outside__items

  &__items {
    padding: 36px 10px 15px 10px;
  }

  // .banners-outside__bannner-right

  &__bannner-right {
    width: 238px;
    position: absolute;
    z-index: 300;
    top: 100;
    right: -280px;
    cursor: pointer;
    .banners-outside__image:last-child {
      margin-top: 100px;
    }
  }
}
</style>
