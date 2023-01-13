<template>
  <div class="__container">
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style lang="scss" scoped></style>
