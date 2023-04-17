<template>
  <div class="__container">
    <the-banner-outside
      :bannerLeft="bannerLeft"
      :bannerRight="bannerRight"
    ></the-banner-outside>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import { request } from '~/api/generic.api'
export default {
  data() {
    return {
      bannerLeft: null,
      bannerRight: null,
    }
  },
  async fetch() {
    await Promise.all([this.fetchBannerLeft(), this.fetchBannerRight()])
  },
  methods: {
    async fetchBannerLeft() {
      try {
        const res = await request({
          url: '/galerias',
          params: {
            lang: this.$i18n.locale,
            type: 'main-banner-left',
          },
          method: 'GET',
        })
        console.log('banner-left', res)
        if (res.status) {
          this.bannerLeft = res?.galerias[0]
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchBannerRight() {
      try {
        const res = await request({
          url: '/galerias',
          params: {
            lang: this.$i18n.locale,
            type: 'main-banner-right',
          },
          method: 'GET',
        })
        console.log('banner', res)
        if (res.status) {
          this.bannerRight = res?.galerias
          this.$store.commit('SET_LOADER', false)
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
