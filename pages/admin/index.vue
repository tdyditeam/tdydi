<template>
  <div></div>
</template>

<script>
export default {
  layout: 'admin',
  middleware(app) {
    return app.redirect(app.app.localePath('/admin/main/slider'))
  },
}
</script>

<style lang="scss" scoped></style>
