<template>
  <div ref="observe" class="banner__statistics">
    <div
      class="banner__statistics-item"
      v-for="indicator in indicators"
      :key="indicator.id"
    >
      <div class="banner__statistics-icon">
        <img :src="`${imageUrl}${indicator.image}`" alt="" />
      </div>
      <div class="banner__statistics-text">
        <span>{{ indicator.name }}</span>
        <span class="counter" :data-target="indicator.count">{{
          indicator.count
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    indicators: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      observer: null,
      magistr: 300,
      student: 3320,
      teacher: 277,
      skill: 52,
      faculti: 5,
    }
  },
  computed: {
    ...mapGetters(['imageUrl']),
  },
  mounted() {
    const options =
      {
        rootMargin: '0px',
        threshold: 1.0,
      } || {}
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.updateCount()
      }
    }, options)
    this.observer.observe(this.$refs.observe)
  },
  destroyed() {
    this.observer.disconnect()
  },
  methods: {
    updateCount() {
      const counters = document.querySelectorAll('.counter')
      const speed = 50
      counters.forEach((counter) => {
        const update = () => {
          let target = +counter.getAttribute('data-target')
          let count = +counter.innerText
          let inc = target / speed
          if (count < target) {
            counter.innerText = Math.ceil(count + inc)
            setTimeout(update, 25)
          } else {
            counter.innerText = target
          }
        }
        counter.innerText = Number(0)
        update()
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  &__statistics {
    position: absolute;
    left: 50%;
    bottom: -30px;
    transform: translateX(-50%);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 0px auto;
    z-index: 10;
    gap: 20px;
    @media (max-width: 992px) {
      bottom: -50px;
      gap: 10px;
    }
    @media (max-width: 600px) {
      bottom: -130px;
    }
    &-item {
      display: flex;
      padding: 15px;
      background-color: var(--white);
      box-shadow: 6px 7px 20px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      max-width: 230px;
      @media (max-width: 1250px) {
        max-width: 210px;
      }
      @media (max-width: 1150px) {
        max-width: 180px;
      }
      @media (max-width: 992px) {
        max-width: 100%;
        flex: 0 1 30%;
      }
      @media (max-width: 600px) {
        flex: 0 1 40%;
        &:last-child {
          display: none;
        }
      }
      @media (max-width: 479px) {
        flex: 0 1 45%;
      }
    }
    &-icon {
      flex: 0 1 50px;
      margin-right: 7px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-text {
      display: flex;
      flex-direction: column;
      flex: 0 1 100%;
      span:nth-child(1) {
        font-family: 'Roboto Flex';
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        color: var(--primary);
        @media (max-width: 479px) {
          font-size: 16px;
        }
      }
      span:nth-child(2) {
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        text-align: center;
        color: var(---text);
        margin-top: 2px;
        @media (max-width: 479px) {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
