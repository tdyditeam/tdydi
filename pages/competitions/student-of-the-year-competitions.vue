<template>
  <block-pages :description="description" :title="title"></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: 'Ýylyň talyby bäsleşigi',
      description: `<p>2022-nji ýylda Türkmen döwlet ykdysadyýet we dolandyryş institutynyň talyplary Halkara Internet ders bäsleşiklerinde 347 sany I orny, 16 sany II orny, 1 sany III orny, jemi 364 sany orny gazandylar.</p><p>Ýokary okuw mekdepleriniň talyplarynyň arasynda 2022-nji ýylyň maý aýynda geçirilen «<em>Ýylyň talyby</em>» bäsleşiginde Menejment fakultetiniň Dünýä ykdysadyýeti hünäriniň 4-nji ýyl talyby <em>G.Saparowa 3-nji orna</em> mynasyp boldy.</p>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>

<style lang="scss" scoped></style>
