<template>
  <div class="institute-history">
    <div ref="imageHistoryContainer" class="institute-history__row">
      <div class="institute-history__title-mobile">
        {{ $t('history.title') }}
      </div>
      <div class="institute-history__image" v-if="about?.image">
        <img v-if="isVisible" :src="`${imageUrl}${about?.image}`" alt="surat" />
      </div>
      <div class="institute-history__body">
        <div class="institute-history__content">
          <div class="institute-history__title">{{ $t('history.title') }}</div>
          <div v-html="about?.text" class="institute-history__text"></div>
        </div>
        <div class="institute-history__button">
          <base-button
            @click="$router.push(localeLocation('/about-us'))"
            :text="$t('button.readMore')"
            appendIcon
            isActive
            iconUrl="home/icon-about.svg"
          ></base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    about: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      isVisible: false,
    }
  },
  computed: {
    ...mapGetters(['imageUrl']),
  },
  mounted() {
    if (this.$refs.imageHistoryContainer) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true
          observer.disconnect()
        }
      })
      observer.observe(this.$refs.imageHistoryContainer)
    }
  },
}
</script>

<style lang="scss" scoped>
.institute-history {
  font-family: 'Roboto Flex';
  // padding: 60px 0px 15px 0px;
  @media (max-width: 992px) {
    // padding-top: 80px;
  }
  @media (max-width: 600px) {
    // padding-top: 160px;
  }
  &__row {
    display: flex;
    gap: 52px;
    @media (max-width: 992px) {
      gap: 30px;
    }
    @media (max-width: 767px) {
      flex-wrap: wrap;
      gap: 20px;
    }
    @media (max-width: 767px) {
      gap: 10px;
    }
  }

  &__title-mobile {
    display: none;
    @media (max-width: 767px) {
      display: block;
      font-weight: 600;
      font-size: 24px;
      line-height: 118%;
      color: #333333;
    }
    @media (max-width: 479px) {
      font-size: 16px;
    }
  }

  &__image {
    flex: 0 1 36%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    @media (max-width: 992px) {
      flex: 0 1 50%;
    }
    @media (max-width: 767px) {
      flex: 0 1 100%;
    }
  }

  &__body {
    flex: 0 1 64%;
    @media (max-width: 992px) {
      flex: 0 1 50%;
    }
    @media (max-width: 767px) {
      flex: 0 1 100%;
    }
  }

  &__content {
    width: 100%;
    margin-bottom: 20px;
  }

  &__title {
    font-weight: 600;
    font-size: 36px;
    line-height: 120%px;
    color: #333333;
    margin-bottom: 40px;
    text-transform: uppercase;
    @media (max-width: 767px) {
      display: none;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: justify;
    display: -webkit-box;
    -webkit-line-clamp: 15;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000000;
    @media (max-width: 767px) {
      font-size: 16px;
    }
    @media (max-width: 479px) {
      font-size: 12px;
    }
  }

  &__button {
    font-family: 'Roboto Flex';
    font-size: 14px;
    color: #fff;
    display: flex;
    align-items: center;
    @media (max-width: 767px) {
      justify-content: flex-end;
    }
  }
  &__icon {
    margin-top: 6px;
  }
}
</style>
