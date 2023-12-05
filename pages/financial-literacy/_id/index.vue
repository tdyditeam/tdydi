<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="datas?.name"
      :title="title"
      :img="datas?.image"
    ></block-pages>
  </section>
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
          content: 'financial-literacy',
        },
        {
          name: 'keywords',
          content: this.$t('keywords'),
        },
        ...i18nHead.link,
      ],
    }
  },
  watch: {
    $route: async function () {
      await this.fetchDatas()
    },
  },
  data() {
    return {
      title: this.$route.query.name,
      datas: null,
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.finacialLiteracy.name'),
          path: '/financial-literacy',
          exact: true,
        },
        {
          id: 3,
          name: this.$route.query.name,
          path: `/financial-literacy/${this.$route.params.id}?name=${this.$route.query.name}`,
          exact: true,
        },
      ],
    }
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
          url: `/${Number(this.$route.params.id)}/finance`,
          params: {
            lang: this.$i18n.locale,
            submenu_id: Number(this.$route.params.id),
          },
          method: 'GET',
        })
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
