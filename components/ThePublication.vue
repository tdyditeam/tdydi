<template>
  <div class="publication">
    <the-title-block :title="$t('button.publications')"></the-title-block>
    <the-publication-swiper :images="publications"></the-publication-swiper>
  </div>
</template>

<script>
export default {
  props: {
    publications: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.publication {
  padding: 15px 0px;
}
</style>
