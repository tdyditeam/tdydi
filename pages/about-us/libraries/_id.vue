<template>
  <div class="faculties">
    <section style="width: 100%">
      <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
      <block-pages
        :description="datas?.text"
        :title="$route.query.department"
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
  data() {
    return {
      datas: null,
      subMenus: null,
      activeId: null,
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
          name: this.$t('header.menu.aboutUs.library'),
          path: `/about-us/library?q=${this.$route.query.q}`,
          exact: true,
        },
        {
          id: 4,
          name: this.$route.query.department,
          path: `/about-us/libraries/${this.$route.params.id}?q=${this.$route.query.q}&department=${this.$route.query.department}`,
          exact: true,
        },
      ],
    }
  },
  watch: {
    $route: async function () {
      await Promise.all([this.fetchDatas(), this.fetchDepartments()])
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
          url: `/libraries`,
          params: {
            lang: this.$i18n.locale,
            department_id: Number(this.$route.params.id),
          },
          method: 'GET',
        })
        console.log('about', res)
        if (res.status) {
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
        console.log('data', res)
        if (res.status) {
          this.subMenus = res.departments || null
          this.activeId = Number(this.$route.params.id)
        }
      } catch (error) {
        console.log(error)
      }
    },
    changeDatas(id) {
      this.$router.push(
        this.localeLocation(
          `/about-us/libraries/${id}?q=${this.$route.query.q}&department=${
            this.subMenus.find((item) => item.id === id)?.name
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
