export default {
  install(Vue) {
    Vue.prototype.$toast = (html) => {
      const toast = document.createElement('div')
      toast.classList.add('toast')
      toast.id = new Date().toISOString()
      toast.innerHTML = html
      document.querySelector('.toast-container').appendChild(toast)
      setTimeout(() => {
        document.getElementById(toast.id).remove()
      }, 5000)
    }
  },
}
