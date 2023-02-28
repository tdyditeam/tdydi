<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="$t('science.research-and-project-work.description')"
      :title="$t('science.research-and-project-work.title')"
      :img="img"
      imgPdf
    ></block-pages>
  </section>
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
          name: this.$t('header.menu.science.researchProjectWork'),
          path: '/science/research-and-project-work',
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
