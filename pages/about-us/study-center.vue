<template>
  <div class="faculties">
    <nuxt-child></nuxt-child>
    <sidebar :subMenus="subMenus"></sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subMenus: [
        {
          id: 1,
          name: '«Ykdysatçy»okuwmerkezi',
          path: '/about-us/study-center/0',
          exact: false,
        },
        {
          id: 2,
          name: '«Audit» okuw merkezi',
          path: '/about-us/study-center/«Audit» okuw merkezi',
          exact: true,
        },
        {
          id: 3,
          name: '«Hazyna» sport kluby',
          path: '/about-us/study-center/«Hazyna» sport kluby',
          exact: true,
        },
      ],
    }
  },
  mounted() {
    this.$router.push('/about-us/study-center/0')
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
<style>
.faculties {
  display: flex;
}
</style>
