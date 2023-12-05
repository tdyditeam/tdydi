<template>
  <header
    :class="[
      'header',
      { active: $route.name === `index___${$i18n.locale}` && !header },
    ]"
  >
    <div class="">
      <div class="header__top __container">
        <div
          class="header__top-title"
          @click="$router.push(localeLocation('/'))"
        >
          <h2 v-html="$t('header.name')"></h2>
        </div>
        <div
          class="header__top-logo"
          @click="$router.push(localeLocation('/'))"
        >
          <img src="@/assets/icons/logo.webp" alt="logo" />
        </div>
        <div class="header__top-content">
          <div class="languages">
            <nuxt-link
              class="lang"
              exact
              v-for="locale in $i18n.locales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              <img :src="require(`@/assets/img/${locale.code}.png`)" alt="" />
              <p>{{ locale.name }}</p>
            </nuxt-link>
          </div>
          <div class="contact" @click="showPopUp">
            {{ $t('button.contact') }}
          </div>
        </div>
      </div>
      <div class="header__mobile __container">
        <div class="header__mobile-logo-block">
          <div
            class="header__mobile-logo"
            @click="$router.push(localeLocation('/'))"
          >
            <img src="@/assets/icons/logo.webp" alt="logo" />
          </div>
          <div
            class="header__mobile-title"
            @click="$router.push(localeLocation('/'))"
            v-html="$t('header.name')"
          ></div>
        </div>
        <div
          @click="isMobileActive = !isMobileActive"
          class="header__mobile-burger"
          :class="{ active: isMobileActive }"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="header__bottom">
        <div class="header__bottom-container __container">
          <div class="header__bottom-container-body">
            <div class="header__bottom-menu">
              <client-only v-for="item in menus" :key="item.id">
                <a
                  href="#"
                  @click.prevent.stop="clickCategory(item)"
                  :class="[
                    'header__bottom-items',
                    {
                      'nuxt-link-active': routeActive === item.id,
                    },
                  ]"
                >
                  <span>{{ menuLocale(item) }}</span>
                  <span></span>
                  <div
                    class="header__bottom-submenu-container"
                    v-if="item.children.length > 0"
                  >
                    <div class="header__bottom-submenu __container">
                      <div
                        v-for="subMenu in item.children.filter(
                          (item) => item?.slug !== 'teachers'
                        )"
                        :key="subMenu.id"
                        class="header__bottom-subitems"
                      >
                        <a
                          herf="#"
                          @click.prevent.stop="clickSubCategory(item, subMenu)"
                          :class="[
                            {
                              'nuxt-link-exact-active':
                                routeSubActive === subMenu.id,
                            },
                          ]"
                        >
                          <span>{{ subMenuLocale(subMenu) }}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </client-only>
            </div>
          </div>
        </div>
      </div>
      <div
        :class="[
          'header__mobile-bottom __container',
          { active: isMobileActive },
        ]"
      >
        <nav class="header__mobile-bottom-menu menu-mobile">
          <div class="menu-mobile__list">
            <div
              v-for="item in menus"
              :key="item.id"
              class="menu-mobile__item"
              @click.prevent.stop="clickCategoryMobile(item)"
            >
              <div class="menu-mobile__link-wrapper">
                <div class="menu-mobile__link">{{ menuLocale(item) }}</div>
                <div class="menu-mobile__icon">
                  <img
                    src="@/assets/img/home/header/icon-right.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div class="menu-mobile__sub-list">
                <div
                  v-for="subMenu in item.children"
                  :key="subMenu.id"
                  class="menu-mobile__sub-item"
                  @click.prevent.stop="clickMobileSubCategory(item, subMenu)"
                >
                  <div class="menu-mobile__sub-link">
                    {{ subMenuLocale(subMenu) }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="header__mobile-lng-wrapper">
          <nuxt-link
            :class="[
              'header__mobile-lng-block',
              { active: $i18n.locale == locale.code },
            ]"
            exact
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
          >
            <span class="header__mobile-lng">{{ locale.name }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
    <contact-popup :isActive="isActive" @close="closePopUp"></contact-popup>
  </header>
</template>

<script>
import { request } from '@/api/generic.api'
export default {
  data() {
    return {
      isActive: false,
      isMobileActive: false,
      header: false,
      menus: [],
      routeActive: null,
      routeSubActive: null,
    }
  },
  watch: {
    '$i18n.locale': async function () {
      await this.fetchMenus()
    },
    $route: function (val) {
      if (val.name === `index___${this.$i18n.locale}`) {
        this.routeActive = this.menus[0]?.id
        this.routeSubActive = null
      } else if (val.name === `about-us___${this.$i18n.locale}`) {
        this.routeSubActive = null
      }
    },
  },
  async fetch() {
    await this.fetchMenus()
  },
  mounted() {
    let className = 'scroll'
    let scrollTrigger = 30
    let wrapper = document.querySelector('.wrapper')
    wrapper.onscroll = function () {
      if (
        wrapper.scrollTop >= scrollTrigger ||
        window.pageYOffset >= scrollTrigger
      ) {
        document.querySelector('.header__mobile').classList.add(className)
      } else {
        document.querySelector('.header__mobile').classList.remove(className)
      }
    }
    wrapper.addEventListener('scroll', (e) => {
      if (e.target.scrollTop > 100) {
        this.header = true
      } else {
        this.header = false
      }
    })
  },
  methods: {
    async fetchMenus() {
      try {
        const res = await request({
          url: '/menu',
          params: {
            lang: this.$i18n.locale,
          },
          method: 'GET',
        })
        if (res.status) {
          this.menus = res.menu
          const id = Number(this.$cookies.get('id'))
          const subId = Number(this.$cookies.get('subId'))
          if (id) {
            if (this.$route.name === `index___${this.$i18n.locale}`) {
              this.routeActive = this.menus[0]?.id
              this.routeSubActive = null
            } else {
              this.routeActive = id
              this.routeSubActive = subId
            }
          } else {
            this.routeActive = this.menus[0]?.id
          }
        }
      } catch (error) {
        console.log(error)
      }
    },
    localeChangeRoute(data) {
      if (data) {
        if (data.id === 34) {
          return data.slug
        } else if (data.id === 35) {
          return data.slug
        } else {
          return data.children[0].slug
        }
      }
    },
    menuLocale(subMenu) {
      if (this.$i18n.locale === 'tm') {
        return subMenu.name_tm
      } else if (this.$i18n.locale === 'ru') {
        return subMenu.name_ru
      } else {
        return subMenu.name_en
      }
    },
    subMenuLocale(subMenu) {
      if (this.$i18n.locale === 'tm') {
        return subMenu.name_tm
      } else if (this.$i18n.locale === 'ru') {
        return subMenu.name_ru
      } else {
        return subMenu.name_en
      }
    },
    showPopUp() {
      document.body.classList.add('_lock')
      this.isActive = true
    },
    closePopUp() {
      document.body.classList.remove('_lock')
      this.isActive = false
    },
    clickCategoryMobile(data) {
      if (data.slug === '') {
        this.$router.push(this.localeLocation('/'))
      } else if (data.slug === '/about-us') {
        this.$router.push(this.localeLocation(data.slug))
      } else if (data.slug === '/financial-literacy') {
        this.$router.push(this.localeLocation(data.slug))
      } else {
        if (data.children[0].slug) {
          this.$router.push(
            this.localeLocation(
              `${data.slug}/${data.children[0].slug}?q=${data.id}`
            )
          )
        } else {
          this.$router.push(
            this.localeLocation(
              `${data.slug}/${data.children[0].id}?name=${this.subMenuLocale(
                data.children[0]
              )}`
            )
          )
        }
      }
    },
    clickCategory(data) {
      this.routeActive = data.id
      if (data.slug === '') {
        this.$router.push(this.localeLocation('/'))
      } else if (data.slug === '/about-us') {
        this.$cookies.set('id', data.id)
        this.$router.push(this.localeLocation(data.slug))
      } else if (data.slug === '/financial-literacy') {
        this.$cookies.set('id', data.id)
        this.$router.push(this.localeLocation(data.slug))
      } else {
        this.$cookies.set('id', data.id)
        if (data.children[0].slug) {
          this.$router.push(
            this.localeLocation(
              `${data.slug}/${data.children[0].slug}?q=${data.id}`
            )
          )
          this.routeSubActive = data.children[0].id
          this.$cookies.set('subId', data.children[0].id)
        } else {
          this.$router.push(
            this.localeLocation(
              `${data.slug}/${data.children[0].id}?name=${this.subMenuLocale(
                data.children[0]
              )}`
            )
          )
          this.routeSubActive = data.children[0].id
          this.$cookies.set('subId', data.children[0].id)
        }
      }
    },
    clickMobileSubCategory(parent, child) {
      if (child.slug) {
        this.$router.push(
          this.localeLocation(`${parent.slug}/${child.slug}?q=${child.id}`)
        )
      } else {
        this.$router.push(
          this.localeLocation(
            `${parent.slug}/${child.id}?name=${this.subMenuLocale(child)}`
          )
        )
      }
      this.isMobileActive = false
    },

    clickSubCategory(parent, child) {
      this.$cookies.set('subId', child.id)
      this.routeSubActive = child.id
      if (child.slug) {
        this.$router.push(
          this.localeLocation(`${parent.slug}/${child.slug}?q=${child.id}`)
        )
      } else {
        this.$router.push(
          this.localeLocation(
            `${parent.slug}/${child.id}?name=${this.subMenuLocale(child)}`
          )
        )
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0px;
  z-index: 200;
  transition: 0.5s ease;
  box-shadow: 2px 2px 21px rgb(0 0 0 / 15%);
  background-color: #fff;
  @media (max-width: 992px) {
    position: fixed;
    width: 100%;
    background: none;
    z-index: 100;
  }
  &__top {
    display: flex;
    align-items: center;
    @media (max-width: 992px) {
      display: none;
    }
    &-title {
      h2 {
        padding: 29px 0;
        font-family: 'Roboto Flex';
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        text-transform: uppercase;
        color: var(--text);
        cursor: pointer;
        &:hover {
          color: var(--primary);
        }
      }
    }
    &-logo {
      flex: 1 1 auto;
      text-align: center;
      img {
        cursor: pointer;
        width: 84px;
        height: 84px;
      }
    }
    &-content {
      display: flex;
      align-items: center;
      font-family: 'Roboto Flex';
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      text-transform: capitalize;
      color: var(--text);
      .languages {
        display: flex;
        justify-content: space-around;
        cursor: pointer;
        position: relative;
        width: 200px;
        transition: 0.3s ease 0s;
        height: 25px;
        padding: 3px 0;
        .lang {
          display: flex;
          align-items: center;
          p {
            margin-left: 5px;
            padding-top: 0.6px;
            height: 100%;
            font-size: 18px;
          }
          img {
            width: 25px;
            height: 20px;
            object-fit: cover;
            object-position: center;
          }
        }
      }
      .contact {
        margin-left: 35px;
        position: relative;
        cursor: pointer;
        text-transform: uppercase;
        &::after {
          content: '';
          position: absolute;
          left: -15px;
          width: 1px;
          height: 100%;
          background: var(--text);
          opacity: 0.5;
        }
      }
    }
  }
  &__mobile {
    display: none;
    &.scroll {
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      .header__mobile-burger {
        span {
          background-color: #fff;
        }
      }
      .header__mobile-title {
        color: white;
      }
    }
    @media (max-width: 992px) {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 100;
      padding: 20px;
    }
    &-logo-block {
      display: flex;
      align-items: center;
      flex: 1 1 auto;
      gap: 4px;
      @media (max-width: 479px) {
        gap: 2px;
      }
    }
    &-title {
      font-family: 'Roboto Flex';
      font-weight: 700;
      font-size: 18px;
      line-height: 115%;
      color: var(--text);
      @media (max-width: 767px) {
        font-size: 16px;
      }
      @media (max-width: 479px) {
        font-size: 14px;
      }
    }
    &-logo {
      flex: 0 1 64px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-title {
      color: var(--text);
    }
    &-burger {
      display: none;
      cursor: pointer;
      min-width: 24px;
      height: 18px;
      position: relative;
      z-index: 2;
      border-radius: 10px;
      @media (max-width: 991px) {
        display: block;
      }
      span {
        transition: 0.3s;
        height: 2px;
        position: absolute;
        border-radius: 10px;
        background-color: var(--text);
        transition: 0.3s;
        &:nth-child(1) {
          top: 0;
          width: 100%;
          transition: 0.3s;
        }
        &:nth-child(2) {
          top: calc(50% - 1px);
          width: 100%;
          transition: 0.3s;
        }
        &:nth-child(3) {
          top: calc(100% - 2px);
          width: 100%;
          transition: 0.3s;
        }
      }
      &.active {
        span {
          transition: 0.3s;
          &:nth-child(1) {
            top: 50%;
            transform: rotate(45deg);
          }
          &:nth-child(2) {
            display: none;
          }
          &:nth-child(3) {
            transform: rotate(-45deg);
            top: 50%;
          }
        }
      }
    }
  }
  &__bottom {
    width: 100%;
    border-top: 1px solid var(--white);
    border-bottom: 1px solid var(--white);
    @media (max-width: 992px) {
      display: none;
    }
    &-container {
      position: relative;
    }
    &-container-body {
    }
    &-menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 10px 0 10px 0;
      font-family: 'Roboto Flex';
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
    }
    &-items {
      cursor: pointer;
      transition: 0.3s ease;
      display: flex;
      flex-direction: column;
      color: var(--text);
      text-transform: uppercase;
      span:nth-child(1) {
        margin-top: 8px;
      }
      span:nth-child(2) {
        margin-top: 8px;
        height: 2px;
        width: 0%;
        transition: 0.3s ease;
        background: var(--primary);
        border-radius: 30px;
      }
      &:hover {
        color: var(--primary);
        & span:nth-child(2) {
          width: 100%;
        }
      }
      &.nuxt-link-active {
        .header__bottom-submenu-container {
          opacity: 1;
          visibility: visible;
        }
      }
      &._active {
        span:nth-child(1) {
          color: var(--primary);
        }
      }
    }
    // &-submenu-container{
    // }
    &-submenu-container {
      position: absolute;
      left: 50%;
      display: flex;
      width: 100vw;
      top: 50px;
      color: var(--text);
      background: var(--white);
      transform: translateX(-50%);
      //   border-top: 2px solid var(--border);
      opacity: 0;
      visibility: hidden;
      transition: 0.3s ease;
      overflow: auto;
      z-index: 5;
      //   border-top: 1px solid #000;
      //   border-bottom: 1px solid #000;
      // box-shadow: 2px 2px 21px rgb(0 0 0 / 15%);
      -moz-box-shadow: 0 4px 4px rgb(0 0 0 / 15%);
      -webkit-box-shadow: 0 4px 4px rgb(0 0 0 / 15%);
      box-shadow: 0 3px 3px rgb(0 0 0 / 15%);
    }
    &-submenu {
      display: flex;
      align-items: center;
      justify-content: center;
      //   overflow: auto;
      &::-webkit-scrollbar-track {
        background: transparent;
        display: none;
      }
      &::-webkit-scrollbar-thumb {
        background: var(--primary);
        display: none;
      }
      &::-webkit-scrollbar {
        background: transparent;
        display: none;
      }
      &::-webkit-scrollbar-corner {
        display: none;
        visibility: hidden;
        opacity: 0px;
      }
    }
    &-subitems {
      padding: 20px 0;
      display: flex;
      align-items: center;
      position: relative;
      transition: 0.3s ease;
      &:not(:first-child) {
        margin-left: 25px;
      }
      &:not(:last-child) {
        &::after {
          position: absolute;
          content: '';
          top: 50%;
          transform: translateY(-50%);
          right: -15px;
          background: var(--primary);
          height: 25%;
          width: 1px;
        }
      }
      span {
        white-space: nowrap;
        &:hover {
          color: var(--primary);
        }
      }
    }
  }
}
.header.active {
  position: fixed;
  width: 100%;
  top: 0px;
  background: rgb(0, 0, 0, 50%);
  z-index: 200;
  box-shadow: 2px 2px 21px rgb(0 0 0 / 15%);
  .header__mobile-title {
    color: var(--white);
  }
  .header__mobile-burger span {
    background-color: var(--white);
  }
  @media (max-width: 992px) {
    position: fixed;
    width: 100%;
    background: none;
    z-index: 100;
  }
  &__top {
    display: flex;
    align-items: center;
    @media (max-width: 992px) {
      display: none;
    }
    &-title {
      h2 {
        padding: 29px 0;
        font-family: 'Roboto Flex';
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        text-transform: uppercase;
        color: var(--white);
        cursor: pointer;
      }
    }
    &-logo {
      width: 84px;
      height: 84px;
      flex: 1 1 auto;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        cursor: pointer;
      }
    }
    &-content {
      display: flex;
      align-items: center;
      font-family: 'Roboto Flex';
      font-style: normal;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      text-transform: capitalize;
      color: var(--white);
      .languages {
        display: flex;
        justify-content: space-around;
        cursor: pointer;
        position: relative;
        transition: 2s ease;
        width: 200px;
        height: 25px;
        padding: 3px 0;
        font-weight: 400;
        .lang {
          display: flex;
          align-items: center;
          p {
            margin-left: 5px;
            padding-top: 3px;
            height: 100%;
            font-size: 18px;
          }
          img {
            width: 25px;
            height: 20px;
            object-fit: cover;
            object-position: center;
          }
        }
      }
      .contact {
        margin-left: 35px;
        position: relative;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 600;
        &::after {
          content: '';
          position: absolute;
          left: -15px;
          width: 2px;
          height: 100%;
          background: var(--white);
          opacity: 0.5;
        }
      }
    }
  }
  &__mobile {
    display: none;
    &.scroll {
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      .header__mobile-burger {
        span {
          background-color: #fff;
        }
      }
    }
    @media (max-width: 992px) {
      display: flex;
      align-items: center;
      position: relative;
      z-index: 100;
      padding: 20px;
    }
    &-logo-block {
      display: flex;
      align-items: center;
      flex: 1 1 auto;
      gap: 4px;
      @media (max-width: 479px) {
        gap: 2px;
      }
    }
    &-title {
      font-family: 'Roboto Flex';
      font-weight: 700;
      font-size: 18px;
      line-height: 115%;
      color: var(--white) !important;
      @media (max-width: 767px) {
        font-size: 16px;
      }
      @media (max-width: 479px) {
        font-size: 14px;
      }
    }
    &-logo {
      flex: 0 1 64px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-burger {
      display: none;
      cursor: pointer;
      min-width: 24px;
      height: 18px;
      position: relative;
      z-index: 2;
      border-radius: 10px;
      @media (max-width: 991px) {
        display: block;
      }
      span {
        transition: 0.3s;
        height: 2px;
        position: absolute;
        border-radius: 10px;
        background-color: #fff !important;
        transition: 0.3s;
        &:nth-child(1) {
          top: 0;
          width: 100%;
          transition: 0.3s;
        }
        &:nth-child(2) {
          top: calc(50% - 1px);
          width: 100%;
          transition: 0.3s;
        }
        &:nth-child(3) {
          top: calc(100% - 2px);
          width: 100%;
          transition: 0.3s;
        }
      }
      &.active {
        span {
          transition: 0.3s;
          &:nth-child(1) {
            top: 50%;
            transform: rotate(45deg);
          }
          &:nth-child(2) {
            display: none;
          }
          &:nth-child(3) {
            transform: rotate(-45deg);
            top: 50%;
          }
        }
      }
    }
  }
  &__bottom {
    width: 100%;
    // background: rgba(50, 50, 50, 0.512);
    // border-top: 1px solid var(--white);
    border-bottom: 1px solid #ffffff82;
    padding-bottom: 10px;
    @media (max-width: 992px) {
      display: none;
    }
    &-container {
      position: relative;
    }
    &-container-body {
    }
    &-menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 10px 0 0px 0;
      font-family: 'Roboto Flex';
      font-weight: 600;
      font-size: 18px;
      line-height: 21px;
    }
    &-items {
      cursor: pointer;
      transition: 0.3s ease;
      display: flex;
      flex-direction: column;
      color: var(--white);
      text-transform: uppercase;
      .some {
        position: relative;
        padding: 10px 0;
        &::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          width: 8px;
          height: 8px;
          left: -15px;
          top: 50%;
          opacity: 0;
          transform: translateY(-50%);
          background: var(--white);
        }
      }

      //   span:nth-child(2) {
      //     position: absolute;
      //     left: -10px;
      //     top: 50%;
      //     transform: translateX(-50%);
      //     height: 10px;
      //     width: 10px;
      //     opacity: 0;
      //     border-radius: 50%;
      //     transition: 0.3s ease;
      //     background: var(--white);
      //   }
      // &:hover {
      //   .some {
      //     &::after {
      //       opacity: 1;
      //     }
      //   }
      // }
      // &:hover .header__bottom-submenu-container {
      //   opacity: 1;
      //   visibility: visible;
      // }
      // &._active {
      //   span:nth-child(1) {
      //     color: var(--primary);
      //   }
      // }
    }
    // &-submenu-container{
    // }
    &-submenu-container {
      background: rgba(50, 50, 50, 0.512);
      position: absolute;
      left: 50%;
      display: flex;
      width: 100vw;
      top: 60px;
      color: var(--white);
      transform: translateX(-50%);
      //   border-top: 2px solid var(--border);
      opacity: 0;
      visibility: hidden;
      transition: 0.3s ease;
      overflow: auto;
      z-index: 5;
      border-top: 1px solid #ffffff82;
      border-bottom: 1px solid #ffffff82;
    }
    &-submenu {
      display: flex;
      align-items: center;
      justify-content: center;
      //   overflow: auto;
      &::-webkit-scrollbar-track {
        background: transparent;
        display: none;
      }
      &::-webkit-scrollbar-thumb {
        background: var(--primary);
        display: none;
      }
      &::-webkit-scrollbar {
        background: transparent;
        display: none;
      }
      &::-webkit-scrollbar-corner {
        display: none;
        visibility: hidden;
        opacity: 0px;
      }
    }
    &-subitems {
      padding: 17px 0;
      display: flex;
      align-items: center;
      position: relative;
      transition: 0.3s ease;
      &:not(:first-child) {
        margin-left: 25px;
      }
      &:not(:last-child) {
        &::after {
          position: absolute;
          content: '';
          top: 50%;
          transform: translateY(-50%);
          right: -15px;
          background: var(--white);
          height: 25%;
          width: 1px;
        }
      }
      span {
        white-space: nowrap;
        &:hover {
          color: var(--primary);
        }
      }
    }
  }
}
.header.active .header__top {
  display: flex;
  align-items: center;
  @media (max-width: 992px) {
    display: none;
  }
  &-title {
    h2 {
      padding: 29px 0;
      font-family: 'Roboto Flex';
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      text-transform: uppercase;
      color: var(--white);
      cursor: pointer;
    }
  }
  &-logo {
    width: 84px;
    height: 84px;
    flex: 1 1 auto;
    img {
      cursor: pointer;
    }
  }
  &-content {
    display: flex;
    align-items: center;
    font-family: 'Roboto Flex';
    font-style: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    text-transform: capitalize;
    color: var(--white);
    .languages {
      display: flex;
      cursor: pointer;
      position: relative;
      transition: 2s ease;
      align-items: center;
      justify-content: space-around;
      height: 25px;
      padding: 3px 0;
      font-weight: 400;

      &._active {
        font-weight: 600;
        opacity: 1;
        visibility: visible;
        color: var(--white);
      }
    }
    .contact {
      margin-left: 35px;
      position: relative;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: 600;
      &::after {
        content: '';
        position: absolute;
        left: -15px;
        width: 2px;
        height: 100%;
        background: var(--white);
        opacity: 0.5;
      }
    }
  }
}

.header.active .header__bottom {
  width: 100%;
  border-top: 1px solid #ffffff82;
  border-bottom: 1px solid #ffffff82;
  padding-bottom: 10px;
  &-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0 0px 0;
    font-family: 'Roboto Flex';
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
  }
  &-items {
    cursor: pointer;
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
    color: var(--white);
    text-transform: uppercase;
    span:nth-child(1) {
      margin-top: 8px;
    }
    span:nth-child(2) {
      margin-top: 8px;
      height: 2px;
      width: 0%;
      transition: 0.3s ease;
      background: var(--white);
      border-radius: 30px;
    }
    &:hover {
      color: var(--primary);
      & span:nth-child(2) {
        width: 100%;
      }
    }
    //  &:hover .header__bottom-submenu-container {
    //    opacity: 1;
    //    visibility: visible;
    //  }
    // &._active {
    //   span:nth-child(1) {
    //     color: var(--primary);
    //   }
    // }
  }

  &-submenu-container {
    background: rgba(50, 50, 50, 0.512);
    position: absolute;
    left: 50%;
    display: flex;
    width: 100vw;
    top: 60px;
    color: var(--white);
    transform: translateX(-50%);
    //   border-top: 2px solid var(--border);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease;
    overflow: auto;
    z-index: 5;
    border-top: 1px solid #ffffff82;
    border-bottom: 1px solid #ffffff82;
  }
  &-submenu {
    display: flex;
    align-items: center;
    justify-content: center;
    //   overflow: auto;
    &::-webkit-scrollbar-track {
      background: transparent;
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--primary);
      display: none;
    }
    &::-webkit-scrollbar {
      background: transparent;
      display: none;
    }
    &::-webkit-scrollbar-corner {
      display: none;
      visibility: hidden;
      opacity: 0px;
    }
  }
  &-subitems {
    padding: 17px 0;
    display: flex;
    align-items: center;
    position: relative;
    transition: 0.3s ease;
    &:not(:first-child) {
      margin-left: 25px;
    }
    &:not(:last-child) {
      &::after {
        position: absolute;
        content: '';
        top: 50%;
        transform: translateY(-50%);
        right: -15px;
        background: var(--white);
        height: 25%;
        width: 1px;
      }
    }
    span {
      white-space: nowrap;
      &:hover {
        color: var(--primary);
      }
    }
  }
}
.nuxt-link-exact-active,
.nuxt-link-active {
  color: var(--primary);
  & span:nth-child(2) {
    width: 100%;
  }
}
.header.active .nuxt-link-active {
  color: var(--white);
  font-weight: 700;
  & span:nth-child(2) {
    width: 100%;
  }
}
.header {
  &__mobile-bottom {
    display: none;
    @media (max-width: 992px) {
      display: flex;
      flex-direction: column;
      opacity: 1;
      visibility: visible;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(10px);
      overflow-y: auto;
      transform: translateX(100%);
      transition: 0.3s ease;
      &.active {
        transform: translateX(0);
      }
    }
  }
  &__mobile {
    &-lng-wrapper {
      display: flex;
      justify-content: center;
      gap: 54px;
      padding: 20px;
    }
    &-lng-block {
      padding: 6px;
      &.active {
        border-bottom: 1px solid #16ab65;
        span {
          color: #16ab65;
        }
      }
    }
    &-lng {
      font-family: 'Roboto Flex';
      font-weight: 500;
      font-size: 18px;
      line-height: 125%;
      color: #ffffff;
      @media (max-width: 767px) {
        font-size: 16px;
      }
      @media (max-width: 479px) {
        font-size: 14px;
      }
    }
  }
}
.menu-mobile {
  font-family: 'Roboto Flex';
  padding: 120px 10px 0px 10px;
  flex: 1 1 auto;
  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__item {
    &:hover {
      .menu-mobile__sub-list {
        opacity: 1;
        visibility: visible;
        height: 100%;
      }
      .menu-mobile__icon {
        rotate: 90deg;
        padding-right: 10px;
      }
    }
  }
  &__link-wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__link {
    font-weight: 700;
    font-size: 24px;
    line-height: 116%;
    color: #f5f5f5;
    @media (max-width: 479px) {
      font-size: 20px;
    }
  }
  &__icon {
    transition: all 0.3s;
  }
  &__sub-list {
    opacity: 0;
    visibility: hidden;
    height: 0px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;
    margin-left: 20px;
  }
  &__sub-item {
    display: flex;
    position: relative;
    transition: all 0.3s ease 0s;
    &:hover,
    &._active {
      padding-left: 15px;
      &:before {
        content: '';
        position: absolute;
        top: 34%;
        left: 0;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #16ab65;
      }
    }
  }
  &__sub-link {
    font-weight: 500;
    font-size: 22px;
    line-height: 116%;
    color: #f5f5f5;
    @media (max-width: 479px) {
      font-size: 18px;
    }
  }
}
</style>
