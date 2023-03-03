<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="about?.text"
      :title="title"
      :img="img"
    ></block-pages>
  </section>
</template>

<script>
import { request } from '@/api/generic.api'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.aboutUs.name'),
          path: '/about-us',
          exact: true,
        },
      ],
      about: null,
      title: this.$t('header.menu.aboutUs.name'),
      img: 'image.webp',
      description: this.$t('aboutUs.description'),
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
  },
}
</script>
