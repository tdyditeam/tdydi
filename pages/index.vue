<template>
  <div>
    <the-banner></the-banner>
    <section class="__container">
      <the-history></the-history>
      <the-events></the-events>
      <the-publication></the-publication>
      <the-gallery></the-gallery>
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
