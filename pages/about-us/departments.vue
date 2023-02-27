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
          name: this.$t('departments.accounting.title'),
          path: '/about-us/departments/accounting',
          exact: false,
        },
        {
          id: 2,
          name: this.$t('departments.statistics.title'),
          path: '/about-us/departments/statistics',
          exact: false,
        },
        {
          id: 3,
          name: this.$t('departments.economical-and-law.title'),
          path: '/about-us/departments/economical-and-law',
          exact: false,
        },
        {
          id: 4,
          name: this.$t('departments.economic.title'),
          path: '/about-us/departments/economic',
          exact: false,
        },
        {
          id: 5,
          name: this.$t('departments.banking.title'),
          path: '/about-us/departments/banking',
          exact: false,
        },
        {
          id: 6,
          name: this.$t('departments.finance.title'),
          path: '/about-us/departments/finance',
          exact: false,
        },
        {
          id: 7,
          name: this.$t('departments.digital-economy.title'),
          path: '/about-us/departments/digital-economy',
          exact: false,
        },
        {
          id: 8,
          name: this.$t('departments.social-studies.title'),
          path: '/about-us/departments/social-studies',
          exact: false,
        },
        {
          id: 9,
          name: this.$t('departments.world-economy.title'),
          path: '/about-us/departments/world-economy',
          exact: false,
        },
        {
          id: 10,
          name: this.$t('departments.management.title'),
          path: '/about-us/departments/management',
          exact: false,
        },
        {
          id: 11,
          name: this.$t('departments.information-systems.title'),
          path: '/about-us/departments/information-systems',
          exact: false,
        },
        {
          id: 12,
          name: this.$t('departments.foreign-languages.title'),
          path: '/about-us/departments/foreign-languages',
          exact: false,
        },
        {
          id: 13,
          name: this.$t('departments.marketing.title'),
          path: '/about-us/departments/marketing',
          exact: false,
        },
        {
          id: 14,
          name: this.$t('departments.economics-of-labor.title'),
          path: '/about-us/departments/economics-of-labor',
          exact: false,
        },
        {
          id: 15,
          name: this.$t(
            'departments.advanced-mathematics-and-computer-science.title'
          ),
          path: '/about-us/departments/advanced-mathematics-and-computer-science',
          exact: false,
        },
        {
          id: 16,
          name: this.$t('departments.physical-education.title'),
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
