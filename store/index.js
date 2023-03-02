export const state = () => ({
  imageUrl: process.env.IMAGE_URL,
})

export const getters = {
  imageUrl(state) {
    return state.imageUrl
  },
}

export const mutations = {}

export const actions = {}
