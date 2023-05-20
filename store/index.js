export const state = () => ({
  imageUrl: process.env.IMAGE_URL,
  loading: false,
})

export const getters = {
  imageUrl(state) {
    return state.imageUrl
  },

  isLoading(state) {
    return state.loading
  },
}

export const mutations = {
  setLoading(state, loading) {
    state.loading = loading
  },
}
