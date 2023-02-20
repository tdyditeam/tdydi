<template>
  <div class="gallery">
    <the-title-block
      :title="$t('button.galerey')"
      :items="items"
      :activeId="activeId"
      @change="change"
    ></the-title-block>
    <gallery-photo v-if="activeId == 1"></gallery-photo>
    <gallery-video v-else></gallery-video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeId: 1,
      items: [
        {
          id: 1,
          name: 'Suratlar',
        },
        {
          id: 2,
          name: 'Videolar',
        },
      ],
    }
  },
  methods: {
    change(data) {
      this.activeId = data.id
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
