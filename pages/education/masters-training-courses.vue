<template>
  <block-pages :description="description" :title="title"></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title:
        'Türkmen döwlet ykdysadyýet we dolandyryş institutynda bilim berilýän Bakalawr taýýarlyk ugurlar',
      description: `<ul><li><p>Ykdysadyýet</p></li><li><p>Salgyt menejmenti</p></li><li><p>Menejment</p></li><li><p>Milli ykdysadyýet</p></li><li><p>Dünýä ykdysadyýeti</p></li></ul>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
