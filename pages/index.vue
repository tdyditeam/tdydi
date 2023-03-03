<template>
  <div>
    <the-banner></the-banner>
    <section class="__container">
      <the-banner-outside></the-banner-outside>
      <the-history></the-history>
      <the-events></the-events>
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
    }
  },
  async fetch() {
    await this.fetchPublications()
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    async fetchPublications() {
      try {
        const res = await request({
          url: '/publications',
          method: 'GET',
        })
        if (res) {
          this.publications = res
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
<style lang="scss"></style>
