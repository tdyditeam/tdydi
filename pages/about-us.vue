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
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })

    return {
      title: this.$t('slogan'),
      meta: [
        {
          name: 'content-type',
          content: 'about-us',
        },
        {
          name: 'keywords',
          content: this.$t('keywords'),
        },
        ...i18nHead.link,
      ],
    }
  },
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
