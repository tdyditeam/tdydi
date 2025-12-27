<template>
  <div class="news-item __container">
    <bread-crumbs></bread-crumbs>
    <the-banner-outside
      :bannerLeft="bannerLeft"
      :bannerRight="bannerRight"
    ></the-banner-outside>
    <div class="news-item__content" v-if="event">
      <div class="news-item__header">
        <div class="news-item__header-title">
          <h2>
            {{ event?.events?.title }}
          </h2>
        </div>
        <div class="news-item__header-date" v-if="event?.events?.date">
          <span>{{
            new Date(event?.events?.date).toISOString().slice(0, 10)
          }}</span>
          <span>
            <img src="@/assets/img/home/article/eye.png" alt="" />
            <p>
              {{ event?.events?.views }}
            </p>
          </span>
        </div>
      </div>
      <div class="news-item__picture">
        <departments-swiper
          :datas="event?.events"
          :items="event?.events?.image ? [event?.events?.image] : []"
        ></departments-swiper>
        <div class="file" v-if="event?.files?.length > 0">
          <template v-for="(file, i) in event?.files">
            <a :href="`${imageUrl}${file.file}`" target="download">
              {{ file.name }}</a
            >
          </template>
        </div>
      </div>
      <div
        v-if="event?.events?.content || event?.events?.description && $route.params.slug === 3"
        class="news-item__text"
        v-html="event?.events?.content || event?.events?.description"
      ></div>
      <div
        v-if="event?.events?.publisher && event?.events?.publisher.length > 0"
        class="content-swiper-block__publisher"
      >
        <div class="content-swiper-block__publisher-image">
          <img :src="event?.events?.publisher[0].logo_thumbnail" alt="" />
        </div>
        <h2 class="content-swiper-block__publisher-title">
          {{ event?.events?.publisher[0].title }}
        </h2>
      </div>
      <div class="article-item__people people-swiper-block">
        <div class="people-swiper-block__row">
          <div class="people-swiper-block__left-block">
            <div
              class="people-swiper-block__content"
              v-if="
                event?.events?.student_fullname !== 'null' &&
                event?.events?.student_fullname !== null
              "
            >
              <div class="people-swiper-block__title">
                {{ event?.events?.student_fullname }}
              </div>
              <div
                class="people-swiper-block__subtitle"
                v-if="
                  event?.events?.majors !== 'null' &&
                  event?.events?.majors !== null
                "
              >
                {{ event?.events?.majors || '' }}
              </div>
            </div>
          </div>
          <div
            class="people-swiper-block__right-block"
            v-if="
              event?.events?.teacher_fullname !== 'null' &&
              event?.events?.teacher_fullname !== null
            "
          >
            <div class="people-swiper-block__title">{{ $t('teacher') }}:</div>
            <div class="people-swiper-block__subtitle">
              {{ event?.events?.teacher_fullname || '' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { request } from '~/api/generic.api'
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
  data() {
    return {
      bannerLeft: null,
      bannerRight: null,
      event: null,
    }
  },
  computed: {
    ...mapGetters(['imageUrl']),
  },
  watch: {
    $route: {
      async handler() {
        await this.fetchOneEvent()
      },
      deep: true,
    },
  },
  async fetch() {
    await Promise.all([
      this.fetchBannerLeft(),
      this.fetchBannerRight(),
      this.fetchOneEvent(),
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
    async fetchOneEvent() {
      try {
        const currentSlug = Number(this.$route.params.slug)

        // Если item.id === 3, используем centralized API
        if (currentSlug === 3) {
          const res = await request({
            url: `/centralized/news/${this.$route.params.id}`,
            params: {
              lang: this.$i18n.locale,
            },
            method: 'GET',
            baseURL: 'https://merkez.bilim.tm/api/v1',
          })

          if (res) {
            // Преобразуем данные из centralized API в формат компонента
            this.event = {
              events: {
                id: res.id,
                title: res.title,
                description: res.description || '',
                content: res.content || '',
                image: res.image || res.image_thumbnail || '',
                date: res.published_date,
                views: res.views || 0,
                slug: res.slug || '',
                publisher: res.publisher || [],
                source_link: res.source_link || '',
                student_fullname: null,
                teacher_fullname: null,
                majors: null,
              },
              files: [],
            }
          }
        } else {
          // Оригинальный API для других случаев
          const res = await request({
            url: `/news/${this.$route.params.id}`,
            params: {
              lang: this.$i18n.locale,
            },
            method: 'GET',
          })
          if (res.status) {
            this.event = res || []
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
    getFileExp(fileUrl) {
      var allowedExtensions =
        /(\.jpg|\.jpeg|\.png|\.gif|\.svg|\.JPG|\.JPEG|\.PNG|\.GIF|\.SVG)$/i
      if (!allowedExtensions.exec(fileUrl)) {
        return false
      } else {
        return true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.news-item {
  &__content {
    max-width: 900px;
    margin: 0px auto;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    &-title {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
      color: var(--text);
      max-width: 424px;
    }
    &-date {
      font-style: italic;
      font-weight: 800;
      font-size: 20px;
      line-height: 116.6%;
      color: #868686;
      display: flex;
      align-items: center;
      margin: 8px 0;
      span:nth-child(1) {
        margin-right: 40px;
      }
      span:nth-child(2) {
        display: flex;
        align-items: center;
        img {
          width: 22px;
          height: 15px;
          object-fit: cover;
          object-position: center;
        }
        p {
          margin-left: 5px;
        }
      }
    }
  }
  &__picture {
    margin-bottom: 15px;
  }
  &__text {
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: justify;
    color: var(--text);
    margin-bottom: 20px;
  }
}
.people-swiper-block {
  &__row {
    display: flex;
    justify-content: space-between;
  }

  &__left-block {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__image {
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    color: #333333;
  }

  &__subtitle {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #20ba72;
  }

  &__right-block {
  }
}
.file {
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-family: 'Roboto Flex';
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: var(--primary);
  text-align: justify;
  padding-top: 20px;
}
.content-swiper-block__publisher {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  &-image {
    width: 40px;
    height: 40px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &-title {
    font-weight: 600;
    font-size: 14px;
    line-height: 116.6%;
    color: #333333;
  }
}
</style>
