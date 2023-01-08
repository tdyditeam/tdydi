<template>
  <div class="wrapper">
    <the-banner></the-banner>
    <section class="__container">
      <the-history></the-history>
      <the-article></the-article>
      <the-publication></the-publication>
      <the-gallery></the-gallery>
      <the-partners></the-partners>
    </section>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',

  mounted() {},
}
</script>
<style lang="scss">
.wrapper {
  width: 100%;
  overflow: hidden;
}

.__container {
  //   &:last-child {
  //     padding-bottom: 100px;
  //   }
}
</style>
