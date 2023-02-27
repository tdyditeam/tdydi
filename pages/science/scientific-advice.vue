<template>
  <block-pages
    :description="$t('science.scientific-advice.description')"
    :title="$t('science.scientific-advice.title')"
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
