<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="description[$route.params.id]"
      :title="title[$route.params.id]"
      :img="img[$route.params.id]"
    ></block-pages>
  </section>
</template>

<script>
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
        {
          id: 3,
          name: this.$t('header.menu.aboutUs.fakulties'),
          path: `/about-us/faculties/${this.$route.params.id}`,
          exact: true,
        },
      ],
      title: {
        economical: this.$t('faculties.economical'),
        finanse: this.$t('faculties.finanse'),
        managament: this.$t('faculties.managament'),
        marketing: this.$t('faculties.marketing'),
        'proffesional-development': this.$t(
          'faculties.proffesional-development'
        ),
      },
      description: {
        economical: this.$t('faculties.description.economical'),
        finanse: this.$t('faculties.description.finanse'),
        managament: this.$t('faculties.description.managament'),
        marketing: this.$t('faculties.description.marketing'),
        'proffesional-development': this.$t(
          'faculties.description.proffesional-development'
        ),
      },
      img: {
        economical: 'image.webp',
        finanse: '3.png',
        managament: 'menejment.png',
        marketing: '1.webp',
        'proffesional-development': 'image.webp',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
