<template>
  <div class="news-item __container">
    <bread-crumbs v-show="false"></bread-crumbs>
    <the-banner-outside></the-banner-outside>
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
    return {}
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
</style>
