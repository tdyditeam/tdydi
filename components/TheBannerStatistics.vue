<template>
  <div class="banner__statistics">
    <div class="banner__statistics-item">
      <div class="banner__statistics-icon">
        <img src="@/assets/icons/faculti.png" alt="" />
      </div>
      <div class="banner__statistics-text">
        <span>Fakultetler</span>
        <span>4</span>
      </div>
    </div>
    <div class="banner__statistics-item">
      <div class="banner__statistics-icon">
        <img src="@/assets/icons/hunaler.png" alt="" />
      </div>
      <div class="banner__statistics-text">
        <span>Hünärler</span>
        <span>52</span>
      </div>
    </div>
    <div class="banner__statistics-item">
      <div class="banner__statistics-icon">
        <img src="@/assets/icons/teacher.png" alt="" />
      </div>
      <div class="banner__statistics-text">
        <span>Mugallymlar</span>
        <span>277</span>
      </div>
    </div>
    <div class="banner__statistics-item">
      <div class="banner__statistics-icon">
        <img src="@/assets/icons/student.png" alt="" />
      </div>
      <div class="banner__statistics-text">
        <span>Talyplar</span>
        <span>3320</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  &__statistics {
    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);
    display: flex;
    z-index: 1;
    &-item {
      &:not(:last-child) {
        margin-right: 20px;
      }
      display: flex;
      padding: 15px;
      background-color: var(--white);
      box-shadow: 6px 7px 20px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
    }
    &-icon {
      width: 50px;
      height: 50px;
      margin-right: 7px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-text {
      display: flex;
      flex-direction: column;
      width: 147px;
      span:nth-child(1) {
        font-family: 'Gilroy';
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: var(--primary);
      }
      span:nth-child(2) {
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: var(---text);
        margin-top: 2px;
      }
    }
  }
}
</style>
