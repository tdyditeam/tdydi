<template>
  <div ref="imagePointerContainer" class="pointers">
    <h2 class="pointers__title">{{ $t('button.theBest') }}</h2>
    <div class="pointers__row">
      <div class="pointers__left">
        <div
          class="pointers__item"
          v-for="(topPointer, index) in topPointers"
          :key="topPointer.id"
        >
          <p style="font-weight: 600">
            {{ index + 1 }}. {{ topPointer.name }}:
          </p>
          <p style="font-style: italic; padding-top: 5px">
            {{ topPointer.major }}
          </p>
        </div>
      </div>
      <div class="pointers__right">
        <div class="pointers__image">
          <img
            v-if="isVisible"
            src="@/assets/img/home/pointers-image.webp"
            alt="img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    topPointers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isVisible: false,
    }
  },
  mounted() {
    if (this.$refs.imagePointerContainer) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true
          observer.disconnect()
        }
      })
      observer.observe(this.$refs.imagePointerContainer)
    }
  },
}
</script>

<style lang="scss" scoped>
.pointers {
  padding: 15px 0px;
  &__title {
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    color: #333333;
    &:not(:last-child) {
      margin-bottom: 30px;
    }
    @media (max-width: 479px) {
      font-size: 16px;
    }
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 520px;
    max-height: 400px;
    overflow: auto;
    @media (max-width: 767px) {
      max-width: 100%;
      max-height: 300px;
    }
  }

  &__item {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    padding: 10px;
    margin-right: 2px;
    border-bottom: 1px solid #ebebeb;
    border-radius: 4px;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 120%;
    color: #333333;
    @media (max-width: 479px) {
      font-size: 16px;
    }
  }

  &__right {
    width: 800px;
    @media (max-width: 1100px) {
      width: 100%;
    }
  }

  &__image {
    img {
      width: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;
    }
  }
}
</style>
