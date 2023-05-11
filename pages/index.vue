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
      <the-view :totalNews="totalNews" :statics="statics"></the-view>
      <the-partners :partnersUniversity="partnersUniversity"></the-partners>
    </section>
  </div>
</template>
<script>
import { request } from '~/api/generic.api'
export default {
  name: 'IndexPage',
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('slogan'),
      meta: [
        {
          name: 'content-type',
          content: 'homepage',
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
      publications: [],
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
      totalNews: null,
      statics: null,
      partnersUniversity: null,
    }
  },
  async fetch() {
    if (!this.$cookies.get('view')) {
      await this.fetchStatics()
    }
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
      this.fetchTotalNews(),
      this.fetchTotal(),
      this.fetchPartners(),
    ])
  },
  mounted() {
    localStorage.removeItem('id')
    localStorage.removeItem('subId')
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
        if (res.status) {
          this.galerias = res?.galerias || []
          if (this.galleryType === 'video') {
            for (let i = 0; i < this.galerias.length; i++) {
              this.galerias[i]['status'] = false
            }
          }
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
        if (res.length) {
          this.publications = res || []
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchTotalNews() {
      try {
        const res = await request({
          url: '/total-news',
          method: 'GET',
        })
        if (res.status) {
          this.totalNews = res.total_news
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchTotal() {
      try {
        const res = await request({
          url: '/statics/total',
          method: 'GET',
        })
        if (res.status) {
          this.statics = res.statics
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchStatics() {
      try {
        const res = await request({
          url: '/statics',
          method: 'GET',
        })
        if (res.status) {
          this.$cookies.set('view', 1)
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
        if (res.status) {
          this.partnersUniversity = res?.partners_university || []
        }
      } catch (error) {
        console.log(error)
      }
    },
    async changeEvent(val) {
      this.eventType = val
      await this.fetchEvents()
    },
    async changeGallery(val) {
      this.galleryType = val
      await this.fetchGallery()
    },
  },
}
</script>
<style lang="scss"></style>
