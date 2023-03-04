<template>
  <div style="height: calc(100% - 80px)">
    <sub-menu :items="subMenu"></sub-menu>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
const SubMenu = () => import('~/components/admin/SubMenu.vue')

export default {
  layout: 'admin',
  middleware(app) {
    // return app.redirect(app.app.localePath('/admin/main/slider'))
  },
  components: {
    SubMenu,
  },
  data() {
    return {
      subMenu: [
        {
          id: 1,
          name: 'Biz barada',
          path: '/admin/about-us/',
        },
        {
          id: 2,
          name: 'Rektorat',
          path: '/admin/about-us/rektorat',
        },
        {
          id: 3,
          name: 'Fakulteltar',
          path: '/admin/about-us/fakulties',
        },
        {
          id: 4,
          name: 'Kafedralar',
          path: 'publications',
        },
        {
          id: 5,
          name: 'Jemgyýetçilik guramalary',
          path: 'gallery',
        },
        {
          id: 6,
          name: 'Okuw merkezleri',
          path: 'partners',
        },
        {
          id: 7,
          name: 'Kitaphana',
          path: 'indicators',
        },
        {
          id: 8,
          name: 'Hazyna çeper höwesjeňler merkezi',
          path: 'indicators',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
