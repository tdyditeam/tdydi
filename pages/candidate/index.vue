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
      title: 'Bakalawr taýýarlyk ugurlary',
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.candidate.name'),
          path: '/candidate',
          exact: true,
        },
      ],
      description: `<p><strong><span style="color: rgb(0, 32, 96)">TÜRKMEN DÖWLET YKDYSADYÝET WE DOLANDYRYŞ INSTITUTY<br>2022-nji ýylyň 11-12-nji maýynda sagat 15:00-da orta we hünär okuw mekdepleriniň uçurymlary, okuw merkezleriniň diňleýjileri, harby bölümleriň esgerleri, önümçilikde zähmet çekýän ýaşlar üçin «AÇYK GAPYLAR» gününi geçirýär</span></strong></p>
	  <p><strong><span style="color: rgb(0, 112, 192)">«AÇYK GAPYLAR» </span></strong><span style="color: black">gününde ýaşlar hormatly Prezidentimiziň ýurdumyzyň ylym-bilim ulgamyny ösdürmekde alyp barýan syýasatynyň durmuşa geçirilişi, ýokary bilim ulgamynda gazanylýan üstünlikler, okuwlaryň guralyşy, öwrenilýän hünärler, taýýarlyk ugurlary, döwrebap tehnologiýalar we internet bilen enjamlaşdyrylan täze okuw binalary, ýöriteleşdirilen okuw we lingafon otaglary, aýdym-saz, tans toparlarynyň çykyşlary, sport klubunyň işi, talyplaryň ýaşaýyş şertleri bilen tanşyp bilerler.</span></p><p></p><p><strong><span style="color: black">Salgymyz: Aşgabat ş., 1972-nji (Atatürk) köçäniň 73-nji jaýy,</span></strong></p><p><strong><span style="color: black">telefonlary: 48-62-31, 48-62-33, 48-62-29.</span></strong></p> 
	 <br>
	  <p></p><p><strong>2022/2023-nji okuw ýyly üçin bakalawr maksatnamasy boýunça taýýarlygyň aşakdaky ugurlaryna talyplyga kabul edýär:</strong></p><p>1. Ykdysadyýet we dolandyryş (taýýarlygyň ugurlary:&nbsp;<strong>ykdysadyýet; ykdysadyýet we hukuk; maliýe hukugy; buhgalterçilik hasaba alnyşy we audit; ykdysady howpsuzlyk; statistika; sanly ykdysadyýet; maliýe menejmenti; gymmatly kagyzlaryň bazary; baha kesmek işi; bank işi we pul dolanyşygy; dünýä maliýe bazary; elektron işewürliginiň ykdysadyýeti; elektron täjirçiligi; dünýä ykdysadyýeti; menejment; işewürlik we telekeçilik; kärhananyň ykdysadyýeti we dolandyrylyşy; döwlet we ýerli dolandyryş; ykdysady kibernetika; täjirçilik (söwda işi); zähmetiň ykdysadyýeti we bazary; ilatyň durmuş üpjünçiligini guramak; marketing; harytşynaslyk; sanly ykdysadyýetde maliýe bazarlary we maliýe howpsuzlygy; söwdada we logistikada sanly tehnologiýalar</strong>).</p><p>2. Informatika we hasaplaýyş tehnikasy (taýýarlygyň ugurlary:&nbsp;<strong>maglumat ulgamlary we&nbsp;tehnologiýalary (ykdysadyýetde we dolandyryşda); kompýuter ulgamynyň programma üpjünçiligi)</strong>.</p><p>3. Tehniki ulgamlarda dolandyryş (taýýarlygyň ugry:&nbsp;<strong>hili dolandyrmak)</strong>.</p><p>4. Senagat ekologiýasy we biotehnologiýalar (taýýarlygyň ugry:&nbsp;<strong>önümiň tehnologiýasy we jemgyýetçilik iýmitini guramak</strong>).</p><p>Institutda okuwlar tölegli esasda alnyp barlar.</p><p>Instituta Türkmenistanyň umumy orta bilimden pes bolmadyk binýatda bilimi bolan, ýaşy 35-den geçmedik raýatlary giriş synaglarynyň netijeleri boýunça bäsleşik esasynda kabul edilýär.</p><p><strong>Resmi iş kagyzlary&nbsp;</strong>welaýat merkezlerinde we Aşgabat şäherinde 2022-nji ýylyň 11-24-nji iýuly aralygynda kabul edilýär.</p><p><strong>Resmi iş kagyzlarynyň sanawy:</strong></p><p>- bellenilen nusgada rektoryň adyna ýazylan arza;</p><p>- bellenilen nusgadaky sowalnama (anketa);</p><p>- bilimi baradaky resminama (asyl nusgasy);</p><p>- Türkmenistanyň Saglygy goraýyş we derman senagaty ministrligi tarapyndan bellenilen nusgadaky saglyk kepilnamasy;</p><p>- soňky okan ýerinden (işlän ýerinden, harby bölümden) häsiýetnama;</p><p>- 3x4 sm ölçegdäki sekiz sany fotosurat;</p><p>- işleýänler üçin zähmet depderçesiniň tassyklanan göçürmesi;</p><p>- okuw dersleri boýunça mekdep okuwçylarynyň döwlet bäsleşiginiň ýeňijileri, halkara bäsleşiklerine gatnaşan Türkmenistanyň ýygyndy toparynyň agzalary şol ýagdaýlary tassyklaýan degişli resminamanyň asyl nusgasyny tabşyrýarlar.</p><br/><p>Bulardan başga-da, okuwa girmäge isleg bildirýänler ýokarda görkezilen resminamalar bilen birlikde resminamalary kabul edýän iş toparyna aşakdakylary görkezýärler we nusgalaryny tabşyrýarlar:</p><p>- şahsy pasportyny;</p><p>- harby şahadatnamasyny ýa-da ýazylyş şahadatnamasyny we ýaşaýan ýeri boýunça harby wekillikden güwähatyny.</p><p>Dalaşgär bäsleşiksiz we (ýa-da) okuwa kabul edilmek üçin artykmaç hukukdan peýdalanýandygyny tassyklaýan beýleki resminamalary görkezip biler.</p><p>Institutyň resminamalary kabul edýän iş topary zerur bolan ýagdaýynda dalaşgärlerden goşmaça maglumatlary sorap biler.</p><p>Nädogry berlen maglumatlar we galp resmi iş kagyzlary üçin dalaşgär şahsy jogapkärçilik çekýär.</p><p><strong>Giriş synaglary we okuwa kabul edilmek&nbsp;</strong>institutda (Aşgabat şäheri) we welaýat merkezlerinde aşakdaky möhletlerde geçirilýär:</p><p>Lebap welaýaty — iýul aýynyň 27-si, 28-i we 29-y günleri;</p><p>Mary welaýaty — iýul aýynyň 31-i – awgust aýynyň 1-i, 2-si we 3-i günleri;</p><p>Daşoguz welaýaty — awgust aýynyň 5-i, 6-sy we 7-si günleri;</p><p>Balkan welaýaty— awgust aýynyň 9-y, 10-y we 11-i günleri;</p><p>Aşgabat şäheri — awgust aýynyň 13-14-i, 15-i we 16-sy günleri;</p><p>Ahal welaýaty — awgust aýynyň 18-19-y, 20-i we 21-i günleri.</p><p><strong>Giriş synaglary&nbsp;</strong>aşakdaky okuw dersleri boýunça geçirilýär:</p><p>taýýarlygyň ugurlary:&nbsp;<strong>maglumat ulgamlary we&nbsp;tehnologiýalary (ykdysadyýetde we dolandyryşda); kompýuter ulgamynyň programma üpjünçiligi –&nbsp;</strong>matematika, fizika, Türkmenistanyň taryhy;</p><p>&nbsp; taýýarlygyň beýleki ugurlary&nbsp;<strong>–&nbsp;</strong>matematika, Türkmenistanyň taryhy; geografiýa;</p><p>Okuw dersleri boýunça giriş synaglary Türkmenistanyň orta mekdepleriniň okuw maksatnamalarynyň esasynda geçirilýär.</p><p>Okuw dersleri boýunça giriş synaglary döwlet dilinde dilden geçirilýär.</p><p>Giriş synaglarynyň tertibinde bellenilen wagtda synaglara esassyz sebäplere görä gelip bilmedikler ýa-da okuw dersleriniň biri boýunça synaglardan geçip bilmedikler soňky synaglara goýberilmeýär.</p><p>Giriş synaglaryndan üstünlikli geçen ýagdaýynda,&nbsp;<strong>bäsleşiksiz we</strong> <strong>talyplyga kabul edilmek üçin artykmaç hukukdan&nbsp;</strong>«Bilim hakynda» Türkmenistanyň Kanunynyň rejelenen görnüşinde kesgitlenen düzgünlere laýyk gelýän dalaşgärler peýdalanýarlar.</p>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>

<style lang="scss" scoped></style>
