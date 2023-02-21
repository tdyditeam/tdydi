<template>
  <block-pages
    :description="description[$route.params.id]"
    :title="title[$route.params.id]"
    :img="img[$route.params.id]"
  ></block-pages>
</template>

<script>
export default {
  data() {
    return {
      title: {
        economical: this.$t('faculties.economical'),
        finanse: this.$t('faculties.finanse'),
        managament: this.$t('faculties.managament'),
        marketing: this.$t('faculties.marketing'),
        'proffesional-development': this.$t(
          'faculties.proffesional-development'
        ),
      },
      description: {
        economical: this.$t('faculties.description.economical'),
        finanse: this.$t('faculties.description.finanse'),
        managament: this.$t('faculties.description.managament'),
        marketing: this.$t('faculties.description.marketing'),
        'proffesional-development': this.$t(
          'faculties.description.proffesional-development'
        ),
      },
      img: {
        economical: 'image.png',
        finanse: '3.png',
        managament: '2.png',
        marketing: '1.png',
        'proffesional-development': 'image.png',
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
