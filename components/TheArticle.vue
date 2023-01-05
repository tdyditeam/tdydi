<template>
  <div class="article">
    <the-title-block :title="'Wakalar'" :items="items"> </the-title-block>
    <the-article-swiper></the-article-swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Täzelikler',
          dark: false,
        },
        {
          id: 2,
          name: 'Makalalar',
          dark: false,
        },
        {
          id: 3,
          name: 'Hemmesi',
          dark: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.article {
  padding: 15px 0px;
}
</style>
