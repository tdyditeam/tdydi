<template>
  <block-pages :description="description" :title="title"></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: 'Biz barada',
      description: `
	  Berkarar döwletiň täze eýýamynyň Galkynyşy döwründe hormatly
          Prezidentimiz Serdar Berdimuhamedowyň başda durmagynda ylmyň we
          tehnikanyň gazananlaryny ykdysadyýet bilen berk utgaşdyrmak,
          jemgyýetiň bar bolan ähli mümkinçiliklerini doly güýje girizmek we
          şonuň esasynda Türkmenistany innowasion döwlete öwürmek, häzirki zaman
          ýokary tehnologik senagaty kemala getirmek, bäsdeşlige ukyply taýýar
          önümleri öndürmek döwletimiziň baş strategik ugry bolup durýar. Şu
          maksady durmuşa geçirmekde ýokary derejeli ykdysatçy hünärmenlere uly
          orun degişli bolup, olar Türkmen döwlet ykdysadyýet we dolandyryş
          institutynda taýýarlanylýar. Institut 1980-nji ýylyň 31-nji ýanwarynda
          Türkmen halk hojalyk instituty ady bilen Türkmen döwlet
          uniwersitetiniň binýadynda döredildi.Ykdysadyýetde bazar
          gatnaşyklaryny ösdürmäge uly goşant goşjak ýokary derejeli
          hünärmenleri häzirki zaman talaplaryna laýyklykda taýýarlamagyň we
          olaryň hünärini ýokarlandyrmagyň bitewi ulgamyny döretmek şeýle hem
          ýurdumyzyň dünýä ykdysady bileleşigine işjeň goşulyşmagyny üpjün etmek
          maksady bilen Türkmenistanyň Prezidenti 2008-nji ýylyň 14-nji
          aprelinde Türkmen halk hojalyk institutynyň adyny üýtgedip, ony
          Türkmen döwlet ykdysadyýet we dolandyryş instituty diýip atlandyrmak
          baradaky Karara gol çekdi. 2011-nji ýylyň 28-nji sentýabrynda bolsa
          Gahryman Arkadagymyzyň hut özi gelip, dünýä ülňülerine laýyk gelýän,
          iň kämil enjamlar bilen enjamlaşdyrylan ajaýyp ykdysady şäherçesini
          açyp berdi. Täze binanyň okuw otaglary dünýä talaplaryna laýyk
          sapaklary geçirmäge niýetlenilip, olar interaktiw tagtalar,
          kompýuterler bilen enjamlaşdyrylandyr. Institutda jemi 24 sany
          kompýuter okuw otagy, 8 sany lingafon kabinet bar. 120, 84, 60 we 40
          adamlyk okuw otaglarynyň hemmesinde interaktiw tagtalar oturdylyp,
          olarda distansion (daş aralykdan) sapaklar hem gurnalýar.
          Mugallymlara, talyplara optiki süýümli, ýokary tizlikli internet
          ulgamyndan peýdalanmaga doly mümkinçilikler döredilendir. Institutdaky
          kompýuterler tor arkaly birleşdirilip, elektron resminama dolanyşygy
          ýola goýuldy. Bu bolsa içerki we daşarky resminama dolanyşygyny özünde
          jemleýär. Şonuň ýaly-da elektron kitaphana ulgamy döredilip, ol
          mugallymlaryň we talyplaryň maglumat üpjünçiligini kanagatlandyrmakda,
          wagtlaryny tygşytlamakda amatly şertler döredýär. Türkmen döwlet
          ykdysadyýet we dolandyryş institutynyň binalar toplumynda talyplar
          üçin niýetlenen 2 sany ýaşaýyş jaýy bolup, onda ähli amatlyklar
          döredilendir. Türkmen döwlet ykdysadyýet we dolandyryş institutynda
          häzirki wagtda hünärmenleri taýýarlamak Ykdysadyýet, Maliýe, Menejment
          we Marketing fakultetlerinde alnyp barylýar, şeýle-de Hünäri
          ýokarlandyryş fakulteti bolup, onda ministrlikleriň, pudak
          edaralarynyň, bank ulgamynyň we dürli kärhanalaryň hünärmenleri
          goşmaça taýýarlyk okuwyny geçýärler. Institutda Buhgalterçilik hasaba
          alnyşy we audit, Statistika, Ykdysadyýet we hukuk, Ykdysady nazaryýet,
          Maliýe, Bank işi, Sanly ykdysadyýet, Menejment, Maglumat ulgamlary,
          Dünýä ykdysadyýeti, Marketing, Zähmetiň ykdysadyýeti ýaly gutardyş
          kafedralary hereket edýär. Şonuň ýaly-da Jemgyýeti öwreniş ylymlary,
          Daşary ýurt dilleri, Ýokary matematika we informatika, Bedenterbiýe
          ýaly fakultetara kafedralar hereket edýär. Okuw binalarynda
          kompýuterler, proýektorlar bilen enjamlaşdyrylan okuw otaglary,
          internet ulgamyna birikdirilen kompýuter otaglary hereket edýär. Şeýle
          hem okuw binalarynda birnäçe ýöriteleşdirilen okuw otaglary bar.
          Institutda sport zaly, sport meýdançalary talyplara beden terbiýesini
          bermekde hyzmat edýär. Institutymyzyň talyp türgenleri ýokary okuw
          mekdepleriniň talyplarynyň arasynda, halkara ýaryşlarynda üstünlikli
          çykyş edip, baýrakly orunlara mynasyp bolýarlar. Institutda hereket
          edýän Türkmenistanyň Magtymguly adyndaky ýaşlar guramasynyň baýragynyň
          eýesi «Hazyna» aýdym-saz we tans topary baýramçylyk çärelerinde,
          döwlet konsertlerinde, tele-radio ýaýlymlarda yzygiderli çykyş edip,
          halkyň söýgüsine mynasyp bolýarlar.`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
