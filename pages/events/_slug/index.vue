<template>
  <div class="news __container">
    <!-- <bread-crumbs></bread-crumbs> -->
    <the-banner-outside></the-banner-outside>
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
          @click="$router.push(localeLocation(`/events/${item.id}`))"
        ></base-button>
      </div>
    </div>
    <div class="news__content">
      <article-item
        v-for="(event, index) in $route.params.slug == 1 ? news : arcticles"
        :key="event.id"
        :event="event"
        @clickOneItem="
          $router.push(
            localeLocation(`/events/${Number($route.params.slug)}/${index}`)
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
      news: [
        {
          id: 1,
          img: 'news1.jpg',
          title: 'Halkara ylmy-amaly maslahat',
          createdAt: '26.01.23',
          viewCount: 324,
          description:
            'Türkmen döwlet ykdysadyýet we dolandyryş instituty ýokary okuw mekdepleriň professor-mugallymlaryny «Döwletiň durnukly...',
        },
        {
          id: 2,
          img: 'news2.jpg',
          title: 'AÇYK HALKARA INTERNET OLIMPIADASY',
          createdAt: '23.01.23',
          viewCount: 125,
          description:
            'Türkmen döwlet ykdysadyýet we dolandyryş instituty ýokary okuw mekdepleriň talyplaryny 2023-nji ýylyň 12-nji aprelinde...',
        },
        {
          id: 3,
          img: 'news3.jpg',
          title:
            'Aziýa Ösüş Bankynyň wekilleriniň gatnaşmagynda talyplar bilen...',
          createdAt: '19.01.23',
          viewCount: 345,
          description:
            '2023-nji ýylyň 18-nji ýanwarynda Türkmen döwlet ykdysadyýet we dolandyryş institutynyň uly mejlisler zalynda Aziýa Ösüş Bankynyň...',
        },
        {
          id: 4,
          img: 'news4.jpg',
          title: 'Halkara Bitaraplyk güni mynasybetli “Ykdysadyýet” ugry...',
          createdAt: '01.12.22',
          viewCount: 324,
          description:
            'Halkara Bitaraplyk güni mynasybetli “Ykdysadyýet” ugry boýunça ýokary okuw mekdepleriniň talyplarynyň arasynda online görnüşinde...',
        },
      ],
      arcticles: [
        {
          id: 1,
          img: null,
          title: 'Türkmenistanyň dermanlyk ösümlikleri – dertleriň melhemi.',
          createdAt: null,
          viewCount: 324,
          description:
            '2022-nji ýylyň 18-nji oktýabrynda Türkmen döwlet ykdysadyýet we...',
        },
        {
          id: 2,
          img: null,
          title: 'Saglygy goraýyş ulgamynda halkara hyzmatdaşlyk',
          createdAt: null,
          viewCount: 125,
          description: 'Ýurdumyzda 10.10.2022ý.-11.10.2022ý....',
        },
        {
          id: 3,
          img: null,
          title: 'Daşary ýurt dillerini öwrenmek döwrüň talabydyr',
          createdAt: null,
          viewCount: 345,
          description:
            'Bedew batly ösüşleri özüne hemra edinip, baky bagtyýarlyk ýolundan barha öňe barýan  Garaşsyz, hemişelik Bitarap...',
        },
        {
          id: 4,
          img: null,
          title: 'Halyçylyk - gadymy senet',
          createdAt: null,
          viewCount: 324,
          description:
            'Gözelligiň we kämilligiň ajaýyp nusgasy bolan türkmen halysy özüniň üýtgeşik owadanlygy, nepisligi bilen has ir döwürlerden...',
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
