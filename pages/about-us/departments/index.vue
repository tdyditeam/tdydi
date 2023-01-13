<template>
  <div>
    <bread-crumbs></bread-crumbs>
    <div class="departments__row">
      <div>
        <title-block-pages
          isButton
          appendIcon
          text="Hormatly mugallymlar"
          iconUrl="home/icon-go.svg"
        ></title-block-pages>
        <departments-swiper></departments-swiper>
      </div>
      <departments-sidebar></departments-sidebar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.departments__row {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}
</style>
