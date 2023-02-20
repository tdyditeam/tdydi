<template>
  <div class="title-block">
    <div class="title-block__row">
      <div class="title-block__title">{{ title }}</div>
      <div v-if="items.length" class="title-block__buttons buttons-title-block">
        <button
          v-for="(item, index) in items"
          :key="index"
          :class="[
            'buttons-title-block__button buttons-title-block__button--green',
            { 'buttons-title-block__button--active': activeId === item.id },
          ]"
          @click="$emit('change', item)"
        >
          {{ item && item.name }}
        </button>
        <button
          v-if="isAll"
          @click="$router.push(localeLocation(`/events/${activeId}`))"
          class="buttons-title-block__button buttons-title-block__button--green buttons-title-block__button--dark"
        >
          {{ $t('button.all') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: () => '',
      type: String,
    },
    btns: {
      default: () => false,
      type: Boolean,
    },
    items: {
      default: () => [],
      type: Array,
    },
    activeId: {
      type: Number,
      default: 1,
    },
    isAll: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>

<style lang="scss" scoped>
.title-block {
  padding-bottom: 20px;
  &__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 1px solid #808884;
  }

  &__title {
    font-weight: 500;
    font-size: 40px;
    line-height: 117.5%;
    @media (max-width: 767px) {
      font-size: 26px;
    }
    @media (max-width: 479px) {
      font-size: 16px;
    }
  }

  &__buttons {
  }
}
.buttons-title-block {
  display: flex;
  gap: 5px;
  &__button {
    padding: 14px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 116.6%;
    color: #16ab65;
    border-radius: 0;
    background-color: #e5f3ff;
    transition: all 0.3s;
    &:hover {
      background-color: #16ab65;
      color: #fff;
    }
    &:first-child {
      border-radius: 6px 0px 0px 6px;
    }
    &:last-child {
      border-radius: 0px 6px 6px 0px;
    }
    &--active {
      background-color: #16ab65;
      color: #fff;
    }
    &--dark {
      color: #fff;
      background-color: #333333;
      &:hover {
        background-color: #4f4e4e;
      }
    }
    @media (max-width: 479px) {
      font-size: 12px;
      padding: 8px 12px;
    }
  }
}
</style>
