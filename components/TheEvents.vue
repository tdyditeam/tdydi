<template>
  <div class="events">
    <the-title-block :title="'Wakalar'" :items="items" @change="change">
    </the-title-block>
    <events-article></events-article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'Täzelikler',
          dark: false,
          active: true,
        },
        {
          id: 2,
          name: 'Makalalar',
          dark: false,
          active: false,
        },
        {
          id: 3,
          name: 'Hemmesi',
          dark: true,
          active: false,
        },
      ],
    }
  },
  methods: {
    change(item) {
      if (item.id === 3) {
        this.$router.push('/events')
      }
      console.log(item.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.article {
  padding: 15px 0px;
}
</style>
