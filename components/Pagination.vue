<template>
  <ul :class="paginationClasses.ul">
    <li
      v-if="paginationLabels.prev"
      :class="`${paginationClasses.li} ${
        hasFirst ? paginationClasses.liDisable : ''
      }`"
    >
      <button
        @click="prev"
        :disabled="hasFirst"
        :class="`${paginationClasses.button} ${
          hasFirst ? paginationClasses.buttonDisable : ''
        }`"
      >
        <span class="mdi"><img src="@/assets/img/chevron-left.svg" /></span>
        <span class="mdi"
          ><img src="@/assets/img/chevron-left-white.svg"
        /></span>
      </button>
    </li>

    <li
      v-for="page in items"
      :key="page.label"
      :class="`${paginationClasses.li} ${
        page.active ? paginationClasses.liActive : ''
      } ${page.disable ? paginationClasses.liDisable : ''}`"
    >
      <span
        v-if="page.disable"
        :class="`${paginationClasses.button} ${paginationClasses.buttonDisable}`"
      >
        ...
      </span>
      <button
        v-else
        @click="goto(page.label)"
        :class="`${paginationClasses.button} ${
          page.active ? paginationClasses.buttonActive : ''
        }`"
      >
        {{ page.label }}
      </button>
    </li>

    <li
      v-if="paginationLabels.next"
      :class="`${paginationClasses.li} ${
        hasLast ? paginationClasses.liDisable : ''
      }`"
    >
      <button
        @click="next"
        :disabled="hasLast"
        :class="`${paginationClasses.button} ${
          hasLast ? paginationClasses.buttonDisable : ''
        }`"
      >
        <span class="mdi"><img src="@/assets/img/chevron-right.svg" /></span>
        <span class="mdi"
          ><img src="@/assets/img/chevron-right-white.svg"
        /></span>
      </button>
    </li>
  </ul>
</template>

<script>
const defaultClasses = {
  ul: 'pagination',
  li: 'pagination__item',
  liActive: 'pagination__item--active',
  liDisable: 'pagination__item--disable',
  button: 'pagination__link',
  buttonActive: 'pagination__link--active',
  buttonDisable: 'pagination__link--disable',
}
const defaultLabels = {
  first: '&laquo;',
  prev: '&lsaquo;',
  next: '&rsaquo;',
  last: '&raquo;',
}

export default {
  props: {
    modelValue: {
      // current page
      type: Number,
      required: true,
    },
    pageCount: {
      // page numbers
      type: Number,
      required: true,
    },
    classes: {
      type: Object,
      required: false,
      default: () => ({}),
    },
    labels: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },

  data() {
    return {
      paginationClasses: {
        ...defaultClasses,
        ...this.classes,
      },
      paginationLabels: {
        ...defaultLabels,
        ...this.labels,
      },
    }
  },

  mounted() {
    if (this.modelValue > this.pageCount) {
      this.$emit('input', this.pageCount)
    }
  },

  computed: {
    items() {
      let valPrev = this.modelValue > 1 ? this.modelValue - 1 : 1 // for easier navigation - gives one previous page
      let valNext =
        this.modelValue < this.pageCount ? this.modelValue + 1 : this.pageCount // one next page
      let extraPrev = valPrev === 3 ? 2 : null
      let extraNext = valNext === this.pageCount - 2 ? this.pageCount - 1 : null
      let dotsBefore = valPrev > 3 ? 2 : null
      let dotsAfter = valNext < this.pageCount - 2 ? this.pageCount - 1 : null

      let output = []

      for (let i = 1; i <= this.pageCount; i += 1) {
        if (
          [
            1,
            this.pageCount,
            this.modelValue,
            valPrev,
            valNext,
            extraPrev,
            extraNext,
            dotsBefore,
            dotsAfter,
          ].includes(i)
        ) {
          output.push({
            label: i,
            active: this.modelValue === i,
            disable: [dotsBefore, dotsAfter].includes(i),
          })
        }
      }
      return output
    },

    hasFirst() {
      return this.modelValue === 1
    },

    hasLast() {
      return this.modelValue === this.pageCount
    },
  },

  methods: {
    first() {
      !this.hasFirst && this.$emit('clickPage', 1)
    },
    prev() {
      !this.hasFirst && this.$emit('clickPage', this.modelValue - 1)
    },
    goto(page) {
      this.$emit('clickPage', page)
    },
    next() {
      !this.hasLast && this.$emit('clickPage', this.modelValue + 1)
    },

    last() {
      !this.hasLast && this.$emit('clickPage', this.pageCount)
    },
  },
}
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  background: #fff;
  border-radius: 4px;
  margin: 0 30px 0 0;
  &__item {
    &:not(:last-child) {
      margin-right: 5px;
    }
    &--active {
    }
    &--disable {
    }
    span {
    }
  }
  // .pagination__link
  &__link {
    height: 24px;
    min-width: 24px;
    padding: 4px 5px;
    border-radius: 4px;
    font-family: TTNormsPro;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    color: #1b3254;
    line-height: 15px;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: var(--primary);
      color: #fff;
      .mdi:nth-of-type(1) {
        display: none;
      }
      .mdi:nth-of-type(2) {
        display: block;
      }
    }
    &--active {
      background-color: var(--primary);
      color: #fff;
    }
    &--disable {
      // background-color: transparent !important;
      color: #1b3254 !important;
    }
  }
  .mdi {
    color: inherit;
    display: flex;
  }
  .mdi:nth-of-type(2) {
    display: none;
  }
}
</style>
