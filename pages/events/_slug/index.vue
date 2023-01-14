<template>
  <div class="news __container">
    <bread-crumbs></bread-crumbs>
    <div class="news__header">
      <div class="news__header-search">
        <text-filed
          placeholder="gozle"
          :value="search"
          prependIcon="search-normal.png"
        ></text-filed>
      </div>
      <div class="news__header-buttons">
        <base-button
          v-for="item in items"
          :key="item.id"
          :text="item.name"
          :isActive="item.id === Number($route.params.slug)"
        ></base-button>
      </div>
    </div>
    <div class="news__content">
      <article-item
        v-for="article in 14"
        :key="article"
        @clickOneItem="
          $router.push(
            localeLocation(`/events/${Number($route.params.slug)}/${article}`)
          )
        "
      ></article-item>
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
      items: [
        {
          id: 1,
          name: 'Täzelikler',
        },
        {
          id: 2,
          name: 'Makalalar',
        },
      ],
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
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
