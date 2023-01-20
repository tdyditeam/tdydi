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
  </div>
</template>

<script>
const FileList = () => import('@/components/admin/FileList.vue')

export default {
  layout: 'admin',
  components: {
    FileList,
  },
  data() {
    return {
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
}
</script>

<style lang="scss" scoped>
.admin-slider {
  height: 100%;
  overflow: auto;
}
</style>
