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
          name: this.$t('header.menu.aboutUs.publicOrganizations'),
          path: `/about-us/public-organizations/${this.$route.params.id}`,
          exact: true,
        },
      ],
      title: {
        0: this.$t('publicOrganizations.first.title'),
        1: this.$t('publicOrganizations.second.title'),
        2: this.$t('publicOrganizations.third.title'),
        3: this.$t('publicOrganizations.fourth.title'),
      },
      description: {
        0: this.$t('publicOrganizations.first.description'),
        1: this.$t('publicOrganizations.second.description'),
        2: this.$t('publicOrganizations.third.description'),
        3: this.$t('publicOrganizations.fourth.description'),
      },
      img: {
        0: 'image.png',
        1: '3.png',
        2: '2.png',
        3: '1.png',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
