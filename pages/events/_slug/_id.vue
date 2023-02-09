<template>
  <div class="news-item __container">
    <bread-crumbs v-show="false"></bread-crumbs>
    <div class="news-item__content">
      <div class="news-item__header">
        <div class="news-item__header-title">
          <h2>
            {{
              $route.params?.slug == 1
                ? news[$route.params.id]?.title
                : articles[$route.params.id]?.title
            }}
          </h2>
        </div>
        <div class="news-item__header-date">
          <span>{{
            $route.params?.slug == 1
              ? news[$route.params.id]?.createdAt
              : articles[$route.params.id]?.createdAt
          }}</span>
          <span>
            <img src="@/assets/img/home/article/eye.png" alt="" />
            <p>
              {{
                $route.params?.slug == 1
                  ? news[$route.params.id]?.viewCount
                  : articles[$route.params.id]?.viewCount
              }}
            </p>
          </span>
        </div>
      </div>
      <div class="news-item__picture">
        <departments-swiper
          :datas="
            $route.params?.slug == 1
              ? news[$route.params.id]
              : articles[$route.params.id]
          "
          :items="[
            $route.params?.slug == 1
              ? news[$route.params.id].img
              : articles[$route.params.id].img
              ? articles[$route.params.id].img
              : 'news1.jpg',
          ]"
        ></departments-swiper>
      </div>
      <div class="article-item__people people-swiper-block" v-if="false">
        <div class="people-swiper-block__row">
          <div class="people-swiper-block__left-block">
            <div class="people-swiper-block__image">
              <img src="@/assets/img/home/article/profile_1.png" alt="surat" />
            </div>
            <div class="people-swiper-block__content">
              <div class="people-swiper-block__title">Atayew Atamyrat</div>
              <div class="people-swiper-block__subtitle">
                Elektron isewurliginin ykdysadyyeti
              </div>
            </div>
          </div>
          <div class="people-swiper-block__right-block">
            <div class="people-swiper-block__title">Mugallym:</div>
            <div class="people-swiper-block__subtitle">Amanow Aman</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      articles: [
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
    console.log(this.$route)
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
    font-family: 'Gilroy';
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
</style>
