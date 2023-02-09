<template>
  <div class="departments">
    <nuxt-child></nuxt-child>
    <sidebar :subMenus="subMenus"></sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subMenus: [
        {
          id: 1,
          name: 'Buhgalterçilik hasaba alnyşy we audit',
          path: '/about-us/departments/accounting',
          exact: false,
        },
        {
          id: 2,
          name: 'Statistika',
          path: '/about-us/departments/statistic',
          exact: false,
        },
        {
          id: 3,
          name: 'Ykdysadyýet we hukuk',
          path: '/about-us/departments/economical-and-law',
          exact: false,
        },
        {
          id: 4,
          name: 'Ykdysady nazaryýet',
          path: '/about-us/departments/economic',
          exact: false,
        },
        {
          id: 5,
          name: 'Bank işi',
          path: '/about-us/departments/banking',
          exact: false,
        },
        {
          id: 6,
          name: 'Maliýe',
          path: '/about-us/departments/finance',
          exact: false,
        },
        {
          id: 7,
          name: 'Sanly ykdysadyýet',
          path: '/about-us/departments/digital-ecocnomy',
          exact: false,
        },
        {
          id: 8,
          name: 'Jemgyýeti öwreniş ylymlary',
          path: '/about-us/departments/social-studies',
          exact: false,
        },
        {
          id: 9,
          name: 'Dünýä ykdysadyýeti',
          path: '/about-us/departments/world-economy',
          exact: false,
        },
        {
          id: 10,
          name: 'Menejment',
          path: '/about-us/departments/menejment',
          exact: false,
        },
        {
          id: 11,
          name: 'Maglumat ulgamlary',
          path: '/about-us/departments/information-systems',
          exact: false,
        },
        {
          id: 12,
          name: 'Daşary ýurt dilleri',
          path: '/about-us/departments/foreign-languages',
          exact: false,
        },
        {
          id: 13,
          name: 'Marketing',
          path: '/about-us/departments/marketing',
          exact: false,
        },
        {
          id: 14,
          name: 'Zähmetiň ykdysadyýeti',
          path: '/about-us/departments/economics-of-labor',
          exact: false,
        },
        {
          id: 15,
          name: 'Ýokary matematika we informatika',
          path: '/about-us/departments/advanced-mathematics-and-computer-science',
          exact: false,
        },
        {
          id: 16,
          name: 'Bedenterbiýe',
          path: '/about-us/departments/physical-education',
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
.departments {
  display: flex;
  justify-content: space-between;
}
</style>
