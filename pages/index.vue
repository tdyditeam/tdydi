<template>
  <div>
    <section class="banner">
      <div
        class="banner__image"
        style="transform-style: preserve-3d; backface-visibility: hidden"
      >
        <img src="@/assets/img/home/banner.png" alt="" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  mounted() {
    let a = document.querySelector('.banner__image')

    window.addEventListener('mousemove', function (event) {
      let b = event.offsetX / 30
      let c = event.offsetY / 30
      a.style.transform = `translate3d(${b}px, ${c}px, 0px)`
      console.log(a)

      //   console.log(event.offsetY)
    })
  },
}
</script>
<style lang="scss">
.banner {
  //   width: 100vw;
  //   height: calc(100vh - 165px);
  overflow: hidden;
  &__image {
    position: relative;
    width: 105%;
    height: 100%;
    overflow-x: hidden;
    margin: -14px -60px 0px -80px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
