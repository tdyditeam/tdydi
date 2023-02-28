<template>
  <secion>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="
        $t('competitions.teacher-of-the-year-competitions.description')
      "
      :title="$t('competitions.teacher-of-the-year-competitions.title')"
      :img="img"
    ></block-pages>
  </secion>
</template>

<script>
export default {
  data() {
    return {
      img: 'image.png',
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.competitions.teacherCompetitions'),
          path: '/competitions/teacher-of-the-year-competitions',
          exact: true,
        },
      ],
      title: 'Ýylyň mugallymy bäsleşigi',
      description: `<p>Ýokary okuw mekdepleriniň professor-mugallymlarynyň arasynda 2022-nji ýylyň maý aýynda geçirilen «<em>Ýylyň mugallymy</em>» bäsleşiginde Bank işi kafedrasynyň müdiriniň w.w.ý.ý., <em>uly mugallym Hojanepesowa A.K. 1-nji orna</em> mynasyp boldy.</p>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>

<style lang="scss" scoped></style>
