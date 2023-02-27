<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="description"
      :title="title"
      :img="computedImage"
    ></block-pages>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: this.$t('header.menu.aboutUs.rektorat'),
      description: this.$t('rectorat.description'),
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.aboutUs.name'),
          path: '/about-us',
          exact: true,
        },
        {
          id: 3,
          name: this.$t('header.menu.aboutUs.rektorat'),
          path: '/about-us/rektorat',
          exact: true,
        },
      ],
    }
  },
  computed: {
    computedImage() {
      if (this.$i18n.locale === 'tm') {
        return 'tdy_shema.jpg'
      } else if (this.$i18n.locale === 'ru') {
        return 'tdy_shema_rus.png'
      } else if (this.$i18n.locale === 'en') {
        return 'tdy_shema_eng.png'
      }
    },
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
