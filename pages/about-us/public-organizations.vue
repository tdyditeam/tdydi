<template>
  <div class="faculties">
    <section style="width: 100%">
      <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
      <block-pages
        :description="datas?.description"
        :title="datas?.name"
        :img="datas?.image"
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
          name: this.$t('header.menu.aboutUs.publicOrganizations'),
          path: `/about-us/public-organizations?q=${this.$route.query.q}`,
          exact: true,
        },
      ],
    }
  },
  async fetch() {
    await this.fetchDatas()
  },
  async mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
  methods: {
    async fetchDatas() {
      try {
        const res = await request({
          url: `/public-organizatioin`,
          params: {
            lang: this.$i18n.locale,
          },
          method: 'GET',
        })
        console.log('data', res)
        if (res.status) {
          this.subMenus = res.organizations || null
          this.activeId = this.subMenus[0].id
          this.datas = this.subMenus[0]
        }
      } catch (error) {
        console.log(error)
      }
    },
    changeDatas(id) {
      this.datas = this.subMenus.find((item) => item.id === id)
      console.log(this.datas)
      this.activeId = this.subMenus.find((item) => item.id === id)?.id
    },
    async sendComment() {
      const elem = document.querySelector('.ck-content')
      console.log(elem.innerHTML)
      this.main.description = elem.innerHTML
      console.log(this.main)
      this.$toast(this.$t('checkCommit'))
      this.main.id = null
      this.main.name = null
      this.main.email = null
      this.main.phone_number = null
      this.main.description = null
      this.main.image = null
      this.main.is_needed = null
    },
    changeFile(file) {
      this.main.image = file
    },
  },
}
</script>
<style lang="scss">
.faculties {
  display: flex;
  justify-content: space-between;
}
</style>
