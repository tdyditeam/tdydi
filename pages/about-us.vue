<template>
  <div class="__container">
    <bread-crumbs></bread-crumbs>
    <div class="block__row">
      <nuxt-child></nuxt-child>
      <sidebar :subMenus="subMenus"></sidebar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subMenus: [
        {
          id: 5,
          name: 'Institutyň taryhy',
          path: '/about-us',
          exact: true,
        },
        {
          id: 1,
          name: 'Rektorat',
          path: '/about-us/rektorat',
          exact: true,
        },
        {
          id: 2,
          name: 'Fakultetler',
          path: '/about-us/faculties',
          exact: true,
        },
        {
          id: 3,
          name: 'Kafedralar',
          path: '/about-us/departments',
          exact: false,
        },
        {
          id: 4,
          name: 'Bölümler',
          path: '/about-us/categories',
          exact: true,
        },
        {
          id: 6,
          name: 'Institutyň TDP',
          path: '/about-us/tdp--of-the-institute',
          exact: true,
        },
        {
          id: 7,
          name: 'Kärdeşler arkalaşygy',
          path: '/about-us/trade-union',
          exact: true,
        },
        {
          id: 8,
          name: 'Talyp ýaşlar guramasy',
          path: '/about-us/student-youth-organization',
          exact: true,
        },
        {
          id: 9,
          name: 'Zenanlar guramasy',
          path: '/about-us/womens-organization',
          exact: true,
        },
        {
          id: 10,
          name: 'Kitaphana',
          path: '/about-us/library',
          exact: true,
        },
        {
          id: 11,
          name: 'Ykdysatçy okuw merkezi',
          path: '/about-us/economist-training-center',
          exact: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.block__row {
  display: flex;
  justify-content: space-between;
}
</style>
