<template>
  <div class="news __container">
    <!-- <bread-crumbs></bread-crumbs> -->
    <div class="news__header">
      <div class="news__header-search">
        <text-filed
          placeholder="gozle"
          :value="search"
          prependIcon="search-normal.png"
        ></text-filed>
      </div>
    </div>
    <div class="news__content">
      <client-only v-for="item in news" :key="item.id">
        <article-item
          :datas="item"
          @clickOneItem="$router.push(`events/${item.id}`)"
        ></article-item>
      </client-only>
    </div>
  </div>
</template>

<script>
import EventsArticle from '~/components/EventsArticle.vue'

export default {
  components: { EventsArticle },
  head() {
    return {
      meta: [
        {
          hid: 'test',
          name: 'test',
          content: 'asdasd',
        },
      ],
    }
  },
  data() {
    return {
      search: '',
      news: news,
    }
  },
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<style lang="scss" scoped>
.news {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-search {
      width: 438px;
      @media (max-width: 768px) {
        width: 166px;
        .input__body {
          padding: 4px 10px;
        }
      }
      @media (max-width: 368px) {
        width: 150px;
      }
    }
    &-buttons {
      display: flex;
      border: 1px solid transparent;
      .button {
        &:first-child {
          margin-right: 5px;
        }
      }
    }
  }
  &__content {
    margin: 60px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    // grid-template-rows: 1fr 1fr 1fr;
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
