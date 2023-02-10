<template>
  <block-pages :description="description" :title="title"></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: 'Ylmy maslahatlar',
      description: `<p>2022-nji ýylda Türkmen döwlet ykdysadyýet we dolandyryş institutynyň professor-mugallymlary, aspirantlary, magistrantlary we talyplary indiki ylmy maslahatlara gatnaşdylar we olaryň makalalary, tezisleri çap edildi:</p><ul><li><p>2022-nji ýylyň 17-nji maýynda geçirilen «<em>Türkmenistanyň konstitusiýasyna 30 ýyl: Täze taryhy eýýäm we kanunçykaryjylyk işiniň häzirki zaman tejribesi</em>» atly ylmy-amaly maslahatynda 28 sany çykyş;</p></li><li><p>2022-nji ýylyň 2-nji iýunynda geçen «<em>Türkmen keşdeçilik sungaty – milli mirasymyz</em>» atly ylmy-amaly maslahatynda 9 sany çykyş;</p></li><li><p>2022-nji ýylyň 17-nji maýynda geçirilen «<em>Durnukly ykdysady ösüşi gazanmakda sanly tehnologiýalaryň orny</em>» atly ylmy-amaly maslahatynda 45 sany çykyş.</p></li></ul>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
