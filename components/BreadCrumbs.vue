<template>
  <ul class="breadcrumbs">
    <li
      class="breadcrumbs__list"
      v-for="breadCrumb in breadCrumbs"
      :key="breadCrumb.id"
    >
      <nuxt-link
        :to="localePath(`${breadCrumb.path}`)"
        :exact="breadCrumb.exact"
        class="breadcrumbs__item"
        >{{ breadCrumb.name }}</nuxt-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    breadCrumbs: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  list-style-type: none;
  margin: 0;
  padding: 10px 0px 10px 0px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  color: var(--text);
  &__list {
    align-items: center;
    display: inline-flex;
    position: relative;
    &:not(:last-child) {
      padding-right: 20px;
      &::after {
        position: absolute;
        content: '/';
        right: 5px;
        width: 10px;
      }
    }
    &.active {
      color: var(--primary);
    }
  }
}
</style>
