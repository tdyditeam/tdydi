<template>
  <section class="wrapper">
    <the-header
      v-if="$route.name === `index___${$i18n.locale}` && !header"
    ></the-header>
    <the-header-second v-else></the-header-second>
    <nuxt class="page"></nuxt>
    <the-footer></the-footer>
  </section>
</template>

<script>
export default {
  data() {
    return {
      header: false,
    }
  },

  mounted() {
    let wrapper = document.querySelector('.wrapper')
    wrapper.addEventListener('scroll', (e) => {
      if (e.target.scrollTop > 100) {
        this.header = true
      } else {
        this.header = false
      }
    })
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}
.page {
  position: relative;
  //   top: -215px;
  flex: 1 1 auto;
}
</style>
