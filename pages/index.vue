<template>
  <div>
    <the-banner
      :video="video"
      :mainYearText="mainYearText"
      :indicators="indicators"
    ></the-banner>
    <section class="__container">
      <the-banner-outside
        :bannerLeft="bannerLeft"
        :bannerRight="bannerRight"
      ></the-banner-outside>
      <the-history :about="about"></the-history>
      <the-events :events="events" @change="changeEvent"></the-events>
      <the-publication :publications="publications"></the-publication>
      <the-pointers :topPointers="topPointers"></the-pointers>
      <the-gallery
        :galerias="galerias"
        @changeGallery="changeGallery"
      ></the-gallery>
      <the-view></the-view>
      <the-partners :partnersUniversity="partnersUniversity"></the-partners>
    </section>
  </div>
</template>
<script>
import { request } from '~/api/generic.api'
export default {
  name: 'IndexPage',
  data() {
    return {
      publications: null,
      video: null,
      mainYearText: null,
      about: null,
      eventType: 'news',
      galleryType: 'image',
      events: null,
      topPointers: null,
      bannerLeft: null,
      bannerRight: null,
      indicators: null,
      galerias: null,
      partnersUniversity: null,
    }
  },
  async fetch() {
    await Promise.all([
      this.fetchVideo(),
      this.fetchMainYearText(),
      this.fetchIndicators(),
      this.fetchBannerLeft(),
      this.fetchBannerRight(),
      this.fetcAbout(),
      this.fetchEvents(),
      this.fetchTopPointers(),
      this.fetchGallery(),
      this.fetchPublications(),
      this.fetchPartners(),
    ])
  },
  mounted() {
    localStorage.removeItem('id')
    localStorage.removeItem('subId')
    window.scrollTo(0, 0)
  },
  methods: {
    async fetchVideo() {
      try {
        const res = await request({
          url: '/galerias',
          params: {
            lang: 'tm',
            type: 'main-video',
          },
          method: 'GET',
        })
        console.log(res)
        if (res.status) {
          this.video = res?.galerias[0]?.image
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetcAbout() {
      try {
        const { about, status } = await request({
          url: `/about?lang=${this.$i18n.locale}`,
          method: 'GET',
        })
        if (status) {
          console.log(about)
          this.about = about[0]
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchMainYearText() {
      try {
        const res = await request({
          url: '/galerias',
          params: {
            lang: this.$i18n.locale,
            type: 'main-year',
          },
          method: 'GET',
        })
        console.log(res)
        if (res.status) {
          this.mainYearText = res?.galerias[0]
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchIndicators() {
      try {
        const res = await request({
          url: '/indicators',
          params: {
            lang: this.$i18n.locale,
          },
          method: 'GET',
        })
        console.log('fetchIndicators', res)
        if (res.status) {
          this.indicators = res?.indicators || []
        }
      } catch (error) {
        console.log(error)
      }
    },
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
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchEvents() {
      try {
        const res = await request({
          url: `/news?events_type=${this.eventType}&limit=${5}&page=${1}`,
          params: {
            lang: this.$i18n.locale,
          },
          method: 'GET',
        })
        console.log('news', res)
        if (res.status) {
          this.events = res.events || []
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchTopPointers() {
      try {
        const res = await request({
          url: `/top-pointers`,
          params: {
            lang: this.$i18n.locale,
          },
          method: 'GET',
        })
        console.log('pointers', res)
        if (res.status) {
          this.topPointers = res.top_pointers || []
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchGallery() {
      try {
        const res = await request({
          url: '/galerias',
          params: {
            lang: this.$i18n.locale,
            type: this.galleryType,
          },
          method: 'GET',
        })
        console.log('galleryType', res)
        if (res.status) {
          this.galerias = res?.galerias || []
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchPublications() {
      try {
        const res = await request({
          url: '/publications',
          method: 'GET',
        })
        if (res) {
          console.log('publications')
          this.publications = res
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchPartners() {
      try {
        const res = await request({
          url: '/partners/university',
          params: {
            lang: this.$i18n.locale,
          },
          method: 'GET',
        })
        console.log('fetchPartners', res)
        if (res.status) {
          this.partnersUniversity = res?.partners_university || []
          this.$store.commit('SET_LOADER', false)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async changeEvent(val) {
      console.log(val)
      this.eventType = val
      await this.fetchEvents()
    },
    async changeGallery(val) {
      console.log(val)
      this.galleryType = val
      await this.fetchGallery()
    },
  },
}
</script>
<style lang="scss"></style>
