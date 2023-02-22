<template>
  <block-pages
    :description="description[$route.params.id]"
    :title="title[$route.params.id]"
  ></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: {
        0: this.$t('publicOrganizations.first.title'),
        1: this.$t('publicOrganizations.second.title'),
        2: this.$t('publicOrganizations.third.title'),
        3: this.$t('publicOrganizations.fourth.title'),
      },
      description: {
        0: this.$t('publicOrganizations.first.description'),
        1: this.$t('publicOrganizations.second.description'),
        2: this.$t('publicOrganizations.third.description'),
        3: this.$t('publicOrganizations.fourth.description'),
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
