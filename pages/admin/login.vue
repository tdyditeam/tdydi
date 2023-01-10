<template>
  <div class="admin-login">
    <div class="admin-login__wrapper">
      <div class="admin-login__body">
        <div class="admin-login__body--title">
          <h2>Hoş geldiňiz hormatly mugallymlar!</h2>
        </div>
        <form class="admin-login__body--form" @submit.enter.prevent="logIn">
          <div class="admin-login__body--logo">
            <img src="@/assets/img/admin/admin__logo.png" alt="" />
          </div>
          <div class="admin-login__body--input">
            <div class="row">
              <div class="col-12">
                <text-filed
                  label="Имя пользователя"
                  :value="userData.name"
                  :error="!userData.name && error"
                  @updateValue="(val) => (userData.name = val)"
                ></text-filed>
              </div>
              <div class="col-12">
                <text-filed
                  label="Пароль"
                  :type="isPass ? 'text' : 'password'"
                  :appendIcon="isPass ? 'eye_close.png' : 'eye.png'"
                  :value="userData.password"
                  :error="!userData.password && error"
                  @updateValue="(val) => (userData.password = val)"
                  @clickAppend="isPass = !isPass"
                ></text-filed>
              </div>
              <div class="col-12" style="margin-top: 30px">
                <base-button text="Вход"></base-button>
              </div>
            </div>
          </div>
        </form>
        <div class="admin-login__body--img">
          <img src="@/assets/img/admin/patterns.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      error: false,
      isPass: false,
      userData: {
        name: '',
        password: '',
      },
    }
  },
  methods: {
    logIn() {
      if (!this.userData.name || !this.userData.password) {
        console.log('if')
        this.error = false
        setTimeout(() => {
          this.error = true
        }, 0)
      } else {
        console.log(this.userData)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.admin-login {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: var(--background);
  &__wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
  }
  &__body {
    width: 420px;

    &--title {
      font-family: 'Gilroy';
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      text-align: center;
      color: var(--primary);
      margin-bottom: 30px;
    }
    &--form {
      background: var(--white);
      border: 1px solid rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      padding: 40px;
    }
    &--logo {
      width: 340px;
      height: 66px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &--img {
      width: 100%;
      height: 32.3px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
      img {
        width: 345px;
        height: 100%;
      }
    }
  }
}
</style>
