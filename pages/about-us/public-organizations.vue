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
          name: 'Türkmen döwlet ykdysadyýet we dolandyryş institutynyň ilkinji Partiýa guramasy',
          path: '/about-us/public-organizations/0',
          exact: true,
        },
        {
          id: 1,
          name: 'Türkmen döwlet ykdysadyýet we dolandyryş institutynyň Kärdeşler arkalaşygynyň ilkinji guramasy',
          path: '/about-us/public-organizations/1',
          exact: true,
        },
        {
          id: 2,
          name: 'Türkmen döwlet ykdysadyýet we dolandyryş institutynyň ilkinji Ýaşlar guramasy',
          path: '/about-us/public-organizations/2',
          exact: true,
        },
        {
          id: 3,
          name: 'Türkmen döwlet ykdysadyýet we dolandyryş institutynyň Ilkinji Zenanlar guramasy',
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
