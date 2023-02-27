<template>
  <block-pages
    :description="description"
    :title="title"
    :img="img"
  ></block-pages>
</template>

<script>
export default {
  data() {
    return {
      img: 'zurnal.png',
      title: 'Ylmy barlag we taslama işleri',
      description: `<p>Türkmen döwlet ykdysadyýet we dolandyryş institutynda häzirki wagtda Türkmenistanyň Ylymlar akademiýasy bilen ylalaşylan 13 sany ylmy temalar boýunça iş alnyp barylýar. Olardan 2021-2023-nji ýyllar aralygynda alnyp barylýan ylmy işleriň sany 11 sany:</p><ul><li><p>«<em>Ykdysady subýektleriň maliýe ýagdaýynyň durnuklylygy we ony berkitmegiň ýollary (Türkmenistanyň dokma senagaty pudagynyň mysalynda)</em>» atly tema Buhgalterçilik hasaba alnyşy we audit kafedrasy;</p></li><li><p>«<em>Daşky gurşawyň statistikasyny kämilleşdirmegiň meseleleri</em>» atly tema Statistika kafedrasy;</p></li><li><p>«<em>Ykdysadyýet çygryndaky hukuk bozulmalar hakynda Türkmenistanyň kanunçylygynyň esaslary</em>» atly tema Ykdysadyýet we hukuk kafedrasy;</p></li><li><p>«<em>Türkmenistanyň maliýe ulgamyny kämilleşdirmegiň esasy ugurlary</em>» atly tema Maliýe kafedrasy;</p></li><li><p>«<em>Karz edaralaryň işiniň netijeliligini ýokarlandyrmakda innowasiýalaryň orny</em>» atly tema Bank işi kafedrasy;</p></li><li><p>«<em>Türkmenistanyň arhitektura ýadygärlikleri we binagärlik sungaty</em>» atly tema Jemgyýeti öwreniş ylymlary kafedrasy;</p></li><li><p>«<em>Ykdysadyýetiň hususy bölegini ösdürmegiň klaster modeli we dolandyryşyň hil görkezijilerini kämilleşdirmek</em>» atly tema Menejment kafedrasy;</p></li><li><p>«<em>Daşary ýurt dillerini öwretmegiň sanly tehnologiýalara esaslanýan okuw-usulyýet binýadyny döwrebaplaşdyrmak</em>» atly tema Daşary ýurt dilleri kafedrasy;</p></li><li><p>«<em>Energiýa çeşmelerini peýdalanmaklygyň marketing derňewleri</em>» atly tema Marketing kafedrasy;</p></li><li><p>«<em>Ykdysadyýetiň sanlylaşdyrylýan şertlerinde zähmet bazarynda hünärlere bolan isleg</em>» atly tema Zähmetiň ykdysadyýeti;</p></li><li><p>«<em>Sanly ykdysadyýet şertlerinde ykdysadyýetiň pudaklaryny optimal dolandyrmakda ykdysady-matematiki we ekonometriki modelleri ulanmagyň aýratynlyklary</em>» atly tema bolsa Ýokary matematika we informatika kafedrasy tarapyndan ýerine ýetirilýär.</p></li></ul><p>2018-2023-nji ýyllar aralygynda 2 sany ylmy temalar boýunça iş alnyp barylýar. 2018-2023-nji ýyllar aralygynda ýerine ýetirilýän ylmy temalaryň biri «<em>Türkmenistanyň halkara ykdysady hyzmatdaşlygynyň ileri tutulýan ugurlarynyň ösüş aýratynlyklary</em>» bolup, Dünýä ykdysadyýeti kafedrasynda ýerine ýetirilýär. «<em>Türkmenistanyň durmuş-ykdysady ösüşini seljermegiň we çaklamagyň ylmy-usuly esaslar</em>» atly beýleki tema bolsa, Maliýe we ykdysadyýet ministrligi, Türkmen döwlet maliýe instituty we Türkmenistanyň Ylymlar akademiýasy bilen bilelikde alnyp barylýar. Bu tema boýunça Ykdysady nazaryýet kafedrasy işleýär. Alnyp barylýan ylmy temalar boýunça teklipler taýýarlanylýar we ýurdumyzyň ykdysady toplumlaryna hödürlenilýär.</p>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
