<template>
  <div class="publications">
    <file-list
      :items="items"
      icon="addphoto.png"
      title="Neşirler"
      @fileUploaded="fileUploaded"
      @itemDelete="itemDelete"
    ></file-list>
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
      items: [],
    }
  },
  async fetch() {
    await this.fetchPublications()
  },
  methods: {
    async fetchPublications() {
      try {
        const res = await request({
          url: '/publications',
          method: 'GET',
        })
        console.log(res)
        if (res) {
          this.items = res
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fileUploaded(imgPath) {
      console.log(imgPath)
      try {
        const res = await request({
          url: '/publications',
          data: {
            image: imgPath,
          },
          file: true,
        })
        console.log(res)
        if (res.status) {
          await this.fetchPublications()
        }
      } catch (error) {
        console.log(error)
      }
    },
    async itemDelete(id) {
      try {
        const res = await request({
          url: `/publications`,
          data: {
            id: id,
          },
          method: 'DELETE',
        })
        console.log(res)
        if (res.status) {
          await this.fetchPublications()
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.publications {
  height: 100%;
  overflow: auto;
}
</style>
