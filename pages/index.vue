<template>
  <div class="wrapper">
    <the-banner></the-banner>
    <section class="__container">
      <the-history></the-history><the-article></the-article>
    </section>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',

  mounted() {
    // let a = document.querySelector('.banner__image')
    // window.addEventListener('mousemove', function (event) {
    //   let b = event.offsetX / 30
    //   let c = event.offsetY / 30
    //   a.style.transform = `translate3d(${b}px, ${c}px, 0px)`
    //   console.log(a)
    //   //   console.log(event.offsetY)
    // })
  },
}
</script>
<style lang="scss">
.wrapper {
  width: 100%;
  overflow: hidden;
}
</style>
