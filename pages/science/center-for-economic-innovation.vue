<template>
  <block-pages :description="description" :title="title"></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: 'Ykdysady innowasiýalar merkezi',
      description: `<p>Türkmen döwlet ykdysadyýet we dolandyryş institutynyň Ykdysady innowasiýalar merkezi 2019-njy ýylda institutyň professor-mugallymlaryny, aspirantlaryny, magistrantlaryny we talyplaryny innowasion ykdysadyýeti kemala getirmek we ösdürmek babatynda düýpli ylmy-barlaglara çekmek, kafedralarda bilim berlişini we ýerine ýetirilýän ylmy işleri utgaşdyrmak maksady bilen döredildi.</p><p>Ykdysady innowasiýalar merkezi institutyň düzüm birligi bolup, institutyň kafedralaryna Türkmenistanda ylmyň ileri tutulýan ugurlary boýunça ylmy-barlaglaryň maksatnamalaryny işläp düzmäge ýardam etmek, milli innowasion ykdysadyýeti kemala getirmek we ösdürmek, gazna biržalarynyň işini kämilleşdirmek, ylmyň, önümçiligiň, maýa goýujylaryň arasyndaky gatnaşyklary işjeňleşdirmek babatynda teklipleri taýýarlamak, ýurdumyzda innowasion we sanly ykdysadyýeti ösdürmekde durmuşa geçirilýän özgertmeleri ylmy taýdan seljermek, sanly ykdysadyýete geçiş döwründe innowasion telekeçiligiň işewürlik we guramaçylyk taslamalaryny taýýarlamaga gatnaşmak, ýurdumyzyň innowasion ösüşiniň netijeliligi babatynda seljermeleri geçirmek, ylmy-barlag işleriň ýerine ýetirilişiniň derejesine seljerme bermek, ýokary tehnologiýalara esaslanýan innowasion başlangyçlary önümçilige ornaşdyrmak boýunça taslamalary taýýarlamak, sanly gurşawa geçmegiň ykdysady görkezijilerini kesgitlemegiň we hasaplamagyň usulýetini işläp taýýarlamak ýaly işleri alnyp barylýar.</p><p>Ykdysady innowasiýalar merkeziniň maksatlaryndan we wezipelerinden ugur alnyp, dünýäniň öňdebaryjy ýurtlarynyň bilim-ylym, sanly ykdysadyýet, ýokary tehnologiýalar babatyndaky tejribeleri, ylmy gazananlary we innowasiýalary, daşary ýurtly ýokary okuw mekdepleriň ylmy merkezleri bilen bilelikdäki ylmy-barlaglary alyp barmagyň ýollary we usulyýeti öwrenilýär. Işewürligiň wekilleriniň gatnaşmagynda sanly gurşawa işewürligiň we sarp edijileriň işjeň utgaşmagyny üpjün edýän sanly platformalaryň mümkinçiliklerini giňeltmek we täze sanly hyzmatlaryny guramak boýunça taslamalar we teklipler taýýarlanylýar. Okuw-intellektual işleri, taýýarlanylýan taslamalar, sanly platformalar, olaryň mümkinçiliklerini giňeltmek we ş.m. ugurlary boýunça teleýaýlymlarda yzygiderli çykyş edilýär, şeýle-de ýurdumyzyň we daşary ýurtly ýokary okuw mekdepleri hem-de ylmy merkezleri bilen teleköpri arkaly onlaýn maslahatlar gurnalýar. Sanly platformalaryň mümkinçiliklerini giňeltmek we täze sanly hyzmatlary ornaşdyrmak boýunça taslamalary we çözgütleri taýýarlamak babatynda dünýä tejribesi öwrenilýär. Ýurdumyzyň sanly ykdysadyýeti ösdürmegiň ileri tutulýan ugurlary boýunça pudaklaýyn dolandyryş edaralary üçin teklipler taýýarlanylýar. Institutyň talyplarynyň arasynda intellektual bäsleşikleri yzygiderli gurnaýar. Ýurdumyzda geçirilýän ylmy we taslama bäsleşiklerine, sergilere hödürlenilýän işleri, taslamalary taýýarlamaga talyplary we ýaş mugallymlary çekmek, olara maslahat bermek işleri alnyp barylýar.</p>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
