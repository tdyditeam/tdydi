<template>
  <block-pages :description="description" :title="title"></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: 'Ders bäsleşikler',
      description: `<p><strong>Türkmen döwlet ykdysadyýet we dolandyryş institutynyň talyplarynyň 2022-nji ýylyň dekabr aýynyň 22-i, 23-i we 24-i günleri geçirilen Türkmenistanyň ýokary okuw mekdepleriniň talyplarynyň okuw dersleri boýunça Döwlet bäsleşiklerinde gazanan netijeleri</strong></p>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>

<style lang="scss" scoped></style>
