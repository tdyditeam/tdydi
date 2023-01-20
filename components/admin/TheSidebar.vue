<template>
  <div class="admin-sidebar">
    <div class="admin-sidebar__wrapper">
      <div class="admin-sidebar__logo">
        <div class="admin-sidebar__logo-img">
          <img src="@/assets/img/admin/sidebarlogo.png" alt="" />
        </div>
      </div>
      <div class="admin-sidebar__menu">
        <div class="admin-sidebar__menu-list">
          <nuxt-link to="/admin/main" class="admin-sidebar__menu-item"
            >Baş sahypa</nuxt-link
          >
          <nuxt-link to="/admin/about-us" class="admin-sidebar__menu-item"
            >Biz barada</nuxt-link
          >
          <div class="admin-sidebar__menu-item">Ylym</div>
          <div class="admin-sidebar__menu-item">Halkara hyzmatdaşlygy</div>
          <div class="admin-sidebar__menu-item">Bäsleşikler</div>
          <div class="admin-sidebar__menu-item">Dalaşgär-2022</div>
        </div>
      </div>
      <div class="admin-sidebar__logout">
        <div class="admin-sidebar__logout-text">Mekan Çaryýew</div>
        <div class="admin-sidebar__logout-img">
          <img src="@/assets/img/admin/logout.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.admin-sidebar {
  background: var(--white);
  box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  &__wrapper {
    padding: 37px 10px 20px 10px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  &__logo {
    margin-bottom: 60px;
    &-img {
      width: 214px;
      height: 48px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
  }
  &__menu {
    width: 100%;
    flex: 1 1 auto;
    &-list {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    &-item {
      width: 100%;
      padding: 13px 10px;
      text-transform: capitalize;
      cursor: pointer;
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      color: var(--text);
      border-bottom: 1px solid var(--background-second);
      transition: 0.2s ease;
      border-radius: 2px;
      white-space: nowrap;
      &.active {
        background: var(--primary);
        color: var(--white);
      }
      &:hover {
        background: var(--primary);
        color: var(--white);
      }
    }
  }
  &__logout {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    &-text {
      font-weight: 700;
      font-size: 14px;
      line-height: 17px;
      text-transform: capitalize;
      color: var(--text);
    }
    &-img {
      width: 20px;
      height: 18px;
      margin-right: 22px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.nuxt-link-exact-active,
.nuxt-link-active {
  background: var(--primary);
  color: var(--white);
}
</style>
