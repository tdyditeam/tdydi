<template>
  <div v-if="datas">
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <title-block-pages
      :title="`${datas?.firstname} ${datas?.lastname} ${datas?.middlename}`"
    ></title-block-pages>
    <departments-teachers
      :teachers="datas ? [datas] : []"
    ></departments-teachers>
    <div class="teacher">
      <div class="teacher__description" v-html="datas?.printed_books"></div>
    </div>
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
      departmentName: null,
    }
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
        {
          id: 5,
          name: `${this.datas?.firstname} ${this.datas?.lastname} ${this.datas?.middlename}`,
          path: `/about-us/teachers/${this.$route.params.id}/${this.$route.params.teacher}?q=${this.$route.query.q}&name=${this.$route?.query?.name}&department=${this.$route?.query?.department}&teacher=${this.$route?.query?.teacher}`,
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
          url: `/teachers/one`,
          params: {
            id: this.$route.query.teacher,
            lang: this.$i18n.locale,
            department_id: this.$route.query.department,
          },
          method: 'GET',
        })
        if (res.status) {
          this.departmentName = res.department_name
          this.datas = res.teachers || []
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.teacher {
  padding: 40px 20px 0px 20px;
  &__description {
    font-family: 'Roboto Flex';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000;
    text-align: justify;
  }
}
</style>
