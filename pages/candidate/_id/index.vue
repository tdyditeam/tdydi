<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <the-announce :datas="datas"></the-announce>
    <block-pages :description="datas?.text" :title="title"></block-pages>
  </section>
</template>

<script>
import { request } from '~/api/generic.api'
export default {
  data() {
    return {
      title: this.$route.query.name,
      datas: null,
    }
  },
  watch: {
    $route: async function () {
      await this.fetchDatas()
    },
  },
  computed: {
    breadCrumbs() {
      return [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$route.query.name,
          path: `/candidate/${Number(this.$route.params.id)}?name=${
            this.$route.query.name
          }`,
          exact: true,
        },
      ]
    },
  },
  async fetch() {
    await this.fetchDatas()
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
  methods: {
    async fetchDatas() {
      try {
        const res = await request({
          url: `/${Number(this.$route.params.id)}/condidate`,
          params: {
            lang: this.$i18n.locale,
            submenu_id: Number(this.$route.params.id),
          },
          method: 'GET',
        })
        console.log('about', res)
        if (res.status) {
          this.datas = res.data[0] || null
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
