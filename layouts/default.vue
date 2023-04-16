<template>
  <section class="wrapper">
    <!-- <div class="loader" v-if="isLoaded">
      <Loader />
    </div> -->
    <client-only>
      <the-header-second></the-header-second>
      <nuxt
        :class="[
          'page',
          {
            header__second:
              $route.name === `index___${$i18n.locale}` && !header,
          },
        ]"
      ></nuxt>
      <the-footer></the-footer>
    </client-only>
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
.loader {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1000000;
  background-color: #fff;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.page {
  flex: 1 1 auto;
}
.header__second {
  position: relative;
  top: -215px;
}
</style>
