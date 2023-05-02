<template>
  <div class="">
    <div class="departments-sidebar">
      <div class="departments-sidebar__row">
        <div
          class="departments-sidebar__item"
          v-for="subMenu in subMenus"
          :key="subMenu.id"
        >
          <a
            href="#"
            :class="[{ active: activeId === subMenu.id }]"
            @click.prevent="$emit('changeDatas', subMenu.id)"
            >{{ subMenu.name }}</a
          >
        </div>
      </div>
    </div>
    <div class="sidebar-mini">
      <div class="sidebar-mini__flex">
        <nuxt-link
          to="/"
          class="sidebar-mini__button"
          v-for="link in 20"
          :key="link"
          >Fakultetlar</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subMenus: {
      type: Array,
      default: () => [],
    },
    activeId: {
      type: Number,
      default: () => null,
    },
  },
}
</script>

<style lang="scss" scoped>
.nuxt-link-active {
  background-color: #16ab65;
  color: #f5f5f5;

  .relative {
    position: relative;
  }
}
.departments-sidebar {
  margin-top: 10px;
  margin-left: 40px;
  height: fit-content;
  background-color: #f6f6f6;
  border-radius: 8px;
  @media (max-width: 992px) {
    display: none;
  }
  &__row {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
  }

  &__item {
    width: 367px;
    cursor: pointer;
    a {
      display: block;
      width: 100%;
      padding: 13.5px;
      font-family: 'Roboto Flex';
      border-radius: 4px;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: var(--text);
      text-align: center;
      transition: all 0.3s;
      &:hover {
        background-color: #dedede;
      }
      &.active {
        background-color: #16ab65;
        color: #fff;
        &:hover {
          background-color: #16ab65;
          color: #fff;
        }
      }
    }
  }
}
.sidebar-mini {
  display: none;
  @media (max-width: 992px) {
    display: block;
    width: 100%;
    position: absolute;
    left: 0px;
    top: -45px;
    ::-webkit-scrollbar {
    }
    ::-webkit-scrollbar-thumb {
      height: 1px;
    }
    &__flex {
      display: flex;
      grid-template-columns: fit-content(40%);
      overflow-x: auto;
      width: 100%;
      gap: 10px;
    }

    &__button {
      padding: 6px 10px;
      background-color: #f5f5f5;
      border-radius: 5px;
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;
      color: #333333;
      @media (max-width: 492px) {
        font-size: 12px;
      }
    }
  }
}
</style>
