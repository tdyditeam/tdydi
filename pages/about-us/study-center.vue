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
          name: this.$t('studyCenters.economistTraining.name'),
          path: '/about-us/study-center/0',
          exact: false,
        },
        {
          id: 2,
          name: this.$t('studyCenters.auditTraining.name'),
          path: '/about-us/study-center/1',
          exact: true,
        },
        {
          id: 3,
          name: this.$t('studyCenters.hazynaSportsClub.name'),
          path: '/about-us/study-center/2',
          exact: true,
        },
      ],
    }
  },
  mounted() {
    // this.$router.push(localeLocation('/about-us/study-center/0'))
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
<style>
.faculties {
  display: flex;
}
</style>
