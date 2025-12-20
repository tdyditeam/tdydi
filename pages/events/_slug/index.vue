<template>
  <div class="news __container">
    <bread-crumbs></bread-crumbs>
    <the-banner-outside
      :bannerLeft="bannerLeft"
      :bannerRight="bannerRight"
    ></the-banner-outside>
    <div class="news__header">
      <div v-if="Number($route.params.slug) === 3" class="news__header-search">
        <text-filed
          :placeholder="$t('search')"
          :value="search"
          prependIcon="search-normal.png"
          @updateValue="handleSearch"
        ></text-filed>
      </div>
      <div v-else></div>
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
        @clickOneItem="handleEventClick(event)"
      ></article-item>
    </div>
  </div>
</template>

<script>
import { request } from '~/api/generic.api'
import EventsArticle from '~/components/EventsArticle.vue'
export default {
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })

    return {
      title: this.$t('slogan'),
      meta: [
        {
          name: 'content-type',
          content: 'events',
        },
        {
          name: 'keywords',
          content: this.$t('keywords'),
        },
        ...i18nHead.link,
      ],
    }
  },
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
      searchDebounceTimer: null,
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
        {
          id: 3,
          name: this.$t('button.educationMinistry'),
          eventType: 'educationMinistry',
        },
      ]
      return arr
    },
  },
  watch: {
    $route: {
      async handler() {
        this.page = 1
        this.search = ''
        await this.fetchEvents()
      },
      deep: true,
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
  beforeDestroy() {
    if (this.searchDebounceTimer) {
      clearTimeout(this.searchDebounceTimer)
    }
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
        const currentSlug = Number(this.$route.params.slug)

        // Если item.id === 3, используем centralized API
        if (currentSlug === 3) {
          const offset = (this.page - 1) * this.limit
          const params = {
            lang: this.$i18n.locale,
            limit: this.limit,
            offset: offset,
          }

          if (this.search) {
            params.search = this.search
          }

          const res = await request({
            url: '/centralized/news/',
            params: params,
            method: 'GET',
            baseURL: 'https://merkez.bilim.tm/api/v1',
          })

          if (res && res.results) {
            this.pageLength = Math.ceil((res.count || 0) / this.limit)
            // Преобразуем данные из нового API в формат компонента
            this.events = res.results.map((item) => ({
              id: item.id,
              title: item.title,
              description: item.description || '',
              image: item.image_thumbnail || item.image || '',
              date: item.published_date,
              views: item.views || 0,
              slug: item.slug || '',
              publisher: item.publisher || [],
              student_fullname: null,
              teacher_fullname: null,
              majors: null,
            }))
          } else {
            this.events = []
            this.pageLength = 0
          }
        } else {
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
          }
        }
      } catch (error) {
        console.error('Error fetching events:', error)
        this.events = []
        this.pageLength = 0
      }
    },
    async updatePage(p) {
      this.page = p
      await this.fetchEvents()
    },
    handleSearch(value) {
      this.search = value
      this.page = 1

      // Очищаем предыдущий таймер
      if (this.searchDebounceTimer) {
        clearTimeout(this.searchDebounceTimer)
      }

      // Устанавливаем новый таймер с debounce (500ms)
      this.searchDebounceTimer = setTimeout(() => {
        this.fetchEvents()
      }, 500)
    },
    handleEventClick(event) {
      const currentSlug = Number(this.$route.params.slug)

      // Если item.id === 3, используем slug для навигации
      if (currentSlug === 3 && event.slug) {
        this.$router.push(
          this.localeLocation(
            `/events/${currentSlug}/${event.id}?slug=${event.slug}`
          )
        )
      } else {
        // Оригинальная навигация для других случаев
        this.$router.push(
          this.localeLocation(`/events/${currentSlug}/${event.id}`)
        )
      }
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
      gap: 10px;
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
