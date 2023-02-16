<template>
  <section>
    <block-pages :description="description" :title="title"></block-pages>
    <the-table></the-table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Halkara hyzmatdaşlar',
      description: ``,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
