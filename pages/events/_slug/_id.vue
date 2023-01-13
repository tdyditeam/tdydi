<template>
  <div class="news-item __container">
    <bread-crumbs></bread-crumbs>
    <div class="news-item__content">
      <div class="news-item__header">
        <div class="news-item__header-title">
          <h2>
            Transforming Education Summit: UNESCO rallies coalitions for change
          </h2>
        </div>
        <div class="news-item__header-date">
          <span>03.10.2022</span>
          <span>
            <img src="@/assets/img/home/article/eye.png" alt="" />
            <p>122</p>
          </span>
        </div>
      </div>
      <div class="news-item__picture">
        <departments-swiper></departments-swiper>
      </div>
      <div class="news-item__text">
        <p>
          Lorem ipsum dolor sit amet consectetur. Bibendum facilisis amet
          praesent tortor molestie tortor vestibulum facilisis enim. Vitae eget
          ac nibh sollicitudin nam dictumst mauris mauris etiam. Et in eget
          risus amet. Tristique pellentesque fermentum nisl congue risus nibh
          turpis. Dui tortor rutrum tempus integer nibh risus pellentesque
          ultrices. Suscipit lacus porta sed nisl integer. Duis vel et orci
          ultrices felis suspendisse id. Tempus tristique facilisi ornare in at
          nunc a malesuada convallis. Volutpat faucibus in maecenas nunc turpis
          sed augue. Et tortor cursus sit sit feugiat ridiculus luctus sed elit.
          Consectetur quam cras non proin natoque aliquet adipiscing. Id
          accumsan cum volutpat est. Eget a habitant egestas augue. Pellentesque
          sit sagittis et dignissim at. Quis viverra vitae aliquam risus velit
          felis. Sagittis turpis at auctor malesuada. Sagittis urna neque amet
          montesfelis. Sagittis turpis at auctor malesuada. Sagittis urna neque
          amet Lorem ipsum dolor sit amet consectetur. Bibendum facilisis amet
          praesent tortor molestie tortor vestibulum facilisis enim. Vitae eget
          ac nibh sollicitudin nam dictumst mauris mauris etiam. Et in eget
          risus amet. Tristique pellentesque fermentum nisl congue risus nibh
          turpis. Dui tortor rutrum tempus integer nibh risus pellentesque
          ultrices. Suscipit lacus porta sed nisl integer. Duis vel et orci
          ultrices felis suspendisse id. Tempus tristique facilisi ornare in at
          nunc a malesuada convallis. Volutpat faucibus in maecenas nunc turpis
          sed augue. Et tortor cursus sit sit feugiat ridiculus luctus sed elit.
          Consectetur quam cras non proin natoque aliquet adipiscing. Id
          accumsan cum volutpat est. Eget a habitant egestas augue. Pellentesque
          sit sagittis et dignissim at. Quis viverra vitae aliquam risus velit
          felis. Sagittis turpis at auctor malesuada. Sagittis urna neque amet
          montesfelis. Sagittis turpis at auctor malesuada. Sagittis urna neque
          amet Lorem ipsum dolor sit amet consectetur. Bibendum facilisis amet
          praesent tortor molestie tortor vestibulum facilisis enim. Vitae eget
          ac nibh sollicitudin nam dictumst mauris mauris etiam. Et in eget
          risus amet. Tristique pellentesque fermentum nisl congue risus nibh
          turpis. Dui tortor rutrum tempus integer nibh risus pellentesque
          ultrices. Suscipit lacus porta sed nisl integer. Duis vel et orci
          ultrices felis suspendisse id. Tempus tristique facilisi ornare in at
          nunc a malesuada convallis. Volutpat faucibus in maecenas nunc turpis
          sed augue. Et tortor cursus sit sit feugiat ridiculus luctus sed elit.
        </p>
      </div>
      <div class="article-item__people people-swiper-block">
        <div class="people-swiper-block__row">
          <div class="people-swiper-block__left-block">
            <div class="people-swiper-block__image">
              <img src="@/assets/img/home/article/profile_1.png" alt="surat" />
            </div>
            <div class="people-swiper-block__content">
              <div class="people-swiper-block__title">
                Atayew Atamyratgulmuhammet
              </div>
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
export default {}
</script>

<style lang="scss" scoped>
.news-item {
  &__content {
  }
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    &-title {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
      color: var(--text);
      flex: 1 1 auto;
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
    margin-bottom: 20px;
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
</style>
