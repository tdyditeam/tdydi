<template>
  <div v-if="datas" @click="$emit('clickOneItem')" class="article-item">
    <div class="article-item__body-wrapper">
      <div class="article-item__body">
        <div v-if="datas.img" class="article-item__image">
          <img
            :src="require(`@/assets/img/news/${datas && datas.img}`)"
            alt=""
          />
        </div>
        <div class="article-item__content content-swiper-block">
          <div class="content-swiper-block__data">
            <span>{{ datas && datas.date }}</span>
            <span>
              <img src="@/assets/img/home/article/eye.png" alt="" />
              <p>{{ datas && datas.count }}</p>
            </span>
          </div>
          <div class="content-swiper-block__title">
            {{ datas && datas.title }}
          </div>
          <div
            v-html="datas && datas.description"
            class="content-swiper-block__text"
          ></div>
        </div>
      </div>
      <div class="article-item__people people-swiper-block">
        <div class="people-swiper-block__row">
          <div class="people-swiper-block__left-block">
            <div v-if="datas.student_img" class="people-swiper-block__image">
              <img
                :src="require(`@/assets/img/news/${datas.student_img}`)"
                alt=""
              />
            </div>
            <div
              v-if="datas && datas.student_name"
              class="people-swiper-block__content"
            >
              <div class="people-swiper-block__title">
                {{ datas && datas.student_name }}
              </div>
              <div class="people-swiper-block__subtitle">
                {{ datas && datas.student__profession }}
              </div>
            </div>
          </div>
          <div
            v-if="datas && datas.teacher"
            class="people-swiper-block__right-block"
          >
            <div class="people-swiper-block__title">Mugallym:</div>
            <div class="people-swiper-block__subtitle">
              {{ datas && datas.teacher }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      default: () => {},
      type: Object,
    },
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
    @media (max-width: 479px) {
      padding: 5px;
    }
  }

  &__image {
    img {
      width: 100%;
      height: 100%;
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
    @media (max-width: 479px) {
      font-size: 14px;
      line-height: 120%;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.04em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
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
