<template>
  <block-pages
    :description="description"
    :title="title"
    img="rektorat.png"
  ></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: this.$t('header.menu.aboutUs.rektorat'),
      description: this.$t('rectorat.description'),
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
