<template>
  <block-pages
    :description="description[$route.params.id]"
    :title="title[$route.params.id]"
  ></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: {
        0: 'Türkmen döwlet ykdysadyýet we dolandyryş institutynyň  Ykdysatçy okuw merkezi',
        '«Audit» okuw merkezi': `Türkmen döwlet ykdysadyýet we dolandyryş institutynyň   Audit okuw merkezi`,
        '«Hazyna» sport kluby': `Türkmen döwlet ykdysadyýet we dolandyryş institutynyň  Hazyna sport kluby`,
      },
      description: {
        0: `&nbsp&nbsp&nbsp&nbsp Okuw merkeziniň işiniň esasy görnüşi işgärleriň hünär derejesini kämilleşdirmekden we olary gaýtadan taýýarlamakdan ybarat bolup durýar. <br> &nbsp&nbsp&nbsp&nbsp
		Ykdysatçy okuw merkezi aşakdaky taýýarlyk ugurlary boýunça gysga möhletli okuwlary yzygiderli geçirýär:<br> &nbsp&nbsp&nbsp&nbsp
		<ol>
			<li>Buhgalter (10 aý). </li>
			<li>Bank işiniň operatory (10 aý). </li>
			<li>Işewürlik we telekeçilik (10 aý). </li>
			<li>Işewürlik-informatika (10 aý).</li>
			<li>Iňlis dili (3 aý). </li>
			<li>Rus dili (3 aý).</li>
			<li>Nemes dili (3 aý).</li>
			<li>Hytaý dili (3 aý).</li>
			<li>Buhgalterçilik hasaby alnyşy (3 aý).</li>
			<li>Programmiremegiň tehnologiýalary (3 aý).</li>
			<li>Web programmirlemegiň tehnologiýalary (3 aý).</li>
			<li>Kompýuter sowatlylygy (2 aý).</li>
			</ol>
		`,
        '«Audit» okuw merkezi': `&nbsp&nbsp&nbsp&nbsp Türkmen döwlet ykdysadyýet we dolandyryş institutynyň Audit
		okuw merkezi 2000-nji ýylda ozalky Türkmen halk hojalyk institutynda döredildi.
		 Audit okuw merkezi hojalyk hasaplaşygy esasynda hereket edýär. Okuw merkeziniň işiniň
		 esasy görnüşi işgärleriň hünär derejesini kämilleşdirmekden we olary gaýtadan taýýarlamakdan
		 ybarat bolup durýar. <br> &nbsp&nbsp&nbsp&nbsp
Audit okuw merkezinde Audit we Rieltorçylyk işi boýunça hünär derejesini ýokarlandyrmak
 üçin gysga möhletli okuwlar yzygiderli guralýar we geçirilýär. Audit boýunça gysga möhletli
  okuwda Türkmenistanyň kanunçylygy, Buhgalterçilik hasaba alnyşy, Audit, Salgytlar we salgyt
  salmak we Hojalyk işleriniň analizi derslerini, «Rieltorçylyk işi» boýunça gysga möhletli okuwda
   bolsa Türkmenistanyň salgyt kanunçylygy, Rieltorçylyk işi, Gozgalmaýan emlägiň ykdysadyýeti,
   Menejment we marketing, Raýat hukugy, Raýat iş ýörediş, Ýaşaýyş jaý hukugy we Ýer hukugy derslerini
   özleşdirip, diňleýjiler özleriniň hünär derejesini ýokarlandyrýarlar. <br> &nbsp&nbsp&nbsp&nbsp
   Audit okuw merkezi tarapyndan gurnalýan okuw kurslaryny döwrebap geçirmek üçin ähli şertler döredilen. Audit okuw merkezinde okuw sapaklary institutymyzyň ýokary derejeli, tejribeli professor-mugallymlary tarapyndan geçirilip, okuw-usuly maglumat üpjünçiligi yzygiderli kämilleşdirilýär.
`,

        '«Hazyna» sport kluby': `&nbsp&nbsp&nbsp&nbsp Türkmen döwlet ykdysadyýet we dolandyryş
		 institutynyň Hazyna sport kluby 2013-nji ýylyň iýul aýynda döredildi. Sport kluby
		 hojalyk hasaplaşygy esasynda hereket edýär. Hazyna sport klubunyň esasy maksady sportuň
		  dürli ugurlarynyň, ýagny woleýbolyň, futbolyň, basketbolyň, kiçi futbolyň, suwda ýüzmegiň,
		   boksuň, göreşiň ösmeginiň köpçülikleýin häsiýete eýe bolmagyny gazanmakdan, ilaty bedenterbiýe
		   we sport bilen meşgullanmaga giňişleýin çekmekden, sagdyn durmuşy wagyz etmekden ybaratdyr.`,
      },
      img: {
        '«Ykdysatçy» okuw merkezi': 'image.png',
        '«Audit» okuw merkezi': '3.png',
        '«Hazyna» sport kluby': '2.png',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
