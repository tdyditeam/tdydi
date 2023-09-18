export const state = () => ({
  imageUrl: process.env.IMAGE_URL,
  isLoaded: true,
})

export const getters = {
  imageUrl(state) {
    return state.imageUrl
  },
  isLoaded(state) {
    return state.isLoaded
  },
}

export const mutations = {
  SET_LOADER(state, val) {
    state.isLoaded = val
  },
}
