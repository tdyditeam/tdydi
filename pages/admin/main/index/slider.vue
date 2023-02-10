<template>
  <div class="admin-slider">
    <file-list
      :items="items"
      icon="addphoto.png"
      title="Uly slider"
    ></file-list>
    <file-list :items="items" icon="addvideo.png" title="Video"></file-list>
    <file-list
      :items="items"
      icon="addphoto.png"
      title="Ýylyň nyşany"
    ></file-list>
    <file-list
      :items="items"
      icon="addphoto.png"
      title="Gorkezijiler"
      @clickPhoto="popupIndicators = true"
      edit
      indicator
    ></file-list>
    <pop-up-indicators
      v-if="popupIndicators"
      @close="popupIndicators = false"
    ></pop-up-indicators>
  </div>
</template>

<script>
import { request } from '~/api/generic.api'
const FileList = () => import('@/components/admin/FileList.vue')
const PopUpIndicators = () =>
  import('~/components/admin/popup/PopUpIndicators.vue')

export default {
  layout: 'admin',
  components: {
    FileList,
    PopUpIndicators,
  },
  data() {
    return {
      popupIndicators: false,
      items: [
        { id: 1, path: 'asd' },
        { id: 2, path: 'ads' },
        { id: 3, path: 'ads' },
        { id: 4, path: 'ads' },
        { id: 5, path: 'ads' },
        { id: 6, path: 'ads' },
        { id: 7, path: 'ds' },
        { id: 8, path: 'ads' },
      ],
    }
  },
  async mounted() {
    // await this.fetchMainIamges()
  },
  methods: {
    async fetchMainIamges() {
      try {
        const res = await request({ url: '/admin/main-images', method: 'GET' })
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.admin-slider {
  height: 100%;
  overflow: auto;
}
</style>
