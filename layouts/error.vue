<template>
  <div class="error">
    <div class="error__wrapper">
      <h1 v-if="error.statusCode === 404">Gözleýän sahypaňyz tapylmady !</h1>
      <h1 v-else>Internet näsazlygy !</h1>
      <div class="error__image">
        <img src="@/assets/img/error.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
  layout: 'empty',
  props: {
    error: {
      type: Object,
    },
  },
}
</script>

<style scoped lang="scss">
.error {
  width: 100vw;
  height: 100vh;
  &__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h1 {
      font-family: 'Roboto Flex';
      font-style: normal;
      font-weight: 500;
      font-size: 25px;
      line-height: 174.19%;
      text-align: center;
      text-transform: uppercase;
      color: #333333;
    }
  }
  &__image {
    width: 732px;
    height: 410px;
    img {
      width: 100%;
      height: 100%;
      object-position: center center;
    }
  }
}
</style>
