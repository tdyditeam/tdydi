<template>
  <block-pages :description="description" :title="title"></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title:
        'Türkmen döwlet ykdysadyýet we dolandyryş institutynda bilim berilýän hünärler',
      description: `<ul><li><p>Buhgalterçilik hasaba alnyşy we audit</p></li><li><p>Statistika</p></li><li><p>Ykdysadyýet we hukuk</p></li><li><p>Maliýe hukugy</p></li><li><p>Ykdysady howsuzlyk</p></li><li><p>Ykdysadyýet we hojalyk hukugy</p></li><li><p>Dünýä maliýe bazary</p></li><li><p>Pul dolanyşygy we karz</p></li><li><p>Maliýe menejmenti</p></li><li><p>Gymmatly kagyzlaryň bazary</p></li><li><p>Baha kesmek işi</p></li><li><p>Elektron işewürliginiň ykdysadyýeti</p></li><li><p>Elektron täjirçiligi</p></li><li><p>Dünýä ykdysadyýeti</p></li><li><p>Menejment</p></li><li><p>Kärhananyň ykdysadyýeti we dolandyrylyşy</p></li><li><p>Döwlet we ýerli dolandyryş</p></li><li><p>Makroykdysadyýet</p></li><li><p>Ykdysadyýetde we dolandyryşda maglumat ulgamlary</p></li><li><p>Ykdysady kibernetika</p></li><li><p>Awtomatlaşdyrylan ulgamlaryň we kompýuter tehnikasynyň programma üpjünçiligi</p></li><li><p>Marketing</p></li><li><p>Harytşynaslyk we harytlaryň ekspertizasy</p></li><li><p>Jemgyýetçilik iýmitini guramak</p></li><li><p>Hili dolandyrmak</p></li><li><p>Zähmetiň ykdysadyýeti we bazary</p></li><li><p>Ilatyň durmuş üpjünçiligini guramak</p></li></ul>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
