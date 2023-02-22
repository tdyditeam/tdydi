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
          name: this.$t('publicOrganizations.first.title'),
          path: '/about-us/public-organizations/0',
          exact: true,
        },
        {
          id: 1,
          name: this.$t('publicOrganizations.second.title'),
          path: '/about-us/public-organizations/1',
          exact: true,
        },
        {
          id: 2,
          name: this.$t('publicOrganizations.third.title'),
          path: '/about-us/public-organizations/2',
          exact: true,
        },
        {
          id: 3,
          name: this.$t('publicOrganizations.fourth.title'),
          path: '/about-us/public-organizations/3',
          exact: true,
        },
      ],
    }
  },

  mounted() {
    this.$router.push(this.localeLocation('/about-us/public-organizations/0'))
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
<style>
.faculties {
  display: flex;
}
</style>
