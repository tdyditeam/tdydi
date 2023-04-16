<template>
  <div
    :class="classes"
    :style="{
      width: width ? `${width}px` : null,
    }"
  >
    <div v-if="label" class="file__label">{{ label }}</div>
    <div class="file__body">
      <div class="file__prepend-icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_4647_45579)">
            <path
              d="M8 16.7031H16V18.7031H8V16.7031ZM8 12.7031H16V14.7031H8V12.7031ZM14 2.70312H6C4.9 2.70312 4 3.60312 4 4.70312V20.7031C4 21.8031 4.89 22.7031 5.99 22.7031H18C19.1 22.7031 20 21.8031 20 20.7031V8.70312L14 2.70312ZM18 20.7031H6V4.70312H13V9.70312H18V20.7031Z"
              fill="#474747"
            />
          </g>
          <defs>
            <clipPath id="clip0_4647_45579">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(0 0.703125)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <label class="file__file">
        <input
          type="file"
          ref="file"
          :disabled="disabled || readonly"
          @change="changeFile"
          :accept="accept"
        />
        <span v-if="fileName"> {{ fileName }}</span>
        <span v-else class="file__placeholder">{{ placeholder }}</span>
      </label>
      <div v-if="!disabled && progress && !url" class="file__progress">
        <div class="file__progress-count">{{ progress }}%</div>
        <div class="file__progress-area">
          <svg>
            <circle cx="10" cy="10" r="7" />
            <circle cx="10" cy="10" r="7" :style="`--present: ${progress}`" />
          </svg>
        </div>
      </div>
    </div>
    <div v-if="showMessage" class="file__message">Error</div>
  </div>
</template>
<script>
export default {
  emits: ['changeFile', 'removeFile'],
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
    success: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: null,
    },
    progress: {
      type: Number,
      default: null,
    },
    url: {
      type: String,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: null,
    },
    accept: {
      type: String,
      default: '.pdf,.doc,.docx,.xml,.txt,.zip,.xlsx, .xls, .csv',
    },
  },
  data() {
    return {
      showMessage: false,
      file: null,
      fileName: null,
    }
  },
  computed: {
    classes() {
      return [
        'file',
        {
          'file--success': this.success,
          'file--error': this.error,
          'file--disabled': this.disabled,
          'file--readonly': this.readonly,
        },
      ]
    },
  },
  methods: {
    changeFile(e) {
      console.log(e.target.files)
      this.fileName = e.target.files[0].name
      this.$emit('changeFile', e.target.files[0])
      setTimeout(() => {
        this.$refs.file = null
      }, 0)
    },
  },
}
</script>
<style lang="scss" scoped>
.file {
  width: 50%;
  // .file__label
  &__label {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.135px;
    color: var(--);
    padding-bottom: 4px;
  }
  // .file__body
  &__body {
    border: 1px solid #8c8c8c;
    border-radius: 4px;
    position: relative;
    display: flex;
    // overflow: hidden;
  }
  // .file__prepend-icon
  &__prepend-icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    pointer-events: none;
    color: var(--secondary);
  }

  // .file__file
  &__file {
    width: 100%;
    cursor: pointer;
    input {
      display: none;
    }
    span {
      width: 100%;
      padding: 5px 10px 5px 38px;
      display: block;
      background-color: transparent;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 0.135px;
      color: var(--secondary);
      overflow: hidden;
      white-space: normal;
      //   text-overflow: ellipsis;
      //   display: -webkit-box;
      //   -webkit-box-orient: vertical;
      //   -webkit-line-clamp: 1;
      word-break: break-all;
      &.file__placeholder {
        color: var(--secondary-400);
      }
    }
  }
  // .file__progress
  &__progress {
    display: flex;
    align-items: center;
    pointer-events: none;
    padding-right: 9px;
  }
  // .file__progress-count
  &__progress-count {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.135px;
    color: var(--secondary);
    padding-right: 7px;
  }
  // .file__progress-area
  &__progress-area {
    width: 20px;
    height: 20px;
    svg {
      width: 20px;
      height: 20px;
      circle {
        fill: none;
        stroke-width: 3px;
        stroke: var(--secondary-300);
        &:nth-child(2) {
          stroke: var(--secondary);
          stroke-dasharray: 45;
          stroke-dashoffset: calc(45 - (45 * var(--present)) / 100);
        }
      }
    }
  }
  // .file__preview
  &__preview {
    padding: 9px;
    background-color: var(--primary);
    color: var(--white);
    border-left: 1px solid #8c8c8c;
  }

  // .file__message
  &__message {
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.4px;
    padding-top: 4px;
  }
  &--success {
    .file__label {
      color: var(--primary);
    }
    .file__body {
      border-color: var(--primary);
    }
    .file__prepend-icon {
      color: var(--primary);
    }
    .file__message {
      color: var(--primary);
    }
    .file__progress-count {
      color: var(--primary);
    }
    .file__progress-area {
      svg {
        circle {
          &:nth-child(2) {
            stroke: var(--primary);
          }
        }
      }
    }
  }
  &--error {
    animation: 0.2s invalid forwards;
    .file__label {
      color: var(--error);
    }
    .file__body {
      border-color: var(--error);
    }
    .file__prepend-icon {
      color: var(--error);
    }
    .file__message {
      color: var(--error);
    }
    .file__progress-count {
      color: var(--error);
    }
    .file__progress-area {
      svg {
        circle {
          &:nth-child(2) {
            stroke: var(--error);
          }
        }
      }
    }
  }
  &--disabled {
    .file__label {
      color: var(--secondary);
    }
    .file__body {
      border-color: var(--secondary-400);
      background-color: var(--secondary-200);
    }
    .file__file {
      span {
        color: var(--secondary-400);
        cursor: not-allowed;
        pointer-events: all !important;
      }
    }
    .file__prepend-icon {
      color: var(--secondary-400);
    }
    .file__message {
      color: var(--secondary-400);
    }
  }
  &--readonly {
    .file__label {
      color: var(--secondary);
    }
    .file__body {
      border-color: var(--secondary-200);
      background-color: transparent;
    }
    .file__prepend-icon {
      color: var(--secondary);
    }
    .file__file {
      span {
        color: var(--connected);
        cursor: default;
        pointer-events: none;
      }
    }
    .file__prepend-icon {
    }
    .file__message {
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
