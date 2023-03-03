import { request } from '@/api/generic.api'

export default {
  methods: {
    async fileUpload(api, img) {
      try {
        const res = await request({ url: api, data: img, file: true })
        return res
      } catch (error) {
        console.log(error)
      }
    },
  },
}
