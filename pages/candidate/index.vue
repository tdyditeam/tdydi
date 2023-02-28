<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <the-announce></the-announce>
    <block-pages
      :description="$t('candidate.description')"
      :title="$t('candidate.title')"
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
          name: this.$t('header.menu.candidate.name'),
          path: '/candidate',
          exact: true,
        },
      ],
      img: 'tdy.webp',
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>

<style lang="scss" scoped></style>
