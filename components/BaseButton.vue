<template>
  <div class="button" :style="{ backgroundColor: background }">
    <button
      @click="$emit('click')"
      :style="{
        color: color,
      }"
    >
      {{ text }}
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
  },
}
</script>

<style lang="scss" scoped>
.button {
  border-radius: 4px;
  padding: 12px;
  text-align: center;
  button {
    text-align: center;
    background: transparent;
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
  }
}
</style>
