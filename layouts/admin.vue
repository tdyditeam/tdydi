<template>
  <div class="admin">
    <the-sidebar></the-sidebar>
    <div class="admin-main">
      <nuxt></nuxt>
    </div>
  </div>
</template>

<script>
const TheSidebar = () => import('~/components/admin/TheSidebar.vue')
export default {
  components: { TheSidebar },
}
</script>

<style lang="scss" scoped>
.admin {
  width: 100vw;
  height: 100vh;
  background: var(--background-second);
  padding: 10px;
  font-family: 'Roboto Flex';
  display: flex;
  overflow: hidden;
  &-main {
    flex: 1 1 auto;
    padding: 0px 0px 0px 10px;
    height: 100%;
    width: 100%;
    overflow: overlay;
    &::-webkit-scrollbar-track {
      background: transparent;
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--primary);
      display: none;
    }
    &::-webkit-scrollbar {
      background: transparent;
      display: none;
    }
    &::-webkit-scrollbar-corner {
      display: none;
      visibility: hidden;
      opacity: 0px;
    }
  }
}
</style>
