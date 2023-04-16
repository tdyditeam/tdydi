<template>
  <div class="gallery">
    <the-title-block
      :title="$t('button.galerey')"
      :items="items"
      :activeId="activeId"
      @change="change"
    ></the-title-block>
    <gallery-photo v-if="activeId == 1" :galerias="galerias"></gallery-photo>
    <gallery-video v-else :galerias="galerias"></gallery-video>
  </div>
</template>

<script>
export default {
  props: {
    galerias: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeId: 1,
    }
  },
  computed: {
    items() {
      return [
        {
          id: 1,
          name: this.$t('images'),
          galleryType: 'image',
        },
        {
          id: 2,
          name: this.$t('videos'),
          galleryType: 'video',
        },
      ]
    },
  },
  methods: {
    change(data) {
      this.activeId = data.id
      this.$emit('changeGallery', data.galleryType)
    },
  },
}
</script>

<style lang="scss" scoped>
.gallery {
  padding: 15px 0px;
  transition: all 3s;
}
</style>
