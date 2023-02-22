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
      title: 'Halkara taslamalar',
      img: 'international-projects.png',
      description: `<p><strong><em>E rasmus+ Maksatnamasy</em></strong> boýunça hereket edýän taslama:</p><p><strong>Taslamanyň ady:</strong> «<em>Geçiş ykdysadyýetli döwletlerde önümçilik telekeçiligini dolandyrmak boýunça magistrlik maksatnamasyny döwrebaplaşdyrmak</em>»</p><p><strong>Taslamanyň maksady:</strong> Merkezi Aziýa döwletleriniň ýokary bilim ulgamynyň döwrebaplaşdyrylmagy üçin täze usulyýet serişdeleri ulanmak. Ýewropanyň Bolon ulgamy esasynda mugallymlaryň hünär derejesini ýokarlandyrmak we magistrlik maksatnamalarynyň netijeli dolandyrylmagyna ýardam bermek.</p><p><strong>Taslamanyň hereket edýän möhleti:</strong> 2020 – 2023 ý.ý.</p><p><strong>Taslamanyň esasy utgaşdyryjysy:</strong> Ispaniýanyň Santýago de Kompostela uniwersiteti</p><p><strong>Türkmenistan boýunça utgaşdyryjy:</strong> Türkmenistanyň Ylymlar akademiýasy</p><p><strong>Taslama gatnaşyjylar:</strong> Türkmenistanyň Ylymlar akademiýasy, Türkmen döwlet ykdysadyýet we dolandyryş instituty, Türkmen döwlet maliýe instituty, Türkmenistanyň tehnologiýalar merkezi.</p><p><strong>Türkmen döwlet ykdysadyýet we dolandyryş instituty boýunça utgaşdyryjy:</strong></p><p>Menejment kafedrasynyň müdiri Şallyýew Ç.M.</p><p>On-line görnüşinde sapaklar okadylanda Ispaniýanyň Santýago de Kompostela, Sloweniýäniň Lýublýana we Italiýanyň Napoli uniwersitetlerinde synagdan geçen ýokary hilli okuw materiallary ulanylar. Halkara magistrlik maksatnamalaryna seljerme berlip, zerurlyklar we başarnyklar kesgitlener.</p><p>Bilimiň sanlylaşdyrylýan şertlerinde hyzmatdaş ýokary okuw mekdepleriň arasynda halkara gatnaşyklar ulgamyny giňeltmek, täze usuly we usulyýet çeşmelerinden giňden peýdalanmak, mugallymlaryň hünär taýýarlygyny gowulandyrmak boýunça işler meýilnamalaşdyrylýar.</p>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
