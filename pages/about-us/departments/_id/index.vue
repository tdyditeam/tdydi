<template>
  <section style="width: 100%">
    <title-block-pages
      isButton
      appendIcon
      title=""
      text="Hormatly mugallymlar"
      iconUrl="home/icon-go.svg"
      :title="title[$route.params.id]"
      @clicked="$router.push(localeLocation('/about-us/departments/1/1'))"
    ></title-block-pages>
    <departments-swiper
      :items="img[$route.params.id]"
      :description="description[$route.params.id]"
    ></departments-swiper>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: {
        accounting: 'Buhgalterçilik hasaba alnyşy we audit',
        statistic: 'Statistika',
        'economical-and-law': 'Ykdysadyýet we hukuk',
        economic: 'Ykdysady nazaryýet',
        banking: 'Bank işi',
        finance: 'Maliýe',
        'digital-ecocnomy': 'Sanly ykdysadyýet',
        'social-studies': 'Jemgyýeti öwreniş ylymlary',
        'world-economy': 'Dünýä ykdysadyýeti',
        menejment: 'Menejment',
        'information-systems': 'Maglumat ulgamlary',
        'foreign-languages': 'Daşary ýurt dilleri',
        marketing: 'Marketing',
        'economics-of-labor': 'Zähmetiň ykdysadyýeti',
        'advanced-mathematics-and-computer-science':
          'Ýokary matematika we informatika',
        'physical-education': 'Bedenterbiýe',
      },
      description: {
        accounting: `<p>Buhgalterçilik hasaba alnyşy we audit kafedrasy uçurymlary taýýarlaýan kafedra bolup, ýurdumyzyň ykdysadyýetiniň pudaklary üçin Buhgalterçilik hasaba alnyşy we audit hünäri hem-de taýýarlyk ugry boýunça bakalawrlary taýýarlaýar.</p><p>Kafedrada Buhgalterçilik hasaba alnyşynyň nazaryýeti, Buhgalterçilik maliýe hasaba alnyşy, Buhgalterçilik dolandyrys hasaba alnyşy, Ykdysady analiziň nazaryýeti, Maliýe hasabatlylygynyň halkara standartlary, Maliýe hasabatlylygy, Audit ýaly dersler boýunça okuw sapaklary okadylýar. Kafedrada ýokary derejeli, tejribeli professor-mugallymlar zähmet çekýar.</p><p>Kafedrada Buhgalter hasaby ýöriteleşdirilen okuw otagy hereket edýär. Kafedranyň mugallymlary bu okuw otagynda hünäri boýunça okuw sapaklaryny okadýarlar. Bu bolsa okuw sapaklaryny kämil derejede özleşdirmäge mümkinçilik berýär.</p><p>Kafedranyň professor-mugallymlary okuw, terbiýeçilik işleri bilen bir hatarda ylmy-barlag işlerini hem alyp barýarlar. Kafedrada Türkmenistanyň Ylymlar akademiýasy tarapyndan hasaba alnan ylmy tema boýunça iş alnyp barylýar. Ylmy işiň netijeleri boýunça teklipler taýýarlanylýar, ylmy žurnallarda makalalar çap edilýär we okuw işlerinde peýdalanylýar.</p><p>Kärine ussat hünärmenleri taýýarlamagy kämilleşdirmek, okuw işiniň tejribelige ugrukmasyny güýçlendirmek, şeýle hem bilelikde ylmy barlaglary geçirmek we olaryň netijelerini önümçilige ornaşdyrmak maksady bilen Türkmenistanyň maliýe we ykdysadyýet minstrliginde kafedranyň şahamçasy döredildi.</p><p>Kafedranyň mugallymlary ýurdumyzda we daşary ýurtlarda neşir edilýän ylmy žurnallarda, gazetlerde makalalary çap edýärler, şeýle hem köpçülikleýin habar beriş serişdelerinde çykyş edýärler.</p><p>Kafedrada talyplaryň ylmy gurnaklary hereket edýär.</p>`,
        statistic: `<p>Kafedrada Statistika ugry boýunça hünärmenler, bakalawrlar taýýarlanyp, onda Statistikanyň nazaryýeti, Ykdysady statistika , Oba hojalygynyň statistikasy, Durmuş statistikasy, Söwda statistikasy, Ilat statistikasy we demografiýanyň esaslary, Daşky gurşawyň statistikasy, Statistiki maglumatlary modelirlemek we çaklamak, Senagat statistikasywe beýleki dersler öwredilýär.</p><p>Okuw sapaklary interaktiw, multimedia tehnologiýalar bilen enjamlaşdyrylan okuw otaglarynda geçirilýär.</p><p>Kafedrada Türkmenistanyň Ylymlar akademiýasy tarapyndan ylalaşylan tema boýunça ylmy iş alnyp barylýar.</p><p>Ylmy-barlag işiniň netijeleri kafedranyň okuw işlerinde peýdalanylýar we ylmy žurnallarda, okuw kitaplarynda we gollanmalarda, şeýle hem gündelik neşirlerde çap edilýär.</p><p>Kafedrada Statistika ugry boýunça ylmy gurnak hereket edýär.</p><p>Kafedrada aýratyn zehinli talyplary döwlet we halkara derejesindäki ders bäsleşiklerine taýýarlamak maksady bilen Statistika dersinden goşmaça okuwlar geçirilýär.</p><p>Kafedrada ýokary derejeli hünärmenler ylymlaryň kandidatlary, uly mugallymlar zähmet çekýärler.</p><p>Kafedranyň Türkmenistanyň Statistika baradaky döwlet komitetiniň binasynda döredilen Statistika önümçilik şahamçasy hereket edýär.</p>`,
        economic: `<p>Ykdysadyýet we hukuk kafedrasy Ykdysadyýet we hukuk, Maliýe hukugy, Ykdysady howpsuzlyk taýýarlygyň ugurlary boýunça bakalawrlary,hünärmenleri taýýarlaýar.</p><p>Kafedrada Döwletiň we hukugyň nazaryýeti, Türkmenistanyň kanunçylygynyň esaslary, Maliýe hukugy, Ykdysady howpsuzlyk, Ykdysady hukugy, Raýat hukugy, Zähmet hukugy, Administratiw hukugy, Arbitraž iş ýörediş hukugy, Jenaýat hukugy, Intellektual eýeçiligi goramak, Halkara ykdysady hukugy, Ulag hukugy, Durmuş üpjünçilik hukugy, Halkara maliýe hukugy, Kärhanada ykdysady howpsuzlyk ulgamyny guramak, Ykdysdyýetde hukuk bozulmalary, Maýa goýum işleriniň hukuk kadalaşdyrylyşy, Býujet hukugy, Bank hukugy dersleri boýunça okuw sapaklary okadylýar. Ähli derslerden okadylýan umumy we amaly sapaklar interaktiw usulda geçirilýär. Talyplaryň okuw taýýarlygyny ýokary derejeli professor-mugallymlar alyp barýarlar.</p><p>Kafedrada Türkmenistanyň Ylymlar akademiýasy tarapyndan hasaba alnan ylmy iş ýerine ýetirilýär.</p><p>Kafedranyň ýaş mugallymlary we talyplary döwlet derejesinde geçirilýän ýaş alymlaryň ylmy bäsleşigiine, şeýle-de talyplar döwlet we halkara derejelerinde geçirilýän ders bäsleşiklerine, ylmy-amaly maslahatlara işjeň gatnaşýarlar.</p><p>Kafedranyň mugallymlary, talyplary ýurdumyzda we daşary ýurtlarda neşir edilýän ylmy žurnallarda, gazetlerde makalalary çap edýärler, şeýle hem köpçülikleýin habar beriş serişdelerinde çykyş edýärler.</p><p>Kafedrada Ykdysadyýet we hukuk ugry boýunça ylmy gurnaklaryň işi alnyp barylýar.</p>`,
        marketing: `&nbsp&nbsp&nbsp&nbsp Marketing fakultetinde jemi 4 sany kafedra hereket edýär. Olar Marketing, Zähmetiň ykdysadyýeti, Ýokary matematika we informatika, Bedenterbiýe kafedralarydyr.
	  Marketing we Zähmetiň ykdysadyýeti kafedralary gutardyş kafedralarydyr. <br>
	  &nbsp&nbsp&nbsp&nbsp Fakultetde Zähmetiň ykdysadyýeti we bazary, Ilatyň durmuş üpjünçiligini guramak, Marketing,
		Harytşynaslyk, Hili dolandyrmak,  Jemgyýetçilik iýmitini guramak, Täjirçilik (Söwda işi),
		Önümiň tehnologiýasy we jemgyýetçilik iýmitini guramak, Söwdada we logistikada sanly tehnologiýalar
		ýaly hünärler boýunça hümärmenler we bakalawrlar taýýarlanylýar. <br>
			&nbsp&nbsp&nbsp&nbsp Okadylýan okuw dersleriniň mazmunyny talyplara ýokary derejede we döwrüň talabyna laýyklykda ýetirmek maksady bilen, hemme okuw dersleriniň okuw meýilnamalary, maksatnamalary yzygiderli täzelenip, okatmagyň täze usullary giňden ulanylýar.
			Fakulteti tamamlan uçurymlar ýurdumyzyň azyk senagaty kärhanalarynda, söwda ulgamynda, Türkmenistanyň Zähmet we ilaty durmuş taýdan goramak ministirliginiň dürli edara-kärhanalarynda üstünlikli zähmet çekýärler.
			Mundan başga-da talyplar bilen terbiýeçilik ähmiýetli wagyz-nesihat işleri il sylagly ýaşulularyň we halypa mugallymlaryň gatnaşmagynda yzygiderli geçirilip durulýar. Bu wagyz-nesihat işleri  ýaşlaryň watançylygyny, milliligini has-da ösdürnek, olaryň ahlak taýdan arassalygyny we giň dünýägaraýyşly bolmaklaryny  gazanmak maksadyndan ugur alýar.
`,
        'proffesional-development': `&nbsp&nbsp&nbsp&nbsp Hünäri ýokarlandyryş fakulteti Türkmen döwlet ykdysadyýet we dolandyryş institutynyň düzüm birligi bolup, ol 2008-nji ýyldan bäri hereket edip gelýär.   <br>&nbsp&nbsp&nbsp&nbsp
			Hünäri ýokarlandyryş fakultetinde Buhgalterçilik hasaba alnyşy, Maliýe hasabatlylygynyň halkara standartlary, Sanly ykdysadyýet we beýleki hünär işi hem-de anyk önümçilik meseleleri boýunça
			gysga möhletli hünäri ýokarlandyryş okuwlary geçirilýär. Hünäri ýokarlandyryş fakultetinde belli
			bir tertibe görä okadylýan sapaklaryň ähli okuw maksatnamalary Türkmenistanyň Bilim ministrligi bilen ylalaşylýar hem-de Türkmen döwlet ykdysadyýet we dolandyryş institutynyň rektory tarapyndan tassyklanýar. Bularyň ählisi ýurtda kabul edilen bilim standartlaryny üpjün edýär. <br>&nbsp&nbsp&nbsp&nbsp
			Fakultetde eýeçiligiň görnüşine garamazdan, banklaryň, beýleki maliýe- ykdysady  edaralarynyň, dürli kärhanalaryň we guramalaryň işgärleri öz hünärlerini ýokarlandyrýarlar.	 <br>&nbsp&nbsp&nbsp&nbsp
			Hünäri ýokarlandyryş fakulteti bazar ykdysadyýeti şertlerinde hünärmeniň iş döwründe öz bilimini ýokarlandyrmaga ýardam edýän möhüm ugur bolup durýar.
`,
      },
      img: {
        accounting: ['accounting.png'],
        finanse: '3.png',
        managament: '2.png',
        marketing: '1.png',
        'proffesional-development': 'image.png',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
