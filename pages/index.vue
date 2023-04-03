<template>
  <div>
    <the-banner :video="video" :mainYearText="mainYearText"></the-banner>
    <section class="__container">
      <the-banner-outside></the-banner-outside>
      <the-history :about="about"></the-history>
      <the-events :events="events"></the-events>
      <the-publication :publications="publications"></the-publication>
      <the-pointers></the-pointers>
      <the-gallery></the-gallery>
      <the-view></the-view>
      <the-partners></the-partners>
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
      events: null,
    }
  },
  async fetch() {
    await Promise.all([
      this.fetchVideo(),
      this.fetchMainYearText(),
      this.fetcAbout(),
      this.fetchEvents(),
      this.fetchPublications(),
    ])
  },
  mounted() {
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
    async fetchPublications() {
      try {
        const res = await request({
          url: '/publications',
          method: 'GET',
        })
        if (res) {
          console.log('publications')
          this.publications = res
          this.$store.commit('SET_LOADER', false)
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
<style lang="scss"></style>
