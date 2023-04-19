<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="competitionsTop?.name"
      :title="$t('competitions.name')"
      :img="competitionsTop?.image"
    ></block-pages>
    <the-table :datas="competitionsBottom"></the-table>
  </section>
</template>

<script>
import { request } from '~/api/generic.api'
export default {
  data() {
    return {
      competitionsTop: null,
      competitionsBottom: null,
    }
  },
  computed: {
    breadCrumbs() {
      return [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('competitions.name'),
          path: `/competitions/main?q=${this.$route.query.q}`,
          exact: true,
        },
      ]
    },
  },
  async fetch() {
    await Promise.all([this.fetchTopDatas(), this.fetchBottomDatas()])
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
  methods: {
    async fetchTopDatas() {
      try {
        const res = await request({
          url: `/${this.$route.query.q}/competitions`,
          params: {
            lang: this.$i18n.locale,
            submenu_id: this.$route.query.q,
          },
          method: 'GET',
        })
        if (res.status) {
          this.competitionsTop = res.data[0] || null
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchBottomDatas() {
      try {
        const res = await request({
          url: `/competitions-students`,
          params: {
            lang: this.$i18n.locale,
          },
          method: 'GET',
        })
        if (res.status) {
          this.competitionsBottom = res.student_competitions || []
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
