<template>
  <div class="admin-filelist">
    <div class="admin-filelist__title">
      <h2>{{ title }}</h2>
    </div>
    <div class="admin-filelist__content">
      <div @click="$emit('clickPhoto')" class="admin-filelist__content-fixsed">
        <img v-if="icon" :src="require(`@/assets/img/admin/${icon}`)" alt="" />
      </div>
      <div class="admin-filelist__content-wrapper">
        <div class="admin-filelist__content-list">
          <div
            v-for="item in items"
            :key="item.id"
            class="admin-filelist__content-img"
          >
            <div :class="[{ 'admin-filelist__content-indicators': indicator }]">
              <img src="@/assets/img/home/TheHistory.png" alt="" />
              <div v-if="indicator">
                <p>Hunarler</p>
                <p>154</p>
              </div>
            </div>
            <div class="admin-filelist__content-events">
              <span>
                <img src="@/assets/img/admin/trash.png" alt="" />
              </span>
              <span v-if="edit">
                <img src="@/assets/img/admin/edit.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="admin-filelist__arrow left">
      <img src="@/assets/img/admin/arrow.png" alt="" />
    </div>
    <div class="admin-filelist__arrow right">
      <img src="@/assets/img/admin/arrow.png" alt="" />
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: () => '',
    },
    icon: {
      type: String,
      default: () => '',
    },
    items: {
      type: Array,
      default: () => [],
    },
    edit: {
      type: Boolean,
      default: () => false,
    },
    indicator: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>

<style lang="scss" scoped>
.admin-filelist {
  width: 100%;
  background: var(--white);
  padding: 10px 20px;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  &__title {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: var(--text);
    margin-bottom: 8px;
  }
  &__content {
    display: flex;
    width: 99%;
    &-fixsed {
      width: 150px;
      height: 150px;
      border-radius: 4px;
      border: 2px dashed #969494;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 30px;
      img {
        width: 40px;
        height: 40px;
        object-fit: contain;
        object-position: center;
      }
    }
    &-wrapper {
      width: 100%;
      padding-bottom: 5px;
      overflow: auto;
      &::-webkit-scrollbar-track {
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: var(--primary);
        border-radius: 10px;
      }

      &::-webkit-scrollbar {
        height: 5px;

        background: transparent;
      }
      &::-webkit-scrollbar-corner {
        visibility: hidden;
        opacity: 0px;
      }
    }
    &-list {
      display: flex;
    }
    &-img {
      display: flex;
      align-items: flex-start;
      &:not(:first-child) {
        margin-left: 10px;
      }
      img {
        width: 150px;
        height: 150px;
        border-radius: 4px;
        object-position: center;
        object-fit: cover;
      }
    }
    &-events {
      display: flex;
      flex-direction: column;
      span {
        padding: 4px;
        background: var(--background-second);
        border-radius: 4px;
        margin-left: 10px;
        cursor: pointer;
        margin-bottom: 5px;
        img {
          width: 16px;
          height: 16px;
          object-fit: cover;
          object-position: center;
        }
      }
    }
    &-indicators {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 37px;
      img {
        width: 60px;
        height: 60px;
        margin-right: 18px;
      }
      p {
        text-align: center;
        &:first-child {
          font-weight: 600;
          font-size: 16px;
          line-height: 19px;
          text-align: center;
          color: #16ab65;
        }
        &:nth-child(2) {
          font-weight: 400;
          font-size: 17.4667px;
          line-height: 20px;
          text-align: center;
          color: #333333;
        }
      }
    }
  }
  &__arrow {
    position: absolute;
    width: 20px;
    height: 20px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
    &.left {
      left: 0;
      top: 0;
    }
  }
}
</style>
