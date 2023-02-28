<template>
  <div class="announce">
    <div class="announce__image">
      <img src="@/assets/img/about-us/tdy.webp" alt="" />
    </div>
    <div class="announce__text">
      <div class="announce__wrapper">
        <div class="announce__title">
          <h2>{{ $t('candidate.annonce.title') }}</h2>
        </div>
        <div class="announce__title">
          <p>
            {{ $t('candidate.annonce.text') }}
          </p>
        </div>
        <div class="announce__description">
          <p>
            {{ $t('candidate.annonce.description') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.announce {
  margin: 20px 0;
  &__image {
    width: 100%;
    height: 400px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  &__text {
    margin-top: 20px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 10px;
  }
  &__wrapper {
    border-radius: 10px;
    padding: 15px;
    background: #f5f5f5;
  }
  &__title {
    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 120%;
      letter-spacing: 0.04em;
      color: #20ba72;
      margin-bottom: 10px;
    }
    p {
      font-weight: 600;
      font-size: 16px;
      line-height: 120%;
      letter-spacing: 0.04em;
      color: #333333;
      margin-bottom: 10px;
    }
  }
  &__description {
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
      text-align: justify;
      letter-spacing: 0.04em;
      color: #333333;
    }
  }
}
</style>
