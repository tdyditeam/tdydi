<template>
  <div class="faculties">
    <section style="width: 70%">
      <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
      <title-block-pages
        isButton
        appendIcon
        title=""
        :text="$t('button.dearTeachers')"
        iconUrl="home/icon-go.svg"
        :title="datas?.name"
        @clicked="
          $router.push(
            localeLocation(
              `/about-us/teachers/${datas.id}?q=${$route.query.q}&department=${datas?.image}`
            )
          )
        "
      ></title-block-pages>
      <departments-swiper
        :items="[datas?.image]"
        :datas="{ description: datas?.description }"
      ></departments-swiper>
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
          name: this.$t('header.menu.aboutUs.departments'),
          path: `/about-us/departments?q=${this.$route.query.q}`,
          exact: true,
        },
      ],
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
          url: `/departments`,
          params: {
            lang: this.$i18n.locale,
          },
          method: 'GET',
        })
        console.log('departments', res)
        if (res.status) {
          this.subMenus = res.departments || null
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
  },
}
</script>
<style>
.faculties {
  display: flex;
  justify-content: space-between;
}
</style>
