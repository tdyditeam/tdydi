<template>
  <header class="header">
    <div class="">
      <div class="header__top __container">
        <div
          class="header__top-title"
          @click="$router.push(localeLocation('/'))"
        >
          <h2>
            Türkmen döwlet ykdysadyýet <br />
            we dolandyryş instituty
          </h2>
        </div>
        <div
          class="header__top-logo"
          @click="$router.push(localeLocation('/'))"
        >
          <img src="@/assets/icons/logo.png" alt="" />
        </div>
        <div class="header__top-content">
          <div class="languages">
            <span class="_active">TM</span>
            <span>RU</span>
            <span>EN</span>
          </div>
          <div class="contact" @click="showPopUp">Contact</div>
        </div>
      </div>
      <div class="header__bottom">
        <div class="header__bottom-container __container">
          <ul class="header__bottom-menu">
            <nuxt-link :to="'/'" class="header__bottom-items" exact>
              <span>Baş sahypa</span><span></span>
            </nuxt-link>
            <nuxt-link
              v-for="item in menus"
              :key="item.id"
              :to="localePath(`${item.path}`)"
              class="header__bottom-items"
            >
              <span>{{ item.name }}</span>
              <span></span>
              <div class="header__bottom-submenu-container">
                <ul class="header__bottom-submenu __container">
                  <nuxt-link
                    v-for="subMenu in item.subMenus"
                    :key="subMenu.id"
                    :to="localePath(`${subMenu.path}`)"
                    exact
                    class="header__bottom-subitems"
                  >
                    <span>{{ subMenu.name }}</span>
                  </nuxt-link>
                </ul>
              </div>
            </nuxt-link>
          </ul>
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
      menus: [
        {
          id: 2,
          name: 'Biz barada',
          path: '/about-us',
          subMenus: [
            {
              id: 5,
              name: 'Institutyň taryhy',
              path: '/about-us',
            },
            {
              id: 1,
              name: 'Rektorat',
              path: '/about-us/rektorat',
            },
            {
              id: 2,
              name: 'Fakultetler',
              path: '/about-us/faculties',
            },
            {
              id: 3,
              name: 'Kafedralar',
              path: '/about-us/departments',
            },
            {
              id: 4,
              name: 'Bölümler',
              path: '/about-us/categories',
            },
            {
              id: 6,
              name: 'Institutyň TDP',
              path: '/about-us/tdp--of-the-institute',
            },
            {
              id: 7,
              name: 'Kärdeşler arkalaşygy',
              path: '/about-us/trade-union',
            },
            {
              id: 8,
              name: 'Talyp ýaşlar guramasy',
              path: '/about-us/student-youth-organization',
            },
            {
              id: 9,
              name: 'Zenanlar guramasy',
              path: '/about-us/womens-organization',
            },
            {
              id: 10,
              name: 'Kitaphana',
              path: '/about-us/library',
            },
            {
              id: 11,
              name: 'Ykdysatçy okuw merkezi',
              path: '/about-us/economist-training-center',
            },
          ],
        },
        {
          id: 3,
          name: 'Bilim',
          path: '/education',
          subMenus: [
            {
              id: 1,
              name: 'Okuw bölümi',
              path: '/education',
            },
            {
              id: 2,
              name: 'Okuw meýilnamalar',
              path: '/education',
            },
            {
              id: 3,
              name: 'Okuw maksatnamalar',
              path: '/education',
            },
            {
              id: 4,
              name: 'Okuwlaryň tertibi',
              path: '/education',
            },
            {
              id: 5,
              name: 'Hünärler',
              path: '/education',
            },
            {
              id: 6,
              name: 'Bakalawr taýýarlyk ugurlary',
              path: '/education',
            },
            {
              id: 7,
              name: 'Magistr taýýarlyk ugurlary',
              path: '/education',
            },
          ],
        },
        {
          id: 4,
          name: 'Ylym ',
          path: '/science',
          subMenus: [
            {
              id: 1,
              name: 'Aspirantura',
              path: '/science',
            },
            {
              id: 2,
              name: 'Ylmy barlag we taslama işleri',
              path: '/science',
            },
            {
              id: 3,
              name: 'Ykdysady innowasiýalar merkezi',
              path: '/science',
            },
            {
              id: 4,
              name: 'Ylmy gT we tyu boýunça geçirilýän işler',
              path: '/science',
            },
          ],
        },
        {
          id: 5,
          name: 'Halkara hyzmatdaşlygy',
          path: '/international-cooperation',
          subMenus: [
            {
              id: 1,
              name: 'Halkara hyzmatdaşlar',
              path: '/international-cooperation',
            },
            {
              id: 2,
              name: 'Halkara maslahatlar',
              path: '/international-cooperation',
            },
            {
              id: 3,
              name: 'Meýletinçiler',
              path: '/international-cooperation',
            },
          ],
        },
        {
          id: 7,
          name: 'Bäsleşikler',
          path: '/competitions',
          subMenus: [
            {
              id: 1,
              name: 'Döwlet bäsleşikler',
              path: '/competitions',
            },
            {
              id: 2,
              name: 'Halkara bäsleşikler',
              path: '/competitions',
            },
            {
              id: 3,
              name: 'Taslama bäsleşikler',
              path: '/competitions',
            },
          ],
        },
        {
          id: 6,
          name: 'Dalaşgär-2023',
          path: '/candidate',
          subMenus: [],
        },
      ],
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
  //   box-shadow: 2px 2px 21px rgb(0 0 0 / 15%);
  &__top {
    display: flex;
    align-items: center;
    &-title {
      h2 {
        padding: 29px 0;
        font-family: 'Gilroy';
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
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 500;
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
        &:hover span {
          &:nth-child(1) {
            transform: translateX(-75px);
          }
          &:nth-child(2) {
            transform: translateX(-37px);
          }
          opacity: 1;
          visibility: visible;
        }
        span {
          position: absolute;
          right: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease;
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
  &__bottom {
    width: 100%;
    border-top: 1px solid var(--white);
    border-bottom: 1px solid var(--white);
    &-container {
      position: relative;
    }
    &-menu {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 10px 0 10px 0;
      font-family: 'Gilroy';
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
    }
    &-items {
      cursor: pointer;
      transition: 0.3s ease;
      display: flex;
      flex-direction: column;
      color: var(--text);
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
    }
    &-submenu {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: auto;
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
      margin-left: 15px;
      display: flex;
      align-items: center;
      position: relative;
      transition: 0.3s ease;
      margin-left: 25px;
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
</style>
