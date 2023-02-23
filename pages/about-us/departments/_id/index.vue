<template>
  <section style="width: 100%">
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <title-block-pages
      isButton
      appendIcon
      title=""
      :text="$t('button.dearTeachers')"
      iconUrl="home/icon-go.svg"
      :title="title[$route.params.id]"
      @clicked="
        $router.push(
          localeLocation(
            `/about-us/departments/${$route.params.id}/${
              title[$route.params.id]
            }`
          )
        )
      "
    ></title-block-pages>
    <departments-swiper
      :items="img[$route.params.id]"
      :datas="{ description: description[$route.params.id] }"
    ></departments-swiper>
  </section>
</template>

<script>
export default {
  data() {
    return {
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.aboutUs.name'),
          path: '/about-us',
          exact: true,
        },
        {
          id: 3,
          name: this.$t('header.menu.aboutUs.departments'),
          path: `/about-us/departments/${this.$route.params.id}`,
          exact: true,
        },
      ],
      title: {
        accounting: this.$t('departments.accounting.title'),
        statistic: this.$t('departments.statistics.title'),
        'economical-and-law': this.$t('departments.economicsandlaw.title'),
        economic: this.$t('departments.economictheory.title'),
        banking: this.$t('departments.banking.title'),
        finance: this.$t('departments.finance.title'),
        'digital-ecocnomy': this.$t('departments.digitalEconomy.title'),
        'social-studies': this.$t('departments.socialStudies.title'),
        'world-economy': this.$t('departments.globalEconomy.title'),
        menejment: this.$t('departments.management.title'),
        'information-systems': this.$t('departments.informationsystems.title'),
        'foreign-languages': this.$t('departments.foreignLanguages.title'),
        marketing: this.$t('departments.marketing.title'),
        'economics-of-labor': this.$t('departments.economicsLabor.title'),
        'advanced-mathematics-and-computer-science': this.$t(
          'departments.mathematics.title'
        ),
        'physical-education': this.$t('departments.physicaleducation.title'),
      },
      description: {
        accounting: this.$t('departments.accounting.description'),
        statistic: this.$t('departments.statistics.description'),
        'economical-and-law': this.$t(
          'departments.economicsandlaw.description'
        ),
        economic: this.$t('departments.economictheory.description'),
        banking: this.$t('departments.banking.description'),
        finance: this.$t('departments.finance.description'),
        'digital-ecocnomy': this.$t('departments.digitalEconomy.description'),
        'social-studies': this.$t('departments.socialStudies.description'),
        'world-economy': this.$t('departments.globalEconomy.description'),
        menejment: this.$t('departments.management.description'),
        'information-systems': this.$t(
          'departments.informationsystems.description'
        ),
        'foreign-languages': this.$t(
          'departments.foreignLanguages.description'
        ),
        marketing: this.$t('departments.marketing.description'),
        'economics-of-labor': this.$t('departments.economicsLabor.description'),
        'advanced-mathematics-and-computer-science': this.$t(
          'departments.mathematics.description'
        ),
        'physical-education': this.$t(
          'departments.physicaleducation.description'
        ),
      },
      img: {
        accounting: ['accounting.png'],
        finance: ['finance.png'],
        'digital-ecocnomy': ['digital-ecocnomy.png'],
        'social-studies': ['finance.png'],
        'world-economy': ['finance.png'],
        'information-systems': ['information-systems.png'],
        managament: ['finance.png'],
        'foreign-languages': ['finance.png'],
        banking: ['banking.png'],
        marketing: ['marketing.png'],
        'economical-and-law': ['finance.png'],
        'economics-of-labor': ['finance.png'],
        'advanced-mathematics-and-computer-science': ['finance.png'],
        'physical-education': ['physical-education.png'],
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
