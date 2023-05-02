<template>
  <div :class="['button', { active: isActive }]" @click="$emit('click')">
    <button :disabled="disabled">
      <span class="button__text">{{ text }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: () => '',
    },
    appendIcon: {
      type: Boolean,
      default: () => false,
    },
    iconUrl: {
      type: String,
      default: () => '',
    },
    isActive: {
      type: Boolean,
      default: () => false,
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  border-radius: 9px;
  padding: 12px 14px;
  text-align: center;
  cursor: pointer;
  background-color: #e5f3ff;
  @media (max-width: 768px) {
    padding: 4px 10px;
  }
  button {
    text-align: center;
    background: transparent;
    font-family: 'Roboto Flex';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    white-space: nowrap;
    @media (max-width: 768px) {
      font-size: 12px;
      text-transform: capitalize;
      line-height: 14px;
    }
  }
  &__text {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #16ab65;
  }
  &__append-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
  }
  &.active {
    background: #16ab65;
    .button__text {
      color: #fff;
    }
  }
  &:hover {
    background: #16ab65;
    .button__text {
      color: #fff;
    }
  }
}
</style>
