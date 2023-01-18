export default {
  methods: {
    changeImage(event) {
      let files = event.target.files || event.dataTransfer.files
      if (!files.length) return
      let fileDatas = {
        blobFile: null,
        postFile: files[0],
      }
      var reader = new FileReader()
      reader.onload = (e) => {
        fileDatas.blobFile = e.target.result
      }
      reader.readAsDataURL(files[0])

      return fileDatas
    },
  },
}
