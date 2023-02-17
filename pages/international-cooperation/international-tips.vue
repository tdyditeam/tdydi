<template>
  <block-pages :description="description" :title="title"></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: 'Halkara maslahatlar',
      description: `<p>2022-nji ýylda Türkmen döwlet ykdysadyýet we dolandyryş institutynyň professor-mugallymlary, aspirantlary, magistrantlary we talyplary indiki halkara ylmy maslahatlara gatnaşdylar we olaryň tezisleri çap edildi:</p><ul><li><p>2022-nji ýylyň 22-nji aprelinde geçirilen «<em>Türkmen bedewi we dünýäniň seýisçilik sungaty</em>» atly XIV halkara ylmy maslahatynyň nutuklarynyň gysgaça beýanynda 9 sany çykyşlaryň tezisleri;</p></li><li><p>2022-nji ýylyň 12-13-nji iýunynda geçirilen «<em>Berkarar döwletiň täzä eýýamynyň galkynyşy döwründe ylym, tehnika we innowasion tehnologiýalar</em>» atly halkara ylmy maslahatynyň nutuklarynyň gysgaça beýanynda 37 sany çykyşlaryň tezisleri. Halkara ylmy maslahatyň «<em>Innowasion ykdysadyýet</em>» atly V bölüminiň işi Türkmen döwlet ykdysadyýet we dolandyryş institutynda geçirildi;</p></li><li><p>2022-nji ýylyň 12-13-nji iýunynda geçirilen «<em>Saglygy goraýyş, bilim we sport Berkarar döwletiň täze eýýamynyň Galkynyşy döwründe</em>» atly halkara ylmy maslahatynyň nutuklarynyň ýygyndysynda 30 sany çykyşlaryň tezisleri.</p></li></ul><p><br></p><p>2023-nji ýylyň 18-nji ýanwarynda Türkmen döwlet ykdysadyýet we dolandyryş institutynyň uly mejlisler zalynda Aziýa Ösüş Bankynyň «<em>Makroykdysady syýasaty işläp düzmek we durmuşa geçirmek babatynda institusional mümkinçiliklerini pugtalandyrmak</em>» atly tehniki taslamasynyň çäklerinde Aziýa Ösüş Bankynyň wekilleriniň gatnaşmagynda talyplar bilen maliýe ugry boýunça okuw sapagy geçirildi.</p><p><br></p><p>18 января 2023 года в актовом зале Туркменского государственного института экономики и управления с участием представителей Азиатского банка развития в рамках технического проекта «<em>Укрепление институционального потенциала для разработки и реализации макроэкономической политики</em>» было проведено учебное занятие по направлению финансы.</p><p><br></p><p>On January 18, 2023, a training session on finance was held in the assembly hall of the Turkmen State Institute of Economics and Management with the participation of representatives of the Asian Development Bank as a part of the technical project “<em>Strengthening of institutional capacity for the development and implementation of macroeconomic policy</em>”.</p>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
