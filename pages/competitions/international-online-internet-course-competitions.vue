<template>
  <block-pages :description="description" :title="title"></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: 'Halkara onlaýn internet ders bäsleşikleri',
      description: `<p>2022-nji ýylda Türkmen döwlet ykdysadyýet we dolandyryş institutynyň talyplary Halkara Internet ders bäsleşiklerinde 347 sany I orny, 16 sany II orny, 1 sany III orny, jemi 364 sany orny gazandylar.</p><p><br></p><p>2022-nji ýylda Türkmen döwlet ykdysadyýet we dolandyryş institutynyň talyplary:</p><ul><li><p>Sankt-Peterburg şäheriniň Maglumat tehnologiýalar, mehanika we optika Milli barlag uniwersiteti tarapyndan 2022-nji ýylyň 24-nji aprelinde geçirilen Demirgazyk ýurtlaryň uniwersitetleriniň 8-nji matematika bäsleşigine gatnaşyp, 3 sany III orna;</p></li><li><p>Halkara ynsanperwer ylymlary we ösüş uniwersiteti tarapyndan 2022-nji ýylyň 27-nji aprelinde geçirilen Açyk Halkara matematika olimpiadasyna gatnaşyp, 3 sany III orna;</p></li><li><p>Ýagşygeldi Kakaýew adyndaky Halkara nebit we gaz uniwersiteti tarapyndan 2022-nji ýylyň 4-nji maýynda geçirilen Himiýa dersi boýunça halkara internet olimpiadasyna gatnaşyp, 1 sany III orna;</p></li><li><p>Döwletmämmet Azady adyndaky Türkmen milli dünýä dilleri instituty tarapyndan 2022-nji ýylyň 4-nji maýynda geçirilen Iňlis dili dersi boýunça I halkara internet olimpiadasyna gatnaşyp, 1 sany II orna mynasyp boldular.</p></li></ul>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>

<style lang="scss" scoped></style>
