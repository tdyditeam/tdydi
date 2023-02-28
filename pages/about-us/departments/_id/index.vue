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
            `/about-us/departments/${$route.params.id}/${$route.params.id}`
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
        statistics: this.$t('departments.statistics.title'),
        'economical-and-law': this.$t('departments.economical-and-law.title'),
        economic: this.$t('departments.economic.title'),
        banking: this.$t('departments.banking.title'),
        finance: this.$t('departments.finance.title'),
        'digital-economy': this.$t('departments.digital-economy.title'),
        'social-studies': this.$t('departments.social-studies.title'),
        'world-economy': this.$t('departments.world-economy.title'),
        management: this.$t('departments.management.title'),
        'information-systems': this.$t('departments.information-systems.title'),
        'foreign-languages': this.$t('departments.foreign-languages.title'),
        marketing: this.$t('departments.marketing.title'),
        'economics-of-labor': this.$t('departments.economics-of-labor.title'),
        'advanced-mathematics-and-computer-science': this.$t(
          'departments.advanced-mathematics-and-computer-science.title'
        ),
        'physical-education': this.$t('departments.physical-education.title'),
      },
      description: {
        accounting: this.$t('departments.accounting.description'),
        statistics: this.$t('departments.statistics.description'),
        'economical-and-law': this.$t(
          'departments.economical-and-law.description'
        ),
        economic: this.$t('departments.economic.description'),
        banking: this.$t('departments.banking.description'),
        finance: this.$t('departments.finance.description'),
        'digital-economy': this.$t('departments.digital-economy.description'),
        'social-studies': this.$t('departments.social-studies.description'),
        'world-economy': this.$t('departments.world-economy.description'),
        management: this.$t('departments.management.description'),
        'information-systems': this.$t(
          'departments.information-systems.description'
        ),
        'foreign-languages': this.$t(
          'departments.foreign-languages.description'
        ),
        marketing: this.$t('departments.marketing.description'),
        'economics-of-labor': this.$t(
          'departments.economics-of-labor.description'
        ),
        'advanced-mathematics-and-computer-science': this.$t(
          'departments.advanced-mathematics-and-computer-science.description'
        ),
        'physical-education': this.$t(
          'departments.physical-education.description'
        ),
      },
      img: {
        accounting: ['accounting.png'],
        finance: ['finance.png'],
        'digital-economy': ['digital-ecocnomy.png'],
        'social-studies': ['finance.png'],
        'world-economy': ['finance.png'],
        'information-systems': ['information-systems.webp'],
        management: ['management.png'],
        'foreign-languages': ['finance.png'],
        statistics: ['information-systems.webp'],
        economic: ['information-systems.webp'],
        banking: ['banking.webp'],
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
