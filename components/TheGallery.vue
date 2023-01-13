<template>
  <div class="gallery">
    <the-title-block
      :title="'Gallereýa'"
      :items="items"
      @change="change"
    ></the-title-block>
    <gallery-photo v-if="isActive"></gallery-photo>
    <gallery-video v-else></gallery-video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
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
  methods: {
    change(data) {
      const find = this.items.find((item) => item.active === true)
      find.active = false
      data.active = true
      this.isActive = !this.isActive
    },
  },
}
</script>

<style lang="scss" scoped>
.gallery {
  padding: 15px 0px;
}
</style>
