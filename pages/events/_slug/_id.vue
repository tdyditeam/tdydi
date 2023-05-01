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
            {{ event?.title }}
          </h2>
        </div>
        <div class="news-item__header-date" v-if="event?.date">
          <span>{{ new Date(event?.date).toISOString().slice(0, 10) }}</span>
          <span>
            <img src="@/assets/img/home/article/eye.png" alt="" />
            <p>
              {{ event?.views }}
            </p>
          </span>
        </div>
      </div>
      <div class="news-item__picture">
        <departments-swiper
          :datas="event"
          :items="
            event?.image && event?.image?.length > 0
              ? [
                  getFileExp(event?.image[0])
                    ? event?.image[0]
                    : getFileExp(event?.image[1])
                    ? event?.image[1]
                    : '',
                ]
              : []
          "
        ></departments-swiper>
        <div class="file" v-if="event?.image.length > 0">
          <template v-for="(image, i) in event?.image">
            <template v-if="!getFileExp(image)">
              <a :href="`${imageUrl}${image}`" target="download">
                {{ $t('document') }}</a
              >
            </template>
          </template>
        </div>
      </div>
      <div class="article-item__people people-swiper-block">
        <div class="people-swiper-block__row">
          <div class="people-swiper-block__left-block">
            <div
              class="people-swiper-block__content"
              v-if="event?.student_fullname !== 'null'"
            >
              <div class="people-swiper-block__title">
                {{ event?.student_fullname }}
              </div>
              <div
                class="people-swiper-block__subtitle"
                v-if="event?.majors !== 'null'"
              >
                {{ event?.majors || '' }}
              </div>
            </div>
          </div>
          <div
            class="people-swiper-block__right-block"
            v-if="event?.teacher_fullname !== 'null'"
          >
            <div class="people-swiper-block__title">{{ $t('teacher') }}:</div>
            <div class="people-swiper-block__subtitle">
              {{ event?.teacher_fullname || '' }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from '~/api/generic.api'
import { mapGetters } from 'vuex'
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
        const res = await request({
          url: `/news/${this.$route.params.id}`,
          params: {
            lang: this.$i18n.locale,
          },
          method: 'GET',
        })
        if (res.status) {
          this.event = res.events || []
        }
      } catch (error) {
        console.log(error)
      }
    },
    async updatePage(p) {
      this.page = p
      await this.fetchEvents()
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
  font-family: 'Roboto Flex';
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: var(--primary);
  text-align: justify;
  padding-top: 20px;
}
</style>
