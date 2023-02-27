<template>
  <block-pages
    :description="$t('science.description')"
    :title="$t('science.title')"
    :img="img"
  ></block-pages>
</template>

<script>
export default {
  data() {
    return {
      img: '1.png',
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
