<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="$t('science.scientific-advice.description')"
      :title="$t('science.scientific-advice.title')"
      :img="img"
    ></block-pages>
  </section>
</template>

<script>
export default {
  data() {
    return {
      img: 'management.png',
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.science.scientificAdvice'),
          path: '/science/scientific-advice',
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
