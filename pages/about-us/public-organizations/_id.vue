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
        0: 'Institutyň Türkmenistanyň Demokratik partiýa guramasy',
        1: 'Institutyň kärdeşler arkalaşygy guramasy',
        2: 'Institutyň Talyp ýaşlar guramasy',
        3: 'Institutyň zenanlar guramasy',
      },
      description: {
        0: '',
        1: '',
        2: '',
        3: '',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
