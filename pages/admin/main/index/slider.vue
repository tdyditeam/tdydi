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
const FileList = () => import('~/components/admin/FileList.vue')

export default {
  layout: 'admin',
  components: {
    FileList,
  },
  data() {
    return {
      items: [
        { id: 1, path: '' },
        { id: 1, path: '' },
        { id: 1, path: '' },
        { id: 1, path: '' },
        { id: 1, path: '' },
        { id: 1, path: '' },
        { id: 1, path: '' },
        { id: 1, path: '' },
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
