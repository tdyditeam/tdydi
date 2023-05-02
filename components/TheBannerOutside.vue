<template>
  <div class="banners-outside" v-if="bannerLeft && bannerRight">
    <div class="banners-outside__row">
      <div class="banners-outside__bannner-left">
        <div class="banners-outside__image">
          <img :src="`${imageUrl}${bannerLeft?.image}`" alt="img" />
        </div>
      </div>
      <div class="banners-outside__bannner-right">
        <div
          class="banners-outside__image"
          v-for="(banner, index) in bannerRight"
          :key="index"
        >
          <img :src="`${imageUrl}${banner?.image}`" alt="img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    bannerLeft: {
      type: Object,
      default: () => null,
    },
    bannerRight: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapGetters(['imageUrl']),
  },
}
</script>

<style lang="scss" scoped>
.banners-outside {
  margin-top: 80px;
  position: sticky;
  top: 165px;
  @media (max-width: 992px) {
    margin-top: 160px;
  }
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
