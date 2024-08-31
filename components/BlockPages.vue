<template>
  <div class="block__wrapper">
    <div class="block__content">
      <title-block-pages :title="title" v-if="title"></title-block-pages>
      <div class="block__sub-content" v-if="datas">
        <ul class="block__nav-list">
          <li
            id="catItem_1"
            class="cat-nav--list-item"
            v-for="menu in datas.children"
            :key="menu.id"
            @click="clickSubCategory(datas, menu)"
          >
            <a
              @click.prevent
              :class="[
                {
                  active: routeSubActive === menu.id,
                },
              ]"
            >
              <img :src="`${imageUrl}${menu.image}`" />
              <span>{{ subMenuLocale(menu) }}</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="block__description">
        <div class="block__description-img-pdf" v-if="img && imgPdf">
          <!-- <img :src="require(`@/assets/img/about-us/${img}`)" alt="" /> -->
          <!-- <a href="http://" target="_blank" rel="noopener noreferrer"
            ><img src="@/assets/img/about-us/zurnal.png" alt=""
          /></a>
          <a href="http://" target="_blank" rel="noopener noreferrer"
            ><img src="@/assets/img/about-us/zurnal2.png" alt=""
          /></a> -->
        </div>
        <div
          :class="[
            'block__description-img',
            { 'block__description-imgContain': contain },
          ]"
          v-if="img && !imgPdf"
        >
          <img :src="`${imageUrl}${img}`" alt="" />
        </div>
        <div v-html="description" class="block__description-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    description: {
      type: String,
      default: () => '',
    },
    title: {
      type: String,
      default: () => '',
    },
    img: {
      type: String,
      default: () => '',
    },
    imgPdf: {
      type: Boolean,
      default: () => false,
    },
    contain: {
      type: Boolean,
      default: () => false,
    },
    datas: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      routeSubActive: Number(this.$cookies.get('subId')),
    }
  },
  watch: {
    $route: function (val) {
      const subId = Number(this.$cookies.get('subId'))
      this.routeSubActive = subId
    },
  },
  computed: {
    ...mapGetters(['imageUrl']),
  },
  methods: {
    clickSubCategory(parent, child) {
      console.log(parent, child)
      this.$cookies.set('subId', child.id)
      this.routeSubActive = child.id
      if (child.slug && child.slug !== 'null') {
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
    subMenuLocale(subMenu) {
      if (this.$i18n.locale === 'tm') {
        return subMenu.name_tm
      } else if (this.$i18n.locale === 'ru') {
        return subMenu.name_ru
      } else {
        return subMenu.name_en
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.block__wrapper {
  display: flex;
}
.block__content {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
}
.block__sub-content {
  width: 100%;
  margin: 10px 0px 20px 0px;
}
.block__nav-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 20px;
  list-style: none;
  margin: 0;
}
.cat-nav--list-item {
  cursor: pointer;
  &:hover {
    a:after {
      opacity: 1;
    }
  }
}
// .cat-nav--list-item.active a:after {
//   opacity: 1;
// }
.cat-nav--list-item a {
  position: relative;
  display: flex;
  height: 160px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  img {
    width: 90px;
    height: 90px;
    flex-shrink: 0;
  }
  span {
    color: #000;
    text-align: center;
    font-family: Roboto Flex;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  &:after {
    position: absolute;
    display: block;
    content: '';
    width: 100%;
    height: 4px;
    background-color: #dadddf;
    border-radius: 6px 6px 0 0;
    bottom: 0;
    opacity: 0;
    transition: 0.4s;
    z-index: 9;
  }
  &.active {
    &:after {
      opacity: 1;
    }
  }
}
.block__title {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
}
.block__title-text {
  position: relative;
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: var(--primary);
  border-left: 3px solid var(--primary);
  padding: 0px 20px;
}
.block__description {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
.block__description-img {
  width: 100%;
  height: 500px;
  margin-bottom: 30px;
  @media (max-width: 700px) {
    height: 350px;
  }
  @media (max-width: 500px) {
    height: 250px;
  }
}
.block__description-img-pdf {
  width: 100%;
  height: 400px;
  margin-bottom: 30px;
  padding: 22px 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 100%;
    width: 550px;
    cursor: pointer;
    object-fit: contain;
    object-position: center center;
    &:hover {
      filter: drop-shadow(5px 4px 12px rgba(0, 0, 0, 0.1));
    }
  }
}
.block__description-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  object-position: center center;
  @media (max-width: 720px) {
    object-fit: fill;
  }
}
.block__description-imgContain img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 10px;
  object-position: center center;
  @media (max-width: 720px) {
    object-fit: fill;
  }
}
.block__description-content {
  //   max-width: 900px;
  font-family: 'Roboto Flex';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  text-align: justify;
  color: #000000;
  &:deep() {
    a {
      text-decoration: underline;
      color: var(--primary);
    }
  }
}
.block__menu {
  margin-left: 73px;
}
</style>
