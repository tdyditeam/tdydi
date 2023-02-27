<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages :description="description" :title="title"></block-pages>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: this.$t('education.title'),
      description: this.$t('education.description'),
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.education.skills'),
          path: '/education',
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
