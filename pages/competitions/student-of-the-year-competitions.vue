<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="
        $t('competitions.student-of-the-year-competitions.description')
      "
      :title="$t('competitions.student-of-the-year-competitions.title')"
      :img="img"
    ></block-pages>
  </section>
</template>

<script>
export default {
  data() {
    return {
      img: '3.png',
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.competitions.studentCompetitions'),
          path: '/competitions/student-of-the-year-competitions',
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
