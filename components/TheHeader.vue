<template>
  <div class="header">
    <div class="">
      <div class="header__top __container">
        <div class="header__top-title">
          <h2>
            Türkmen döwlet ykdysadyýet <br />
            we dolandyryş instituty
          </h2>
        </div>
        <div class="header__top-logo">
          <img src="@/assets/icons/logo.png" alt="" />
        </div>
        <div class="header__top-content">
          <div class="languages">
            <span class="_active">TM</span>
            <span>RU</span>
            <span>EN</span>
          </div>
          <div class="contact">Contact</div>
        </div>
      </div>
      <div class="header__bottom">
        <ul class="header__bottom-menu">
          <li v-for="item in menu" :key="item.id" class="header__bottom-items">
            <span>{{ item.name }}</span>
            <span></span>
            <ul class="header__bottom-submenu">
              <li
                v-for="elem in item.subMenus"
                :key="elem.id"
                class="header__bottom-subitems"
              >
                <span>{{ elem.name }}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          id: 1,
          name: 'Baş sahypa',
          subMenus: [
            {
              id: 1,
              name: 'Rektorat',
            },
            {
              id: 2,
              name: 'Fakultetler',
            },
            {
              id: 3,
              name: 'Kafedralar',
            },
            {
              id: 4,
              name: 'Bölümler',
            },
            {
              id: 5,
              name: 'Institutyň taryhy',
            },
            {
              id: 6,
              name: 'Institutyň TDP',
            },
            {
              id: 7,
              name: 'Kärdeşler arkalaşygy',
            },
            {
              id: 8,
              name: 'Talyp ýaşlar guramasy',
            },
            {
              id: 9,
              name: 'Zenanlar guramasy',
            },
            {
              id: 10,
              name: 'Kitaphana',
            },
            {
              id: 11,
              name: 'Ykdysatçy okuw merkezi',
            },
            {
              id: 11,
              name: 'Ykdysatçy okuw merkezi',
            },
            {
              id: 11,
              name: 'Ykdysatçy okuw merkezi',
            },
            {
              id: 11,
              name: 'Ykdysatçy okuw merkezi',
            },
            {
              id: 11,
              name: 'Ykdysatçy okuw merkezi',
            },
            {
              id: 11,
              name: 'Ykdysatçy okuw merkezi',
            },
            {
              id: 11,
              name: 'Ykdysatçy okuw merkezi',
            },
          ],
        },
        {
          id: 2,
          name: 'Biz barada',
          subMenus: [
            {
              id: 1,
              name: 'Rektorat',
            },
            {
              id: 2,
              name: 'Fakultetler',
            },
            {
              id: 3,
              name: 'Kafedralar',
            },
            {
              id: 4,
              name: 'Bölümler',
            },
            {
              id: 5,
              name: 'Institutyň taryhy',
            },
            {
              id: 6,
              name: 'Institutyň TDP',
            },
            {
              id: 7,
              name: 'Kärdeşler arkalaşygy',
            },
            {
              id: 8,
              name: 'Talyp ýaşlar guramasy',
            },
          ],
        },
        {
          id: 3,
          name: 'Bilim',
        },
        {
          id: 4,
          name: 'Ylym ',
        },
        {
          id: 5,
          name: 'Halkara hyzmatdaşlygy',
        },
        {
          id: 7,
          name: 'Bäsleşikler-2022',
        },
        {
          id: 6,
          name: 'Dalaşgär-2022',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  //   background: #fff;
  z-index: 2;
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
          //   top: 50%;
          //   transform: translateY(-50%);
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
          background: #333333;
        }
      }
    }
  }
  &__bottom {
    width: 100%;
    border-top: 1px solid var(--white);
    border-bottom: 1px solid var(--white);
    &-menu {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      padding: 10px 0 10px 0;
      font-family: 'Gilroy';
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      position: relative;
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
      &:hover .header__bottom-submenu {
        opacity: 1;
        visibility: visible;
      }
    }
    &-submenu {
      position: absolute;
      left: 0;
      display: flex;
      width: 100%;
      top: 48px;
      color: var(--text);
      //   border-top: 2px solid var(--border);
      opacity: 0;
      visibility: hidden;
      transition: 0.3s ease;
      overflow: auto;

      z-index: 1;
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
</style>
