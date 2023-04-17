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
              `/about-us/teachers/${this.$route.params.id}/${data.id}?q=${this.$route.query.q}&name=${data.firstname} ${data.lastname} ${data.middlename}&department=${this.$route?.query?.department}`
            )
          )
      "
    ></departments-teachers>
  </div>
</template>

<script>
import { request } from '~/api/generic.api'
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
          path: `/about-us/departments?q=${this.$route.query.q}`,
          exact: true,
        },
        {
          id: 4,
          name: this.$route?.query?.department,
          path: `/about-us/teachers/${this.$route.params.id}?q=${this.$route.query.q}&department=${this.$route?.query?.department}`,
          exact: true,
        },
      ],
      teachers: null,
    }
  },
  async fetch() {
    await this.fetchDatas()
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
            department_id: Number(this.$route.params.id),
          },
          method: 'GET',
        })
        console.log('data', res)
        if (res.status) {
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
