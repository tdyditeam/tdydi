<template>
  <div>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <title-block-pages :title="$t('teachers')"></title-block-pages>
    <departments-teachers
      :teachers="teachers"
      @clickedToCard="
        (data) =>
          $router.push(
            localeLocation(
              `/about-us/teachers/${this.$route.params.id}/${data.id}?q=${this.$route.query.q}&name=${data.firstname} ${data.lastname} ${data.middlename}&department=${this.$route?.query?.department}&teacher=${data.image}`
            )
          )
      "
    ></departments-teachers>
  </div>
</template>

<script>
import { request } from '~/api/generic.api'
export default {
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })

    return {
      title: this.$t('slogan'),
      meta: [
        {
          name: 'content-type',
          content: 'about-us',
        },
        {
          name: 'keywords',
          content: this.$t('keywords'),
        },
        ...i18nHead.link,
      ],
    }
  },
  data() {
    return {
      departmentName: null,
      teachers: null,
    }
  },
  //   watch: {
  //     '$i18n.locale': async function () {
  //       await this.fetchDatas()
  //     },
  //   },
  async fetch() {
    await this.fetchDatas()
  },
  computed: {
    breadCrumbs() {
      return [
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
          path: `/about-us/departments?q=${this.$route.query.q}`,
          exact: true,
        },
        {
          id: 4,
          name: this.departmentName,
          path: `/about-us/teachers/${this.$route.params.id}?q=${this.$route.query.q}&department=${this.$route?.query?.department}`,
          exact: true,
        },
      ]
    },
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
  methods: {
    async fetchDatas() {
      try {
        const res = await request({
          url: `/teachers`,
          params: {
            lang: this.$i18n.locale,
            department_id: this.$route?.query?.department,
          },
          method: 'GET',
        })
        if (res.status) {
          this.departmentName = res?.department_name
          this.teachers = res.teachers || []
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
