<template>
  <div class="button" :style="{ backgroundColor: background }">
    <button>{{ text }}</button>
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
  },
}
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  border-radius: 4px;
  padding: 12px 0;
  button {
    width: 100%;
    background: transparent;
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: var(--white);
  }
}
</style>
