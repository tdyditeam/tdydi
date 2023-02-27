<template>
  <block-pages
    :description="$t('science.scientific-institutions.description')"
    :title="$t('science.scientific-institutions.title')"
  ></block-pages>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
