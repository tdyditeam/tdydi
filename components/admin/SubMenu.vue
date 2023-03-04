<template>
  <div v-if="items.length" class="admin-submenu-wrapper">
    <ul class="admin-submenu-list">
      <client-only v-for="item in items" :key="item.id">
        <nuxt-link exact :to="item.path" class="admin-submenu-item">{{
          item.name
        }}</nuxt-link>
      </client-only>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.admin-submenu {
  &-wrapper {
    width: 100%;
    background: var(--white);
    padding: 10px 20px;
    border-radius: 6px;
    margin-bottom: 30px;
  }
  &-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  &-item {
    cursor: pointer;
    min-width: 146px;
    text-align: center;
    padding: 12px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: var(--text-second);
    background: #e1dcdc;
    border-radius: 6px;
    margin-right: 20px;
    transition: 0.2s ease;
    &:hover {
      color: var(--white);
      background: var(--primary);
    }
  }
}
.nuxt-link-exact-active,
.nuxt-link-active {
  background: var(--primary);
  color: var(--white);
}
</style>
