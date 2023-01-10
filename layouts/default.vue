<template>
  <section class="wrapper">
    <the-header></the-header>
    <nuxt></nuxt>
    <the-footer></the-footer>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
