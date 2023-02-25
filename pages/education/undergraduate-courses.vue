<template>
  <block-pages :description="description" :title="title"></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: this.$t('education.undergraduate-courses.title'),
      description: this.$t('education.undergraduate-courses.description'),
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
