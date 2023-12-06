export const state = () => ({
  imageUrl: process.env.IMAGE_URL,
  loading: false,
  subMenus: null,
})

export const getters = {
  imageUrl(state) {
    return state.imageUrl
  },
  getSubMenus(state) {
    return state.subMenus
  },
  isLoading(state) {
    return state.loading
  },
}

export const mutations = {
  setLoading(state, loading) {
    state.loading = loading
  },
  setSubMenus(state, payload) {
    console.log(payload)
    state.subMenus = payload
  },
}
