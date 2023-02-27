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
      title: this.$t('education.masters-training-courses.title'),
      description: this.$t('education.masters-training-courses.description'),
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.education.mastersCourses'),
          path: '/education/masters-training-courses',
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
