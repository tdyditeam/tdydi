<template>
  <block-pages :description="description" :title="title"></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: 'Ýylyň mugallymy bäsleşigi',
      description: `<p>Ýokary okuw mekdepleriniň professor-mugallymlarynyň arasynda 2022-nji ýylyň maý aýynda geçirilen «<em>Ýylyň mugallymy</em>» bäsleşiginde Bank işi kafedrasynyň müdiriniň w.w.ý.ý., <em>uly mugallym Hojanepesowa A.K. 1-nji orna</em> mynasyp boldy.</p>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>

<style lang="scss" scoped></style>
