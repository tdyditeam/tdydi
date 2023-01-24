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
          exact: true,
        },
        {
          id: 2,
          name: 'Maliýe',
          path: '/about-us/faculties/finanse',
          exact: true,
        },
        {
          id: 3,
          name: 'Menejment',
          path: '/about-us/faculties/managament',
          exact: true,
        },
        {
          id: 4,
          name: 'Marketing',
          path: '/about-us/faculties/marketing',
          exact: true,
        },
        {
          id: 5,
          name: 'HÜNÄRI ÝOKARLANDYRYŞ',
          path: '/about-us/faculties/proffesional-development',
          exact: true,
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
