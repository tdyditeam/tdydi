<template>
  <div class="news __container">
    <bread-crumbs></bread-crumbs>
    <div class="news__header">
      <div class="news__header-search">
        <text-filed
          placeholder="gozle"
          :value="search"
          prependIcon="search-normal.png"
        ></text-filed>
      </div>
      <div class="news__header-buttons">
        <base-button text="Makalalar"></base-button>
        <base-button
          text="Täzelikler"
          background="#E5F3FF"
          color="#16AB65"
        ></base-button>
      </div>
    </div>
    <div class="news__content"></div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: 'test',
          name: 'test',
          content: 'asdasd',
        },
      ],
    }
  },
  data() {
    return {
      search: '',
    }
  },
  mounted() {
    console.log(this.$route)
  },
}
</script>

<style lang="scss" scoped>
.news {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-search {
      width: 438px;
    }
    &-buttons {
      display: flex;
      .button {
        &:first-child {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
