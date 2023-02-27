<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="description"
      :title="title"
      :img="img"
    ></block-pages>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: this.$t('education.undergraduate-courses.title'),
      description: this.$t('education.undergraduate-courses.description'),
      img: '1.png',
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.education.undergraduateCourses'),
          path: '/education/undergraduate-courses',
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
