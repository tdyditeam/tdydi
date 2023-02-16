<template>
  <block-pages :description="description" :title="title"></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: 'Halkara taslamalar',
      description: ``,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>

