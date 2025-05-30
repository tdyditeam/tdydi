<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="datas?.name"
      :title="title"
      :img="datas?.image"
    ></block-pages>
  </section>
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
          content: 'competitions',
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
      title: this.$route.query.name,
      datas: null,
    }
  },
  watch: {
    $route: async function () {
      await this.fetchDatas()
    },
  },
  computed: {
    breadCrumbs() {
      return [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$route.query.name,
          path: `/competitions/${Number(this.$route.params.id)}?name=${
            this.$route.query.name
          }`,
          exact: true,
        },
      ]
    },
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
          url: `/${Number(this.$route.params.id)}/competitions`,
          params: {
            lang: this.$i18n.locale,
            submenu_id: Number(this.$route.params.id),
          },
          method: 'GET',
        })
        if (res.status) {
          this.datas = res.data[0] || null
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
<style lang="scss">
.block__description-content {
  table {
    padding-top: 40px;
    width: 100%;

    thead {
      background-color: #20ba72;
      height: 80px;
      tr {
        th {
          padding: 10px;
          font-weight: 400;
          font-size: 16px;
          line-height: 120%;
          color: #ffffff;
          text-align: center;
          @media (max-width: 767px) {
            font-size: 14px;
            padding: 6px;
          }
          @media (max-width: 479px) {
            padding: 4px;
            font-size: 12px;
            padding: 6px;
          }
        }
      }
    }
    tbody {
      tr {
        transition: background-color 0.3s ease 0s;
        cursor: pointer;
        &:first-child {
          background-color: #20ba72;
          color: #ffffff !important;
        }
        &:nth-child(even) {
          background-color: #f5f5f5;
        }
        &._active,
        td {
          font-weight: 400;
          font-size: 16px;
          line-height: 120%;
          color: #333333;
          padding: 10px;
          @media (max-width: 767px) {
            font-size: 14px;
            padding: 6px;
          }
          @media (max-width: 479px) {
            font-size: 10px;
            padding: 4px;
          }
        }
      }
    }
  }
}
</style>
