<template>
  <block-pages
    :description="$t('international-projects')"
    :title="$t('header.menu.internationalCooperation.internationalProjects')"
    :img="img"
  ></block-pages>
</template>

<script>
export default {
  data() {
    return {
      img: 'international-projects.png',
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
