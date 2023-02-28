<template>
  <div class="title-block-pages">
    <div class="title-block-pages__row">
      <div class="title-block-pages__title-wrapper">
        <h2 class="title-block-pages__title">{{ title }}</h2>
      </div>
      <div class="title-block-pages__button-wrapper" v-if="isButton">
        <base-button
          :text="text"
          :appendIcon="appendIcon"
          :iconUrl="iconUrl"
          isActive
          @click="$emit('clicked')"
        >
        </base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isButton: {
      type: Boolean,
      default: () => false,
    },
    text: {
      type: String,
      default: () => '',
    },
    title: {
      type: String,
      default: () => '',
    },
    iconUrl: {
      type: String,
      default: () => '',
    },
    appendIcon: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>

<style lang="scss" scoped>
.title-block-pages {
  padding: 0px 0px 20px 0px;
  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title-wrapper {
    flex: 1 1 auto;
  }

  &__title {
    font-family: 'Roboto Flex';
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    text-transform: uppercase;
    color: #16ab65;
    &::before {
      content: '';
      border-left: 3px solid;
      padding-right: 20px;
    }
  }

  &__button-wrapper {
  }

  &__button {
    font-family: 'Roboto Flex';
    display: flex;
    gap: 5px;
    background-color: #16ab65;
    border-radius: 9px;
    color: #fff;
    padding: 12px 14px;
    span {
      margin-top: 2px;
    }
  }
}
</style>
