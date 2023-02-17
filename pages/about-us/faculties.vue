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
          id: 1,
          name: 'Ykdysadyýet',
          path: '/about-us/faculties/economical',
          exact: false,
        },
        {
          id: 2,
          name: 'Maliýe',
          path: '/about-us/faculties/finanse',
          exact: false,
        },
        {
          id: 3,
          name: 'Menejment',
          path: '/about-us/faculties/managament',
          exact: false,
        },
        {
          id: 4,
          name: 'Marketing',
          path: '/about-us/faculties/marketing',
          exact: false,
        },
        {
          id: 5,
          name: 'HÜNÄRI ÝOKARLANDYRYŞ',
          path: '/about-us/faculties/proffesional-development',
          exact: false,
        },
      ],
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
<style>
.faculties {
  display: flex;
}
</style>
