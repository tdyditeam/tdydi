<template>
  <div>
    <bread-crumbs></bread-crumbs>
    <div class="departments__row">
      <div>
        <title-block-pages></title-block-pages>
        <departments-teachers></departments-teachers>
      </div>
      <departments-sidebar></departments-sidebar>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.departments__row {
  display: flex;
  justify-content: space-between;
}
</style>
