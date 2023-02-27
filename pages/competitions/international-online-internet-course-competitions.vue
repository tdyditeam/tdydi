<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="
        $t(
          'competitions.international-online-internet-course-competitions.description'
        )
      "
      :title="
        $t(
          'competitions.international-online-internet-course-competitions.title'
        )
      "
      :img="img"
    ></block-pages>
  </section>
</template>

<script>
export default {
  data() {
    return {
      img: '1.png',
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.competitions.internationalCompetitions'),
          path: '/competitions/international-online-internet-course-competitions',
          exact: true,
        },
      ],
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>

<style lang="scss" scoped></style>
