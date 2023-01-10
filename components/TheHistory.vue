<template>
  <div class="institute-history">
    <div class="institute-history__row">
      <div class="institute-history__image">
        <img src="@/assets/img/home/TheHistory.png" alt="surat" />
      </div>
      <div class="institute-history__body">
        <div class="institute-history__content">
          <div @click="$router.push('events')" class="institute-history__title">
            Biz barada
          </div>
          <div class="institute-history__text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet
            consectetur. Bibendum facilisis amet praesent tortor molestie tortor
            vestibulum facilisis enim. Vitae eget ac nibh sollicitudin nam
            dictumst mauris mauris etiam. Et in eget risus amet. Tristique
            pellentesque fermentum nisl congue risus nibh turpis. Dui tortor
            rutrum tempus integer nibh risus pellentesque ultrices. Suscipit
            lacus porta sed nisl integer. Duis vel et orci ultrices felis
            suspendisse id. Tempus tristique facilisi ornare in at nunc a
            malesuada convallis. Volutpat faucibus in maecenas nunc turpis sed
            augue. Et tortor cursus sit sit feugiat ridiculus luctus sed elit.
            Consectetur quam cras non proin natoque aliquet adipiscing. Id
            accumsan cum volutpat est. Eget a habitant egestas augue.
            Pellentesque sit sagittis et dignissim at. Quis viverra vitae
            aliquam risus velit felis. Sagittis turpis at auctor malesuada.
            Sagittis urna neque amet montesfelis. Sagittis turpis at auctor
            malesuada. Sagittis urna neque amet
          </div>
        </div>
        <button class="institute-history__button">
          <p>DOLY OKA</p>
          <span class="institute-history__icon">
            <img src="@/assets/img/home/icon-about.svg" alt="icon" />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.institute-history {
  font-family: 'Gilroy';
  padding: 60px 0px 15px 0px;
  &__row {
    display: flex;
    gap: 52px;
    @media (max-width: 992px) {
      gap: 30px;
    }
    @media (max-width: 767px) {
      flex-wrap: wrap;
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
    font-size: 40px;
    line-height: 47px;
    color: #333333;
    margin-bottom: 40px;
    @media (max-width: 767px) {
      display: none;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: justify;
    color: #000000;
    @media (max-width: 767px) {
      font-size: 16px;
    }
    @media (max-width: 479px) {
      font-size: 12px;
    }
  }

  &__button {
    font-family: 'Gilroy';
    font-size: 14px;
    gap: 3px;
    border-radius: 6px;
    background: #16ab65;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 8px 14px;
    transition: all 0.3s;
    &:hover {
      background: #4fb686;
    }
  }
  &__icon {
    margin-top: 6px;
  }
  @media (max-width: 479px) {
    padding: 4px 8px;
    font-size: 12px;
  }
}
</style>
