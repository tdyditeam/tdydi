<template>
  <block-pages
    :description="$t('science.center-for-economic-innovation.description')"
    :title="$t('science.center-for-economic-innovation.title')"
  ></block-pages>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
