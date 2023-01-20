<template>
  <block-pages :description="description" :title="title"></block-pages>
</template>

<script>
export default {
  data() {
    return {
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
