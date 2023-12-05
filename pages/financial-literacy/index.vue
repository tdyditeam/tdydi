<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="about?.description"
      :title="title"
      :img="about?.image"
    ></block-pages>
  </section>
</template>

<script>
import { request } from '@/api/generic.api'
import { mapGetters } from 'vuex'
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
  watch: {
    route: () => {
      console.log('route')
    },
  },
  data() {
    return {
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.finacialLiteracy.name'),
          path: '/financial-literacy',
          exact: true,
        },
      ],
      about: null,
      title: this.$t('header.menu.finacialLiteracy.name'),
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
  computed: {
    ...mapGetters(['imageUrl']),
  },
  async fetch() {
    await this.fetcAbout()
  },
  methods: {
    async fetcAbout() {
      try {
        const { data, status } = await request({
          url: `/financial-literacy?lang=${this.$i18n.locale}`,
          method: 'GET',
        })
        if (status) {
          this.about = data[0]
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
