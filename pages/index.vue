<template>
  <div>
    <the-banner></the-banner>
    <the-history></the-history>
  </div>
</template>

<script>
import TheBanner from '~/components/TheBanner.vue'
export default {
  components: { TheBanner },
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
<style lang="scss"></style>
