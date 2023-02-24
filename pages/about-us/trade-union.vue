<template>
  <block-pages :description="description" :title="title"></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: this.$t('tradeUnion.title'),
      description: this.$t('tradeUnion.description'),
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
