<template>
  <div class="faculties">
    <section style="width: 100%">
      <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
      <block-pages
        :description="datas?.description || datas?.text"
        :title="$t('library.title')"
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
      ],
    }
  },
  async fetch() {
    await Promise.all([this.fetchLibrary(), this.fetchDatas()])
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
  methods: {
    async fetchLibrary() {
      try {
        const res = await request({
          url: `/libraries`,
          params: {
            lang: this.$i18n.locale,
          },
          method: 'GET',
        })
        if (res.status) {
          this.datas = res.libraries[0]
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchDatas() {
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
          this.activeId = this.subMenus[0].id
          this.datas = this.subMenus[0]
        }
      } catch (error) {
        console.log(error)
      }
    },
    changeDatas(id) {
      this.activeId = this.subMenus.find((item) => item.id === id)?.id
      this.$router.push(
        this.localeLocation(
          `/about-us/libraries/${this.activeId}?q=${
            this.$route.query.q
          }&department=${this.subMenus.find((item) => item.id === id)?.image}`
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
