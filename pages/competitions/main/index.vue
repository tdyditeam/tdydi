<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="competitionsTop?.name"
      :title="$t('competitions.name')"
      :img="competitionsTop?.image"
    ></block-pages>
    <!-- <the-table :datas="competitionsBottom"></the-table> -->
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
      competitionsTop: null,
      competitionsBottom: null,
    }
  },
  computed: {
    breadCrumbs() {
      return [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('competitions.name'),
          path: `/competitions/main?q=${this.$route.query.q}`,
          exact: true,
        },
      ]
    },
  },
  // async fetch() {
  //   await Promise.all([this.fetchTopDatas(), this.fetchBottomDatas()])
  // },
  async mounted() {
    document.querySelector('.wrapper').scrollTop = 0
    await Promise.all([this.fetchTopDatas(), this.fetchBottomDatas()])
  },
  methods: {
    async fetchTopDatas() {
      try {
        const res = await request({
          url: `/${this.$route.query.q}/competitions`,
          params: {
            lang: this.$i18n.locale,
            submenu_id: this.$cookies.get('subId'),
          },
          method: 'GET',
        })
        if (res.status) {
          this.competitionsTop = res.data[0] || null
          console.log(this.competitionsTop)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchBottomDatas() {
      try {
        const res = await request({
          url: `/competitions-students`,
          params: {
            lang: this.$i18n.locale,
          },
          method: 'GET',
        })
        if (res.status) {
          this.competitionsBottom = res.student_competitions || []
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
