<template>
  <div class="gallery">
    <the-title-block :title="'Gallereýa'" :items="items"></the-title-block>
    <gallery-video></gallery-video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Photo',
          dark: false,
          active: true,
        },
        {
          id: 3,
          name: 'Video',
          dark: false,
          active: false,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.gallery {
  padding: 15px 0px;
}
</style>
