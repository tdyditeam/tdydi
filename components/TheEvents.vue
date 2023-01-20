<template>
  <div class="events">
    <the-title-block
      :title="'TÄZELIKLER'"
      :activeId="activeId"
      :items="items"
      @change="change"
    >
    </the-title-block>
    <events-article></events-article>
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
          name: 'Täzelikler',
        },
        {
          id: 2,
          name: 'Makalalar',
        },
      ],
    }
  },
  methods: {
    change(item) {
      this.activeId = item.id
    },
  },
}
</script>

<style lang="scss" scoped>
.events {
  padding: 15px 0px;
}
</style>
