<template>
  <div>
    <the-banner></the-banner>
    <section class="__container">
      <the-banner-outside></the-banner-outside>
      <the-history></the-history>
      <the-events></the-events>
      <the-publication></the-publication>
      <the-pointers></the-pointers>
      <the-gallery></the-gallery>
      <the-view></the-view>
      <the-partners></the-partners>
    </section>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',

  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>
<style lang="scss"></style>
