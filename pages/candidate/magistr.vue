<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages :description="description" :title="title"></block-pages>
  </section>
</template>

<script>
export default {
  data() {
    return {
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.candidate.magistr'),
          path: '/candidate/magistr',
          exact: true,
        },
      ],
      title: 'Magistr taýýarlyk ugurlary',
      description: `<p><strong><span style="color: rgb(0, 32, 96)">TÜRKMEN DÖWLET YKDYSADYÝET WE DOLANDYRYŞ INSTITUTY<br>2022-nji ýylyň 11-12-nji maýynda sagat 15:00-da orta we hünär okuw mekdepleriniň uçurymlary, okuw merkezleriniň diňleýjileri, harby bölümleriň esgerleri, önümçilikde zähmet çekýän ýaşlar üçin «AÇYK GAPYLAR» gününi geçirýär</span></strong></p>
	  <p><strong><span style="color: rgb(0, 112, 192)">«AÇYK GAPYLAR» </span></strong><span style="color: black">gününde ýaşlar hormatly Prezidentimiziň ýurdumyzyň ylym-bilim ulgamyny ösdürmekde alyp barýan syýasatynyň durmuşa geçirilişi, ýokary bilim ulgamynda gazanylýan üstünlikler, okuwlaryň guralyşy, öwrenilýän hünärler, taýýarlyk ugurlary, döwrebap tehnologiýalar we internet bilen enjamlaşdyrylan täze okuw binalary, ýöriteleşdirilen okuw we lingafon otaglary, aýdym-saz, tans toparlarynyň çykyşlary, sport klubunyň işi, talyplaryň ýaşaýyş şertleri bilen tanşyp bilerler.</span></p><p></p><p><strong><span style="color: black">Salgymyz: Aşgabat ş., 1972-nji (Atatürk) köçäniň 73-nji jaýy,</span></strong></p><p><strong><span style="color: black">telefonlary: 48-62-31, 48-62-33, 48-62-29.</span></strong></p> 
	 <br><p><strong>2022/2023-nji okuw ýyly üçin magistr maksatnamasy boýunça taýýarlygyň aşakdaky ugurlaryna talyplyga kabul edýär:</strong></p><p>1.Ykdysadyýet we dolandyryş (taýýarlygyň ugurlary:&nbsp;<strong>ykdysadyýet; salgyt menejmenti,</strong> <strong>milli ykdysadyýet, dünýä ykdysadyýeti</strong>).</p><p>Okuwlar tölegli esasda amala aşyrylýar.</p><p>Instituta taýýarlygyň&nbsp;<strong>ykdysadyýet&nbsp;</strong>we&nbsp;<strong>salgyt menejmenti</strong>&nbsp;ugurlary boýunça ýokary bilimden pes bolmadyk, taýýarlygyň&nbsp;<strong>milli ykdysadyýet&nbsp;</strong>we<strong>&nbsp;dünýä ykdysadyýeti&nbsp;</strong>ugurlary boýunça ykdysadyýet we dolandyryş çygrynda ýokary bilimden pes bolmadyk binýatda bilimi bolan Türkmenistanyň raýatlary giriş synaglarynyň netijeleri boýunça bäsleşik esasynda kabul edilýär.</p><p><strong>Resmi iş kagyzlary&nbsp;</strong>welaýat merkezlerinde we Aşgabat şäherinde 2022-nji ýylyň 11 – 24-nji iýuly aralygynda kabul edilýär.</p><p><strong>Resmi iş kagyzlarynyň sanawy:&nbsp;</strong></p><p>– bellenilen nusgada rektoryň adyna ýazylan arza;</p><p>– bellenilen nusgadaky sowalnama (anketa);</p><p>– ýokary bilim baradaky resminamanyň we goşundysynyň tassyklanan göçürmeleri ýa-da asyl nusgalary (daşary ýurt döwletinde berlen ýokary bilim hakyndaky resminama onuň Türkmenistanda ykrar edilendigi baradaky şahadatnamasy goşulýar);</p><p>– Türkmenistanyň Saglygy goraýyş we derman senagaty ministrligi tarapyndan bellenilen nusgadaky saglyk kepilnamasy;</p><p>– soňky okan ýerinden (işlän ýerinden, harby bölümden) häsiýetnama;</p><p>– 3x4 sm ölçegdäki sekiz sany fotosurat;</p><p>– işleýänler üçin zähmet depderçesiniň tassyklanan göçürmesi.</p><p>Bulardan başga-da, okuwa girmäge isleg bildirýänler ýokarda görkezilen resminamalar bilen birlikde resminamalary kabul edýän iş toparyna aşakdakylary görkezýär we nusgalaryny tabşyrýarlar:</p><p>– şahsy pasportyny;</p><p>– harby şahadatnamasyny ýa-da ýazylyş şahadatnamasyny we ýaşaýan ýeri boýunça harby wekillikden güwähatyny.</p><p>Institutyň resminamalary kabul edýän iş topary zerur bolan ýagdaýynda dalaşgärden goşmaça maglumatlary sorap biler.</p><p>Nädogry berlen maglumatlar we galp resmi iş kagyzlary üçin dalaşgär şahsy jogapkärçilik çekýär.</p><p><strong>Giriş synaglary we okuwa kabul edilmek&nbsp;</strong>institutda (Aşgabat şäheri) 2022-nji ýylyň awgust aýynyň 15-16-syna geçirilýär.</p><p><strong>Giriş synaglary&nbsp;</strong>ýokary bilimiň okuw maksatnamasy esasynda şu aşakdaky dersler boýunça döwlet dilinde geçirilýär:</p><p>taýýarlygyň ugurlary:&nbsp;<strong>ykdysadyýet, milli ykdysadyýet&nbsp;</strong>— ykdysady nazaryýet, Türkmenistanyň ykdysadyýeti;</p><p>taýýarlygyň ugry:&nbsp;<strong>salgyt menejmenti&nbsp;</strong>— ykdysady nazaryýet, salgyt menejmenti;</p><p>&nbsp;taýýarlygyň ugry:&nbsp;<strong>dünýä ykdysadyýeti&nbsp;</strong>— ykdysady nazaryýet, dünýä ykdysadyýeti.</p><p>Bellenilen wagtda giriş synagyna esassyz sebäplere görä gelmediklere goşmaça mümkinçilik berilmeýär.</p><p>Giriş synaglarynyň netijeleri boýunça magistr maksatnamasyna&nbsp;<strong>talyplyga kabul edilmek üçin artykmaç hukukdan&nbsp;</strong>saýlan taýýarlygynyň ugry boýunça 2 ýyldan az bolmadyk iş döwri bolanlar peýdalanýarlar.</p>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>

<style lang="scss" scoped></style>
