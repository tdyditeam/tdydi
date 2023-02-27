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
          path: `/about-us/library/accounting?q=accounting`,
          exact: false,
        },
        {
          id: 2,
          name: this.$t('departments.statistics.title'),
          path: `/about-us/library/statistics?q=statistics`,
          exact: false,
        },
        {
          id: 3,
          name: this.$t('departments.economical-and-law.title'),
          path: `/about-us/library/economical-and-law?q=economical-and-law`,
          exact: false,
        },
        {
          id: 4,
          name: this.$t('departments.economic.title'),
          path: `/about-us/library/economic?q=economic`,
          exact: false,
        },
        {
          id: 5,
          name: this.$t('departments.banking.title'),
          path: `/about-us/library/banking?q=banking`,
          exact: false,
        },
        {
          id: 6,
          name: this.$t('departments.finance.title'),
          path: `/about-us/library/finance?q=finance`,
          exact: false,
        },
        {
          id: 7,
          name: this.$t('departments.digital-economy.title'),
          path: `/about-us/library/digital-economy?q=digital-economy`,
          exact: false,
        },
        {
          id: 9,
          name: this.$t('departments.world-economy.title'),
          path: `/about-us/library/world-economy?q=world-economy`,
          exact: false,
        },
        {
          id: 10,
          name: this.$t('departments.management.title'),
          path: `/about-us/library/management?q=management`,
          exact: false,
        },
        {
          id: 11,
          name: this.$t('departments.information-systems.title'),
          path: `/about-us/library/information-systems?q=information-systems`,
          exact: false,
        },
        {
          id: 12,
          name: this.$t('departments.foreign-languages.title'),
          path: `/about-us/library/foreign-languages?q=foreign-languages`,
          exact: false,
        },
        {
          id: 13,
          name: this.$t('departments.marketing.title'),
          path: `/about-us/library/marketing?q=marketing`,
          exact: false,
        },
        {
          id: 14,
          name: this.$t('departments.economics-of-labor.title'),
          path: `/about-us/library/economics-of-labor?q=economics-of-labor`,
          exact: false,
        },
        {
          id: 15,
          name: this.$t(
            'departments.advanced-mathematics-and-computer-science.title'
          ),
          path: `/about-us/library/advanced-mathematics-and-computer-science?q=advanced-mathematics-and-computer-science`,
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
