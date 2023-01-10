<template>
  <section class="wrapper">
    <the-header></the-header>
    <nuxt class="page"></nuxt>
    <the-footer></the-footer>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.page {
  flex: 1 1 auto;
}
</style>
