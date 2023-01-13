<template>
  <nuxt-child> </nuxt-child>
</template>

<script>
export default {
  head() {
    return {
      meta: [{ title: 'wakalar' }],
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style lang="scss" scoped></style>
