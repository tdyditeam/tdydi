<template>
  <section class="library">
    <nuxt-child></nuxt-child>
    <sidebar :subMenus="subMenus"></sidebar>
  </section>
</template>

<script>
export default {
  data() {
    return {
      subMenus: [
        {
          id: 1,
          name: 'Buhgalterçilik hasaba alnyşy we audit',
          path: '/about-us/library/accounting',
          exact: false,
        },
        {
          id: 2,
          name: 'Statistika',
          path: '/about-us/library/statistic',
          exact: false,
        },
        {
          id: 3,
          name: 'Ykdysadyýet we hukuk',
          path: '/about-us/library/economical-and-law',
          exact: false,
        },
        {
          id: 4,
          name: 'Ykdysady nazaryýet',
          path: '/about-us/library/economic',
          exact: false,
        },
        {
          id: 5,
          name: 'Bank işi',
          path: '/about-us/library/banking',
          exact: false,
        },
        {
          id: 6,
          name: 'Maliýe',
          path: '/about-us/library/finance',
          exact: false,
        },
        {
          id: 7,
          name: 'Sanly ykdysadyýet',
          path: '/about-us/library/digital-ecocnomy',
          exact: false,
        },
        {
          id: 9,
          name: 'Dünýä ykdysadyýeti',
          path: '/about-us/library/world-economy',
          exact: false,
        },
        {
          id: 10,
          name: 'Menejment',
          path: '/about-us/library/menejment',
          exact: false,
        },
        {
          id: 11,
          name: 'Maglumat ulgamlary',
          path: '/about-us/library/information-systems',
          exact: false,
        },
        {
          id: 12,
          name: 'Daşary ýurt dilleri',
          path: '/about-us/library/foreign-languages',
          exact: false,
        },
        {
          id: 13,
          name: 'Marketing',
          path: '/about-us/library/marketing',
          exact: false,
        },
        {
          id: 14,
          name: 'Zähmetiň ykdysadyýeti',
          path: '/about-us/library/economics-of-labor',
          exact: false,
        },
        {
          id: 15,
          name: 'Ýokary matematika we informatika',
          path: '/about-us/library/advanced-mathematics-and-computer-science',
          exact: false,
        },
      ],
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>

<style lang="scss" scoped>
.library {
  display: flex;
  justify-content: space-between;
}
</style>
