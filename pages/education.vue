<template>
  <div class="__container">
    <!-- <bread-crumbs></bread-crumbs> -->
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.block__row {
  display: flex;
  justify-content: space-between;
}
</style>
