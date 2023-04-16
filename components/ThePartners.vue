<template>
  <div class="partners">
    <the-title-block :title="$t('button.partners')"></the-title-block>
    <partners-swiper :items="partnersUniversity"></partners-swiper>
  </div>
</template>

<script>
export default {
  props: {
    partnersUniversity: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped></style>
