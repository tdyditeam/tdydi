<template>
  <header class="header">
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
          <img src="@/assets/icons/logo.png" alt="logo" />
        </div>
        <div class="header__top-content">
          <div class="languages">
            <nuxt-link
              :class="['lang__item', { _active: $i18n.locale == locale.code }]"
              exact
              v-for="locale in $i18n.locales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              {{ locale.name }}
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
            <img src="@/assets/icons/logo.png" alt="logo" />
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
              <nuxt-link
                :to="localePath('/')"
                exact
                class="header__bottom-items"
              >
                <span>{{ $t('header.menu.main') }}</span
                ><span></span>
              </nuxt-link>
              <client-only v-for="item in menuItems" :key="item.id">
                <nuxt-link
                  :to="localePath(`${item.path}`)"
                  class="header__bottom-items"
                >
                  <span>{{ item.name }}</span>
                  <span></span>
                  <div class="header__bottom-submenu-container">
                    <div class="header__bottom-submenu __container">
                      <div
                        v-for="subMenu in item.subMenus"
                        :key="subMenu.id"
                        class="header__bottom-subitems"
                      >
                        <nuxt-link :to="localePath(`${subMenu.path}`)" exact>
                          <span>{{ subMenu.name }}</span>
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </nuxt-link>
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
              v-for="item in menuItems"
              :key="item.id"
              class="menu-mobile__item"
            >
              <div class="menu-mobile__link-wrapper">
                <div class="menu-mobile__link">{{ item.name }}</div>
                <div class="menu-mobile__icon">
                  <img
                    src="@/assets/img/home/header/icon-right.svg"
                    alt="icon"
                  />
                </div>
              </div>
              <div class="menu-mobile__sub-list">
                <div
                  v-for="subMenu in item.subMenus"
                  :key="subMenu.id"
                  class="menu-mobile__sub-item"
                >
                  <div class="menu-mobile__sub-link">{{ subMenu.name }}</div>
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
export default {
  data() {
    return {
      isActive: false,
      isMobileActive: false,
    }
  },
  computed: {
    menuItems() {
      let menus = [
        {
          id: 2,
          name: this.$t('header.menu.aboutUs.name'),
          path: '/about-us',
          exact: false,
          subMenus: [
            {
              id: 1,
              name: this.$t('header.menu.aboutUs.rektorat'),
              path: '/about-us/rektorat',
            },
            {
              id: 2,
              name: this.$t('header.menu.aboutUs.fakulties'),
              path: '/about-us/faculties/economical',
            },
            {
              id: 3,
              name: this.$t('header.menu.aboutUs.departments'),
              path: '/about-us/departments/accounting',
            },
            {
              id: 6,
              name: this.$t('header.menu.aboutUs.publicOrganizations'),
              path: '/about-us/public-organizations/0',
            },
            {
              id: 9,
              name: this.$t('header.menu.aboutUs.studyCenter'),
              path: '/about-us/study-center/0',
            },
            {
              id: 10,
              name: this.$t('header.menu.aboutUs.library'),
              path: '/about-us/library',
            },
            {
              id: 7,
              name: this.$t('header.menu.aboutUs.tradeUnion'),
              path: '/about-us/trade-union',
            },
          ],
        },
        {
          id: 3,
          name: this.$t('header.menu.education.name'),
          path: '/education',
          exact: false,
          subMenus: [
            {
              id: 1,
              name: this.$t('header.menu.education.skills'),
              path: '/education',
            },
            {
              id: 2,
              name: this.$t('header.menu.education.undergraduateCourses'),
              path: '/education/undergraduate-courses',
            },
            {
              id: 3,
              name: this.$t('header.menu.education.mastersCourses'),
              path: '/education/masters-training-courses',
            },
          ],
        },
        {
          id: 4,
          name: this.$t('header.menu.science.name'),
          path: '/science',
          exact: false,
          subMenus: [
            {
              id: 1,
              name: this.$t('header.menu.science.postgraduate'),
              path: '/science',
            },
            {
              id: 2,
              name: this.$t('header.menu.science.researchProjectWork'),
              path: '/science/research-and-project-work',
            },
            {
              id: 3,
              name: this.$t('header.menu.science.centerEconomicInnovation'),
              path: '/science/center-for-economic-innovation',
            },
            {
              id: 4,
              name: this.$t('header.menu.science.scientificAdvice'),
              path: '/science/scientific-advice',
            },
            {
              id: 5,
              name: this.$t('header.menu.science.scientificInstitutions'),
              path: '/science/scientific-institutions',
            },
          ],
        },
        {
          id: 5,
          name: this.$t('header.menu.internationalCooperation.name'),
          path: '/international-cooperation',
          exact: false,
          subMenus: [
            {
              id: 1,
              name: this.$t(
                'header.menu.internationalCooperation.internationalPartners'
              ),
              path: '/international-cooperation',
            },
            {
              id: 2,
              name: 'Halkara maslahatlar',
              name: this.$t(
                'header.menu.internationalCooperation.internationalTips'
              ),
              path: '/international-cooperation/international-tips',
            },
            {
              id: 3,
              name: this.$t(
                'header.menu.internationalCooperation.internationalProjects'
              ),
              path: '/international-cooperation/international-projects',
            },
          ],
        },
        {
          id: 7,
          name: this.$t('header.menu.competitions.name'),
          path: '/competitions',
          exact: false,
          subMenus: [
            {
              id: 1,
              name: this.$t('header.menu.competitions.lessonCompetitions'),
              path: '/competitions',
            },
            {
              id: 3,
              name: this.$t('header.menu.competitions.scientificCompetitions'),
              path: '/competitions/scientific-competitions',
            },
            {
              id: 4,
              name: this.$t('header.menu.competitions.teacherCompetitions'),
              path: '/competitions/teacher-of-the-year-competitions',
            },
            {
              id: 5,
              name: this.$t('header.menu.competitions.studentCompetitions'),
              path: '/competitions/student-of-the-year-competitions',
            },
            {
              id: 7,
              name: this.$t(
                'header.menu.competitions.internationalCompetitions'
              ),
              path: '/competitions/international-online-internet-course-competitions',
            },
          ],
        },
        {
          id: 6,
          name: this.$t('header.menu.candidate.name'),
          path: '/candidate',
          exact: false,
          subMenus: [
            {
              id: 1,
              name: this.$t('header.menu.candidate.name'),
              path: '/candidate',
            },
            {
              id: 2,
              name: this.$t('header.menu.candidate.magistr'),
              path: '/candidate/magistr',
            },
          ],
        },
      ]
      return menus
    },
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
  },
  methods: {
    showPopUp() {
      document.body.classList.add('_lock')
      this.isActive = true
    },
    closePopUp() {
      document.body.classList.remove('_lock')
      this.isActive = false
    },
  },
}
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0px;
  background: #fff;
  z-index: 200;
  box-shadow: 2px 2px 21px rgb(0 0 0 / 15%);
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
        color: var(--text);
        cursor: pointer;
        &:hover {
          color: var(--primary);
        }
      }
    }
    &-logo {
      width: 84px;
      height: 84px;
      flex: 1 1 auto;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
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
        cursor: pointer;
        position: relative;
        width: 150px;
        transition: 2s ease;
        height: 25px;
        padding: 3px 0;
        &:hover .lang__item {
          &:nth-child(1) {
            transform: translateX(-75px);
          }
          &:nth-child(2) {
            transform: translateX(-37px);
          }
          opacity: 1;
          visibility: visible;
        }
        .lang__item {
          position: absolute;
          right: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease;

          &:not(:last-child) {
            margin-right: 5px;
          }
          &:hover {
            color: var(--primary);
          }
          &._active {
            opacity: 1;
            visibility: visible;
            color: var(--primary);
          }
        }
      }
      .contact {
        margin-left: 35px;
        position: relative;
        cursor: pointer;
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
      width: 24px;
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
        background-color: #333333;
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
      &:hover .header__bottom-submenu-container {
        opacity: 1;
        visibility: visible;
      }
      // &._active {
      //   span:nth-child(1) {
      //     color: var(--primary);
      //   }
      // }
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
.nuxt-link-exact-active,
.nuxt-link-active {
  color: var(--primary);
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
