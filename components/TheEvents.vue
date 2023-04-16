<template>
  <div class="events">
    <the-title-block
      :title="items.find((item) => item.id === activeId)?.name"
      :activeId="activeId"
      :items="items"
      :eventType="eventType"
      isAll
      @change="change"
    >
    </the-title-block>
    <events-article :events="events" :activeId="activeId"></events-article>
  </div>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeId: 1,
      eventType: 'news',
    }
  },
  computed: {
    items() {
      let arr = [
        {
          id: 1,
          name: this.$t('button.news'),
          eventType: 'news',
        },
        {
          id: 2,
          name: this.$t('button.articles'),
          eventType: 'article',
        },
      ]
      return arr
    },
  },
  methods: {
    change(item) {
      this.activeId = item.id
      this.eventType = item.eventType
      this.$emit('change', item.eventType)
    },
  },
}
</script>

<style lang="scss" scoped>
.events {
  padding: 15px 0px;
}
</style>
