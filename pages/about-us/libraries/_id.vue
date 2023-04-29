<template>
  <div class="faculties">
    <section style="width: 100%">
      <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
      <block-pages
        :description="datas?.text"
        :title="this.departmentName"
      ></block-pages>
    </section>
    <sidebar-without-route
      :subMenus="subMenus"
      :activeId="activeId"
      @changeDatas="changeDatas"
    ></sidebar-without-route>
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
      datas: null,
      subMenus: null,
      activeId: null,
      departmentName: null,
    }
  },
  watch: {
    $route: async function () {
      await Promise.all([this.fetchDatas(), this.fetchDepartments()])
    },
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
          name: this.$t('header.menu.aboutUs.library'),
          path: `/about-us/library?q=${this.$route.query.q}`,
          exact: true,
        },
        {
          id: 4,
          name: this.departmentName,
          path: `/about-us/libraries/${this.$route.params.id}?q=${this.$route.query.q}&department=${this.$route.query.department}`,
          exact: true,
        },
      ]
    },
  },
  async fetch() {
    await Promise.all([this.fetchDatas(), this.fetchDepartments()])
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
  methods: {
    async fetchDatas() {
      try {
        const res = await request({
          url: `/libraries/departments`,
          params: {
            lang: this.$i18n.locale,
            department_id: this.$route.query.department,
          },
          method: 'GET',
        })
        if (res.status) {
          this.departmentName = res.department_name
          this.datas = res.libraries[0] || null
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchDepartments() {
      try {
        const res = await request({
          url: `/departments`,
          params: {
            lang: this.$i18n.locale,
          },
          method: 'GET',
        })
        if (res.status) {
          this.subMenus = res.departments || null
          this.activeId = res.departments.find(
            (item) => item.image === this.$route.query.department
          )?.id
        }
      } catch (error) {
        console.log(error)
      }
    },
    changeDatas(id) {
      this.activeId = id
      this.$router.push(
        this.localeLocation(
          `/about-us/libraries/${id}?q=${this.$route.query.q}&department=${
            this.subMenus.find((item) => item.id === id)?.image
          }`
        )
      )
    },
  },
}
</script>

<style>
.faculties {
  display: flex;
  justify-content: space-between;
}
</style>
