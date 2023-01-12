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
  }
}
</style>
