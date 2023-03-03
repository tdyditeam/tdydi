<template>
  <div :class="['input', { 'input--error': error }]">
    <div v-if="label" class="input__label">
      <span>{{ label }}</span>
    </div>
    <div class="input__body">
      <div
        v-if="prependIcon"
        class="input__prepend--icon"
        @click="$emit('clickPrepend')"
      >
        <img :src="require(`@/assets/icons/${prependIcon}`)" alt="" />
      </div>
      <input
        :placeholder="placeholder"
        class="input__body--body"
        :type="type"
        @input="(e) => $emit('updateValue', e.target.value)"
        :value="value"
      />
      <div
        v-if="appendIcon"
        class="input__append--icon"
        @click="$emit('clickAppend')"
      >
        <img :src="require(`@/assets/icons/${appendIcon}`)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      default: () => null,
    },
    placeholder: {
      type: String,
      default: () => '',
    },
    label: {
      type: String,
      default: () => '',
    },
    type: {
      type: String,
      default: () => 'text',
    },
    appendIcon: {
      type: String,
      default: () => '',
    },
    prependIcon: {
      type: String,
      default: () => '',
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.input {
  //   margin: 10px 0 0 0;  dasyna bermeli sul margini
  &__label {
    font-family: 'Roboto Flex';
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.135px;
    margin-bottom: 4px;
    color: var(--text);
  }
  &__body {
    display: flex;
    align-items: center;
    background: var(--input);
    padding: 12px 10px;
    border-radius: 4px;
    border: 1px solid transparent;
    @media (max-width: 768px) {
      padding: 2px 6px;
      border-radius: 6px;
    }
    &--body {
      font-family: 'Roboto Flex';
      flex: 1 1 auto;
      background: transparent;
      padding: 0px 10px;
      width: 100%;
    }
  }
  &__prepend--icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__append--icon {
    width: 20px;
    height: 20px;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &--error {
    animation: 0.2s invalid forwards;
    .input__label {
      color: var(--error);
    }
    .input__body {
      border: 1px solid var(--error);
    }
  }
}

@keyframes invalid {
  0% {
    transform: translateX(0px);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(0px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
