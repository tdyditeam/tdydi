<template>
  <div>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <title-block-pages title="Kafedranyň mugallymlary"></title-block-pages>
    <departments-teachers></departments-teachers>
  </div>
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
          name: this.$t('header.menu.aboutUs.departments'),
          path: `/about-us/departments/${this.$route.params.id}`,
          exact: true,
        },
        {
          id: 4,
          name: this.$route?.params?.sub,
          path: `/about-us/departments/${this.$route.params.id}/${this.$route.params.sub}`,
          exact: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
