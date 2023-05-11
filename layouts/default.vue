<template>
  <section class="wrapper">
    <the-header-second></the-header-second>
    <nuxt
      :class="[
        'page',
        {
          header__second: $route.name === `index___${$i18n.locale}` && !header,
        },
      ]"
    ></nuxt>
    <div
      class="toast-container __container"
      style="align-items: center; z-index: 1000000"
    ></div>
    <the-footer></the-footer>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      header: false,
    }
  },
  computed: {
    ...mapGetters(['isLoaded']),
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
  flex: 1 1 auto;
}
.header__second {
  position: relative;
  top: 0;
}
</style>
