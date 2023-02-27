<template>
  <block-pages
    :description="$t('science.research-and-project-work.description')"
    :title="$t('science.research-and-project-work.title')"
  ></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
