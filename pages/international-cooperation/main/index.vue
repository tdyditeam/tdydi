<template>
  <div class="international-partners">
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="partnersTop?.description"
      :img="partnersTop?.image"
      :title="$t('header.menu.internationalCooperation.name')"
    ></block-pages>
    <div
      class="international-partners__block-international-partners block-international-partners"
      v-if="partnersBottom && partnersBottom.length"
    >
      <h2 class="block-international-partners__title">
        {{ $t('international-cooperation.title') }}
      </h2>
      <div class="block-international-partners__body">
        <div
          class="block-international-partners__column"
          v-for="partners in partnersBottom"
          :key="partners.id"
        >
          <div
            class="block-international-partners__item item-block-international-partners"
          >
            <div class="item-block-international-partners__image-wrapper">
              <div class="item-block-international-partners__image">
                <img :src="`${imageUrl}${partners.image}`" alt="img" />
              </div>
            </div>

            <p
              class="item-block-international-partners__p"
              v-if="partners?.country"
            >
              {{ $t('country') }}:
              <span class="item-block-international-partners__pspan">{{
                partners?.country
              }}</span>
            </p>
            <p class="item-block-international-partners__p">
              {{ $t('international-cooperation.title') }}: <br />
              <span
                class="item-block-international-partners__pspan"
                v-html="partners.description"
              ></span>
            </p>
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
          content: 'international-cooperation',
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
      partnersTop: null,
      partnersBottom: null,
    }
  },
  computed: {
    breadCrumbs() {
      return [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t(
            'header.menu.internationalCooperation.internationalPartners'
          ),
          path: `/international-cooperation/main?q=${this.$route.query.q}`,
          exact: true,
        },
      ]
    },
    ...mapGetters(['imageUrl']),
  },
  async fetch() {
    await Promise.all([this.fetchTopDatas(), this.fetchBottomDatas()])
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
  methods: {
    async fetchTopDatas() {
      try {
        const res = await request({
          url: `/partners/top`,
          params: {
            lang: this.$i18n.locale,
          },
          method: 'GET',
        })
        if (res.status) {
          this.partnersTop = res.partners_top[0] || null
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchBottomDatas() {
      try {
        const res = await request({
          url: `/partners/university`,
          params: {
            lang: this.$i18n.locale,
          },
          method: 'GET',
        })
        if (res.status) {
          this.partnersBottom = res.partners_university || []
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.international-partners {
  &__image {
    margin-bottom: 40px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 18px;
    line-height: calc(35 / 30) * 100%;
    text-align: justify;
    margin-bottom: 70px;
  }
  &__bottom-text {
    font-weight: 400;
    font-size: 18px;
    line-height: calc(35 / 30) * 100%;
    text-align: justify;
    padding-top: 30px;
  }
}
.block-international-partners {
  &__title {
    font-weight: 600;
    font-size: 40px;
    line-height: calc(47 / 40) * 100%;
    text-align: center;
    margin: 50px 0px;
    @media (max-width: 767px) {
      font-size: 30px;
    }
  }
  &__body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    @media (max-width: 992px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 767px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 479px) {
      grid-template-columns: 1fr;
    }
  }

  &__column {
    padding: 20px;
    border: 1px solid rgba(51, 51, 51, 0.5);
    border-radius: 10px;
  }
  &__item {
  }
}
.item-block-international-partners {
  &__image-wrapper {
    padding: 14px 0px;
    border: 1px solid rgba(51, 51, 51, 0.5);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  &__image {
    width: 220px;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    @media (max-width: 1120px) {
      width: 150px;
    }
    @media (max-width: 479px) {
      width: 130px;
    }
  }

  &__p {
    font-weight: 400;
    font-size: 16px;
    line-height: calc(19 / 16) * 100%;
    color: #333333;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
    @media (max-width: 767px) {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  &__pspan {
    font-weight: 600;
    font-size: 16px;
    line-height: calc(19 / 16) * 100%;
    color: #333333;
  }
}
</style>
