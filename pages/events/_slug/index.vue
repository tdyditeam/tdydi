<template>
  <div class="news __container">
    <bread-crumbs></bread-crumbs>
    <the-banner-outside
      :bannerLeft="bannerLeft"
      :bannerRight="bannerRight"
    ></the-banner-outside>
    <div class="news__header">
      <div class="news__header-search">
        <text-filed
          :placeholder="$t('search')"
          :value="search"
          prependIcon="search-normal.png"
        ></text-filed>
      </div>
      <div class="news__header-buttons">
        <pagination
          v-if="pageLength > 1"
          :modelValue="page"
          @clickPage="(pagination) => updatePage(pagination)"
          :pageCount="pageLength"
        ></pagination>
        <base-button
          v-for="item in items"
          :key="item.id"
          :text="item.name"
          :isActive="item.id === Number($route.params.slug)"
          @click="
            $router.push(
              localeLocation(`/events/${item.id}?event_type=${item.eventType}`)
            )
          "
        ></base-button>
      </div>
    </div>
    <div class="news__content">
      <article-item
        v-for="(event, index) in events"
        :key="event.id"
        :event="event"
        @clickOneItem="
          $router.push(
            localeLocation(`/events/${Number($route.params.slug)}/${event.id}`)
          )
        "
      ></article-item>
    </div>
  </div>
</template>

<script>
import { request } from '~/api/generic.api'
import EventsArticle from '~/components/EventsArticle.vue'
export default {
  components: { EventsArticle },
  data() {
    return {
      search: '',
      limit: 20,
      page: 1,
      pageLength: 0,
      events: null,
      bannerLeft: null,
      bannerRight: null,
    }
  },
  computed: {
    items() {
      let arr = [
        {
          id: 1,
          name: this.$t('button.news'),
          eventType: 'news',
        },
        {
          id: 2,
          name: this.$t('button.articles'),
          eventType: 'article',
        },
      ]
      return arr
    },
  },
  async fetch() {
    await Promise.all([
      this.fetchBannerLeft(),
      this.fetchBannerRight(),
      this.fetchEvents(),
    ])
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
  methods: {
    async fetchBannerLeft() {
      try {
        const res = await request({
          url: '/galerias',
          params: {
            lang: this.$i18n.locale,
            type: 'main-banner-left',
          },
          method: 'GET',
        })
        if (res.status) {
          this.bannerLeft = res?.galerias[0]
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchBannerRight() {
      try {
        const res = await request({
          url: '/galerias',
          params: {
            lang: this.$i18n.locale,
            type: 'main-banner-right',
          },
          method: 'GET',
        })
        if (res.status) {
          this.bannerRight = res?.galerias
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchEvents() {
      try {
        const res = await request({
          url: `/news?events_type=${this.$route.query.event_type}&limit=${this.limit}&page=${this.page}`,
          params: {
            lang: this.$i18n.locale,
          },
          method: 'GET',
        })
        if (res.status) {
          this.pageLength = Math.ceil(res.total / this.limit)
          this.events = res.events || []
          this.$store.commit('SET_LOADER', false)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async updatePage(p) {
      this.page = p
      await this.fetchEvents()
    },
  },
}
</script>

<style lang="scss" scoped>
.news {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 992px) {
      flex-direction: column;
      align-items: flex-start;
    }
    &-search {
      width: 32%;
      @media (max-width: 992px) {
        width: 420px;
      }
      @media (max-width: 768px) {
        width: 420px;
        .input__body {
          padding: 4px 10px;
        }
      }
      @media (max-width: 460px) {
        width: 300px;
      }
    }
    &-buttons {
      display: flex;
      border: 1px solid transparent;
      .button {
        &:last-child {
          margin-left: 10px;
        }
      }
    }
  }
  &__content {
    margin: 60px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 25px;
    @media (max-width: 980px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 15px;
      margin: 10px 0;
    }
    @media (max-width: 620px) {
      grid-template-columns: 1fr;
      grid-gap: 15px;
    }
  }
}
</style>
