<template>
  <div class="loader__wrapper">
    <div class="loader__wrapper-content">
      <div class="loader__wrapper-logo">
        <img src="@/assets/icons/logo.webp" alt="logo" />
      </div>
      <div class="loader__wrapper-progress">
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style lang="scss">
.loader {
  &__wrapper {
    width: 100%;
    height: 100vh;
    background: #fff;
    position: fixed;
    z-index: 1000000000;
    display: flex;
    align-items: center;
    justify-content: center;
    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &-logo {
      margin-bottom: 20px;
      img {
        width: 250px;
      }
    }
    &-progress {
      background-color: #f4f4f4;
      width: 160px;
      height: 4px;
      margin-top: 20px;
      overflow: hidden;
      position: relative;
      border-radius: 2px;
      span {
        width: 50%;
        height: 100%;
        background-color: var(--primary);
        position: absolute;
        top: 0;
        left: -50%;
        border-radius: 2px;
        -webkit-animation: loading 1.2s linear infinite;
        animation: loading 1.2s linear infinite;
      }
    }
  }
}
@keyframes loading {
  0% {
    left: -50%;
  }

  100% {
    left: 100%;
  }
}
</style>
