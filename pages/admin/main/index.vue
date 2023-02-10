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
  components: {
    SubMenu,
  },
  data() {
    return {
      subMenu: [
        {
          id: 1,
          name: 'Slider',
          path: 'slider',
        },
        {
          id: 2,
          name: 'Makalalar',
          path: 'article',
        },
        {
          id: 3,
          name: 'Täzelikler',
          path: 'news',
        },
        {
          id: 4,
          name: 'Neşirler',
          path: 'publications',
        },
        {
          id: 5,
          name: 'Gallery',
          path: 'gallery',
        },
        {
          id: 6,
          name: 'Hyzmatdaşlar',
          path: 'partners',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
