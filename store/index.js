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

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { app }) {
    // const locale = app.i18n.locale
    // const cookieOptions = {
    //   path: '/',
    //   maxAge: 60 * 60 * 24 * 7,
    //   sameSite: 'Lax',
    //   secure: false,
    //   httpOnly: false,
    // }
    // console.log(app.$cookies.set)
    // app.$cookies.set('i18n_redirected', locale, cookieOptions)
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
