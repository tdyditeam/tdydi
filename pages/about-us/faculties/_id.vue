<template>
  <block-pages
    :description="description[$route.params.id]"
    :title="title[$route.params.id]"
    :img="img[$route.params.id]"
  ></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: {
        economical: 'YKDYSADYÝET',
        finanse: 'MALIÝE',
        managament: 'Menejment',
        marketing: 'MARKETING',
        'proffesional-development': 'HÜNÄRI ÝOKARLANDYRYŞ',
      },
      description: {
        economical: `&nbsp&nbsp&nbsp&nbsp Ykdysadyýet fakultetinde uçurymlary taýýarlaýan dört sany kafedra, ýagny  Buhgalterçilik hasaba alnyşy  we audit, Statistika, Ykdysadyýet we hukuk, Ykdysady nazaryýet  kafedralary hereket edýär. <br> &nbsp&nbsp&nbsp&nbsp
				Fakultetiň kafedralarynda  Buhgalterçilik hasaba alnyşy we audit, Ykdysadyýet, Ykdysadyýet we hukuk, Maliýe hukugy, Ykdysady howpsuzlyk we Statistika bakalawr taýýarlygyň ugurlary boýunça bakalawrlar,    Ykdysadyýet,  Milli ykdysadyýet taýýarlygyň ugurlary boýunça magistrler taýýarlanylýar.   <br> &nbsp&nbsp&nbsp&nbsp
				Fakultetde hünärmenleri taýýarlamak işi ussatlyk derejesi ýokary bolan mugallymlar tarapyndan amala aşyrylýar. Institutymyzyň dünýäniň iň öňdebaryjy enjamlary bilen üpjün edilen täze binasy umumy we amaly okuw sapaklaryny ýokary derejede geçirmäge doly mümkinçilik berýär.  <br> &nbsp&nbsp&nbsp&nbsp
				Buhgalterçilik hasaba alnyşy we audit  kafedrasy boýunça Buhgalter hasaby ýöriteleşdirilen okuw otagy hereket edýär, onda talyplar kärhanalarda buhgalterçilik hasaba alnyşy we audit işini alyp barmagy öwrenýärler. 
				Fakultetiň uçurymlary ýurdumyzyň ykdysadyýetiniň dürli pudaklarynda zähmet çekýärler.`,
        finanse: `&nbsp&nbsp&nbsp&nbsp Maliýe fakultetinde 4 sany kafedra hereket edýär:  Olar  Sanly ykdysadyýet, Bank işi, Maliýe, Jemgyýeti öwreniş ylymary . <br> &nbsp&nbsp&nbsp&nbsp
				Maliýe fakultetinde talyplar hünärmen, bakalawr we magistr maksatnamalary boýunça bilim alýarlar.  <br> &nbsp&nbsp&nbsp&nbsp
				Maliýe fakulteti Döwlet bilim standartlaryna laýyklykda ýokary derejeli hünärmenleri taýýarlaýar. Fakultetiň uçurymlary Türkmenistanyň Merkezi bankynda, ýurdumyzyň karz edaralarynda, gazna biržalarynda, Türkmenistanyň maliýe we ykdysadyýet ministrliginde, salgyt gulluklarynda, döwlet we hususy edara-kärhanalaryň maliýe we ykdysadyýet bölümlerinde zähmet çekýärler. <br> &nbsp&nbsp&nbsp&nbsp
				Fakultete degişli karedralarda dürli ugurlar boýunça ylmy-barlag işleri alnyp barylýar. Olara bank amallaryna, maliýe seljermelerine, ätiýaçlandyryşa we salgyda, ykdysady nazaryýet meselelerine,  döwrebap kompýuter tehnologiýalarynyň kömegi bilen ykdysadyýetiň  we bank ulgamynyň dürli meselelerine degişli temalar girýär. Fakultete degişli ähli  hünärler we taýýarlygyň ugurlary boýunça bilim alýan talyplara okuw dersleriniň mazmunyny  ýokary derejede we döwrüň talabyna laýyklykda ýetirmek maksady bilen tejribeli professor- mugallymlar öz zehin –başarnyklaryny gaýgyrmaýarlar. Okuw meýilnamalary, okuw maksatnamalary yzygiderli kämilleşdirilýär, sapaklarda okatmagyň iň täze usullary giňden ulanylýar. <br> &nbsp&nbsp&nbsp&nbsp
				Fakultetde Bank işi, Birža işi we Sanly ykdysadyýet  ýöriteleşdirilen okuw otaglary bar. Bu okuw otaglarynda talyplara umumy sapaklarda alan nazary bilimlerini tejribe bilen başlanyşdyryp öwretmäge ähli zerur bolan mümkinçilikler döredilendir. Mundan başga-da talyplar döwlet  we halkara derejesinde geçirilýän olimpiadalara,  dürli bäsleşiklere we  sport ýaryşlaryna işjeň  gatnaşyp, baýrakly orunlara mynasyp bolýarlar. Fakultetiň talyplary ylmy-amaly maslahatlara ylmy nutuklary bilen gatnaşýarlar, ylmy tezisleri neşir  edýärler, gündelik metbugat sahypalarynda,  tele-radio ýaýlymlarda yzygiderli çykyş edýärler.
`,
        managament: `&nbsp&nbsp&nbsp&nbsp Menejment fakultetinde dört sany kafedra hereket edip, olardan  
	  Menejment, Maglumat ulgamlary we  Dünýä ykdysadyýeti kafedralary uçurymlary
	   taýýarlaýan, Daşary ýurt dilleri  kafedrasy bolsa fakultetara kafedralar  
	   bolup durýar. Fakultetiň uçurymlary taýýarlaýan kafedralarynda Menejment, 
	   Kärhananyň ykdysadyýeti we dolandyrylyşy, Döwlet we ýerli dolandyryş, Dünýä 
	   ykdysadyýeti, Işewürlik we telekeçilik, Maglumat ulgamlary we tehnologiýalary 
	   (ykdysadyýetde we dolandyryşda), Ykdysady kibernetika, Kompýuter ulgamynyň programma 
	   üpjünçiligi (ykdysadyýetde we dolandyryşda) taýýarlygyň ugurlary boýunça bakalawrlar,  
	   Dünýä ykdysadyýeti we Menejment taýýarlyk ugurlary boýunça bolsa magistrler taýýarlanylýar. <br>&nbsp&nbsp&nbsp&nbsp
	   Fakultetde hünärmenleri taýýarlamak işi ussatlyk derejesi ýokary bolan mugallymlar 
	   tarapyndan amala aşyrylýar. Institutymyzyň dünýäniň iň öňdebaryjy enjamlary bilen üpjün 
	   edilen täze binasy umumy we amaly okuw sapaklaryny ýokary derejede geçirmäge doly mümkinçilik berýär.`,
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
        economical: 'image.png',
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
