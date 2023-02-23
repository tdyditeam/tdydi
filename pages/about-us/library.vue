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
          name: this.$t('departments.accounting.title'),
          path: '/about-us/library/accounting',
          exact: false,
        },
        {
          id: 2,
          name: this.$t('departments.statistics.title'),
          path: '/about-us/library/statistic',
          exact: false,
        },
        {
          id: 3,
          name: this.$t('departments.economicsandlaw.title'),
          path: '/about-us/library/economical-and-law',
          exact: false,
        },
        {
          id: 4,
          name: this.$t('departments.economictheory.title'),
          path: '/about-us/library/economic',
          exact: false,
        },
        {
          id: 5,
          name: this.$t('departments.banking.title'),
          path: '/about-us/library/banking',
          exact: false,
        },
        {
          id: 6,
          name: this.$t('departments.finance.title'),
          path: '/about-us/library/finance',
          exact: false,
        },
        {
          id: 7,
          name: this.$t('departments.digitalEconomy.title'),
          path: '/about-us/library/digital-ecocnomy',
          exact: false,
        },
        {
          id: 9,
          name: this.$t('departments.globalEconomy.title'),
          path: '/about-us/library/world-economy',
          exact: false,
        },
        {
          id: 10,
          name: this.$t('departments.management.title'),
          path: '/about-us/library/menejment',
          exact: false,
        },
        {
          id: 11,
          name: this.$t('departments.informationsystems.title'),
          path: '/about-us/library/information-systems',
          exact: false,
        },
        {
          id: 12,
          name: this.$t('departments.foreignLanguages.title'),
          path: '/about-us/library/foreign-languages',
          exact: false,
        },
        {
          id: 13,
          name: this.$t('departments.marketing.title'),
          path: '/about-us/library/marketing',
          exact: false,
        },
        {
          id: 14,
          name: this.$t('departments.economicsLabor.title'),
          path: '/about-us/library/economics-of-labor',
          exact: false,
        },
        {
          id: 15,
          name: this.$t('departments.mathematics.title'),
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
