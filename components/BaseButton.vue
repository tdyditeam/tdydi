<template>
  <div class="button" :style="{ backgroundColor: background }">
    <button
      @click="$emit('click')"
      :style="{
        color: color,
      }"
    >
      <span class="button__text">{{ text }}</span>
      <span class="button__append-icon" v-if="appendIcon"
        ><img :src="require(`@/assets/img/${iconUrl}`)" alt=""
      /></span>
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
    background: {
      type: String,
      default: () => '#16ab65',
    },
    color: {
      type: String,
      default: () => '#fff',
    },
    appendIcon: {
      type: Boolean,
      default: () => false,
    },
    iconUrl: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  border-radius: 4px;
  padding: 12px;
  text-align: center;
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 4px 10px;
  }
  button {
    text-align: center;
    background: transparent;
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
  }
  &__append-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
  }
}
</style>
