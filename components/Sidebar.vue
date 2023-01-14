<template>
  <div class="departments-sidebar">
    <div class="departments-sidebar__row">
      <div
        class="departments-sidebar__item"
        v-for="subMenu in subMenus"
        :key="subMenu.id"
      >
        <nuxt-link :to="localePath(`${subMenu.path}`)" :exact="subMenu.exact">{{
          subMenu.name
        }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subMenus: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.departments-sidebar {
  margin-top: 10px;
  height: 100%;
  background-color: #f6f6f6;
  border-radius: 8px;
  &__row {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
  }

  &__item {
    width: 367px;
    cursor: pointer;
    a {
      display: block;
      width: 100%;
      padding: 13.5px;
      font-family: 'Gilroy';
      border-radius: 4px;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: var(--text);
      text-align: center;
      transition: all 0.3s;
      &:hover {
        background-color: #dedede;
      }
      &.nuxt-link-active,
      .nuxt-link-exact-active {
        background-color: #16ab65;
        color: #fff;
        &:hover {
          background-color: #16ab65;
          color: #fff;
        }
      }
    }
  }
}
</style>
