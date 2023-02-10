<template>
  <div @click="$emit('clickOneItem')" class="article-item">
    <div class="article-item__body-wrapper">
      <div class="article-item__body">
        <div class="article-item__image">
          <img
            v-if="event.img"
            :src="require(`@/assets/img/home/events/news/${event.img}`)"
            alt=""
          />
        </div>
        <div class="article-item__content content-swiper-block">
          <div class="content-swiper-block__data">
            <span v-show="event.createdAt">{{ event.createdAt }}</span>
            <span>
              <img src="@/assets/img/home/article/eye.png" alt="" />
              <p>{{ event.viewCount }}</p>
            </span>
          </div>
          <div class="content-swiper-block__title">
            {{ event.title }}
          </div>
          <div class="content-swiper-block__text">
            {{ event.description }}
          </div>
        </div>
      </div>
      <div class="article-item__people people-swiper-block" v-if="true">
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
  props: {
    event: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.article-item {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  transition: all 1s;
  height: 465px !important;
  &:hover {
    box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  &__body {
    padding: 30px 15px;
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
    border-radius: 10px;
    @media (max-width: 479px) {
      padding: 5px;
    }
  }

  &__image {
    height: 200px;
    border-radius: 10px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center center;
    }
  }
}
.content-swiper-block {
  &__data {
    font-style: italic;
    font-weight: 900;
    font-size: 12px;
    line-height: 116.6%;
    color: #868686;
    display: flex;
    align-items: center;
    margin: 8px 0;
    span:nth-child(1) {
      flex: 1 1 auto;
    }
    span:nth-child(2) {
      display: flex;
      align-items: center;
      img {
        width: 18px;
        height: 12px;
        object-fit: cover;
        object-position: center;
      }
      p {
        margin-left: 5px;
      }
    }
  }

  &__title {
    font-weight: 500;
    font-size: 18px;
    line-height: 111.1%;
    letter-spacing: 0.04em;
    padding-bottom: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 479px) {
      font-size: 14px;
      line-height: 120%;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 111.1%;
    letter-spacing: 0.04em;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 479px) {
      font-size: 12px;
    }
  }
}
.people-swiper-block {
  &__row {
    display: flex;
    align-items: center;
    gap: 30px;
    @media (max-width: 479px) {
      gap: 5px;
    }
  }

  &__left-block {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__image {
    flex: 0 0 40px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    @media (max-width: 479px) {
      flex: 0 0 30px;
    }
  }

  &__content {
    max-width: 204px;
    @media (max-width: 479px) {
      max-width: 180px;
    }
  }

  &__title {
    font-weight: 600;
    font-size: 14px;
    line-height: 116.6%;
    color: #333333;
    margin-bottom: 6px;
    @media (max-width: 479px) {
      font-size: 12px;
      margin-bottom: 2px;
    }
  }

  &__subtitle {
    font-weight: 400;
    font-size: 12px;
    line-height: 116.6%;
    color: #20ba72;
    @media (max-width: 479px) {
      font-size: 10px;
    }
  }
}
</style>
