<template>
  <block-pages :description="description" :title="title"></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: 'Ylmy gurnaklar',
      description: `<p>Türkmen döwlet ykdysadyýet we dolandyryş institutynda talyplaryň ylmy gurnagy hereket edýär. Ylmy gurnak bu talyplaryň jemgyýetçilik bileleşigi bolup, ol professor-mugallymlaryň ýolbaşçylygynda talyplaryň ylmy-barlag işlerini amala aşyrýan guramasydyr. Ylmy gurnak kafedralaryň ýanynda açylyp, onuň esasy maksady ýokary okuw mekdebinde okadylýan dersleri içgin öwrenmäge, talyplaryň özbaşdak ylmy-barlag işlerini geçirmäge, olaryň seljeriş başarnyklaryny ösdürmäge ýardam etmekden ybaratdyr. Ylmy gurnagyň işiniň esasy görnüşi ýygnaklaryň üsti bilen amala aşyrylýar. Olarda talyplaryň çykyşlary we ylmy-barlag işleriniň netijeleri diňlenilýär. Binýatly we amaly ylmy derňewlere gatnaşmak amal edilýär. Türkmen döwlet ykdysadyýet we dolandyryş institutynda:</p><ul><li><p><em>Buhgalter hasaby, ykdysady analiz we audit;</em></p></li><li><p><em>Statistika;</em></p></li><li><p><em>Ykdysady nazaryýet;</em></p></li><li><p><em>Ykdysadyýet we hukuk;</em></p></li><li><p><em>Maliýe;</em></p></li><li><p><em>Bank işi;</em></p></li><li><p><em>Türkmenistanyň taryhy;</em></p></li><li><p><em>Sanly ykdysadyýet;</em></p></li><li><p><em>Menejment;</em></p></li><li><p><em>Hünäri boýunça iňlis, hytaý, ýapon dilleri;</em></p></li><li><p><em>Hünäri boýunça rus, türkmen, nemes dilleri;</em></p></li><li><p><em>Dünýä ykdysadyýeti;</em></p></li><li><p><em>Maglumat ulgamlary;</em></p></li><li><p><em>Ykdysady kibernetika;</em></p></li><li><p><em>Marketing;</em></p></li><li><p><em>Zähmetiň ykdysadyýeti;</em></p></li><li><p><em>Matematika </em>ýaly ylmy gurnaklar hereket edýär. Bu ylmy gurnaklarda düzgünnama laýyklykda öňde goýlan wezipeler yzygiderli ýerine ýetirilýär.</p></li></ul>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
