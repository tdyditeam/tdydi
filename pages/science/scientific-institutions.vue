<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="$t('science.scientific-institutions.description')"
      :title="$t('science.scientific-institutions.title')"
      :img="img"
    ></block-pages>
  </section>
</template>

<script>
export default {
  data() {
    return {
      img: '4.png',
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.science.scientificInstitutions'),
          path: '/science/scientific-institutions',
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
