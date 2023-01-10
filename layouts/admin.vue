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
  font-family: 'Gilroy';
  display: flex;
  overflow: hidden;
  &-main {
    flex: 1 1 auto;
    padding: 0px 0px 0px 10px;
    overflow: hidden;
  }
}
</style>