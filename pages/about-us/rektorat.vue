<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="description"
      :title="title"
      img="rektorat.png"
    ></block-pages>
  </section>
</template>

<script>
export default {
  data() {
    return {
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.aboutUs.name'),
          path: '/about-us',
          exact: true,
        },
        {
          id: 3,
          name: this.$t('header.menu.aboutUs.rektorat'),
          path: '/about-us/rektorat',
          exact: true,
        },
      ],
      title: 'Rektorat',
      description: `Türkmenistanyň Prezidentiniň Türkmenistanyň ýokary 
	  okuw mekdepleriniň gurluşyny tassyklamak hakynda 2019-njy ýylyň 
	  12-nji iýunyndaky 1264 belgili karary esasynda Türkmen döwlet 
	  ykdysadyýet we dolandyryş institutynyň täze gurluşy tassyklandy.`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>
