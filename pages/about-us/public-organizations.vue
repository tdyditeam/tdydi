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
      title: 'Fakultetler',
      description: ``,
      subMenus: [
        {
          id: 0,
          name: 'Institutyň Türkmenistanyň Demokratik partiýa guramasy',
          path: '/about-us/public-organizations/0',
          exact: true,
        },
        {
          id: 1,
          name: 'Institutyň kärdeşler arkalaşygy guramasy',
          path: '/about-us/public-organizations/1',
          exact: true,
        },
        {
          id: 2,
          name: 'Institutyň Talyp ýaşlar guramasy',
          path: '/about-us/public-organizations/2',
          exact: true,
        },
        {
          id: 3,
          name: 'Institutyň zenanlar guramasy',
          path: '/about-us/public-organizations/3',
          exact: true,
        },
      ],
    }
  },
  mounted() {
    this.$router.push('/about-us/public-organizations/0')
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
<style>
.faculties {
  display: flex;
}
</style>
