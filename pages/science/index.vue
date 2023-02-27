<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="$t('science.description')"
      :title="$t('science.title')"
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
          name: this.$t('header.menu.science.postgraduate'),
          path: '/science',
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
