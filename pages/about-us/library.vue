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
          path: `/about-us/library/accounting?q=${this.$t(
            'departments.accounting.title'
          )}`,
          exact: false,
        },
        {
          id: 2,
          name: this.$t('departments.statistics.title'),
          path: `/about-us/library/statistic?q=${this.$t(
            'departments.statistics.title'
          )}`,
          exact: false,
        },
        {
          id: 3,
          name: this.$t('departments.economicsandlaw.title'),
          path: `/about-us/library/economical-and-law?q=${this.$t(
            'departments.economicsandlaw.title'
          )}`,
          exact: false,
        },
        {
          id: 4,
          name: this.$t('departments.economictheory.title'),
          path: `/about-us/library/economic?q=${this.$t(
            'departments.economictheory.title'
          )}`,
          exact: false,
        },
        {
          id: 5,
          name: this.$t('departments.banking.title'),
          path: `/about-us/library/banking?q=${this.$t(
            'departments.banking.title'
          )}`,
          exact: false,
        },
        {
          id: 6,
          name: this.$t('departments.finance.title'),
          path: `/about-us/library/finance?q=${this.$t(
            'departments.finance.title'
          )}`,
          exact: false,
        },
        {
          id: 7,
          name: this.$t('departments.digitalEconomy.title'),
          path: `/about-us/library/digital-ecocnomy?q=${this.$t(
            'departments.digitalEconomy.title'
          )}`,
          exact: false,
        },
        {
          id: 9,
          name: this.$t('departments.globalEconomy.title'),
          path: `/about-us/library/world-economy?q=${this.$t(
            'departments.globalEconomy.title'
          )}`,
          exact: false,
        },
        {
          id: 10,
          name: this.$t('departments.management.title'),
          path: `/about-us/library/menejment?q=${this.$t(
            'departments.management.title'
          )}`,
          exact: false,
        },
        {
          id: 11,
          name: this.$t('departments.informationsystems.title'),
          path: `/about-us/library/information-systems?q=${this.$t(
            'departments.informationsystems.title'
          )}`,
          exact: false,
        },
        {
          id: 12,
          name: this.$t('departments.foreignLanguages.title'),
          path: `/about-us/library/foreign-languages?q=${this.$t(
            'departments.foreignLanguages.title'
          )}`,
          exact: false,
        },
        {
          id: 13,
          name: this.$t('departments.marketing.title'),
          path: `/about-us/library/marketing?q=${this.$t(
            'departments.marketing.title'
          )}`,
          exact: false,
        },
        {
          id: 14,
          name: this.$t('departments.economicsLabor.title'),
          path: `/about-us/library/economics-of-labor?q=${this.$t(
            'departments.economicsLabor.title'
          )}`,
          exact: false,
        },
        {
          id: 15,
          name: this.$t('departments.mathematics.title'),
          path: `/about-us/library/advanced-mathematics-and-computer-science?q=${this.$t(
            'departments.mathematics.title'
          )}`,
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
