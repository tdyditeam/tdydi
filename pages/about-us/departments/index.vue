<template>
  <div>
    <title-block-pages
      isButton
      appendIcon
      text="Hormatly mugallymlar"
      iconUrl="home/icon-go.svg"
      @clicked="$router.push(localeLocation('/about-us/departments/1'))"
    ></title-block-pages>
    <departments-swiper></departments-swiper>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped></style>
