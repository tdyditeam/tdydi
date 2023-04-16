<template>
  <div class="photo-block">
    <div class="photo-block__row">
      <div
        class="photo-block__column"
        @click="showPopUp"
        v-for="galery in galerias"
        :key="galery.id"
      >
        <div class="photo-block__image">
          <img :src="`${imageUrl}${galery.image}`" alt="surat" />
          <div class="photo-block__text-block" v-if="galery.name">
            <div class="photo-block__text-wrapper">
              <div class="photo-block__text">{{ galery.name || '' }}</div>
            </div>
          </div>
          <div class="photo-block__text-block" v-else>
            <div class="photo-block__text-wrapper">
              <div class="photo-block__text">
                TÜRKMEN DÖWLET YKDYSADYÝET WE DOLANDYRYŞ INSTITUTY
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <gallery-photo-popup
      :isActive="isActive"
      :images="galerias"
      @close="closePopUp"
    ></gallery-photo-popup>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    galerias: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
  computed: {
    ...mapGetters(['imageUrl']),
  },
  methods: {
    showPopUp() {
      document.body.classList.add('_lock')
      this.isActive = true
    },
    closePopUp() {
      document.body.classList.remove('_lock')
      this.isActive = false
    },
  },
}
</script>

<style lang="scss" scoped>
.photo-block {
  transition: all 3s;
  &__row {
    display: flex;
    flex-wrap: wrap;
    margin: 0px -10px;
  }

  &__column {
    cursor: pointer;
    flex: 0 1 33.333%;
    width: 350px;
    height: 350px;
    padding: 0px 10px;
    margin-bottom: 20px;
    cursor: pointer;
    @media (max-width: 767px) {
      flex: 0 1 50%;
    }
    @media (max-width: 479px) {
      flex: 0 1 100%;
    }
  }
  &__image {
    position: relative;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
      border-radius: 6px;
    }
    &:hover {
      .photo-block__text-block {
        opacity: 1;
      }
    }
  }

  //   &__last {
  //     display: flex;
  //     gap: 20px;
  //     @media (min-width: 992px) {
  //       flex-direction: column;
  //     }
  //     @media (max-width: 767px) {
  //       flex: 0 1 50%;
  //       gap: 10px;
  //     }
  //     @media (max-width: 479px) {
  //       flex: 0 1 100%;
  //       flex-direction: column;
  //     }
  //   }

  //   &__image {
  //     width: 100%;
  //     height: 310px;
  //     position: relative;
  //     img {
  //       width: 100%;
  //       height: 100%;
  //       object-fit: cover;
  //       object-position: center;
  //       border-radius: 10px;
  //     }

  //     @media (max-width: 992px) {
  //       height: 100%;
  //     }
  //     @media (max-width: 767px) {
  //     }
  //   }

  //   &__image-long {
  //     width: 100%;
  //     height: 100%;
  //     position: relative;
  //     img {
  //       width: 100%;
  //       height: 100%;
  //       object-fit: cover;
  //       object-position: center;
  //     }
  //     &:hover {
  //       .photo-block__text-block {
  //         opacity: 1;
  //       }
  //     }
  //   }
  &__text-block {
    position: absolute;
    width: 100%;
    bottom: 0;
    opacity: 0;
    transition: all 1s;
    border-radius: 6px;
    background: linear-gradient(
      180deg,
      rgba(64, 62, 62, 0) 0%,
      rgba(47, 47, 47, 0.78) 100%
    );
  }

  &__text-wrapper {
    padding: 10px 10px 10px 0px;
  }

  &__text {
    font-family: 'Roboto Flex';
    display: inline-flex;
    font-weight: 700;
    font-size: 16px;
    line-height: 118%;
    color: #fff;
    background-color: #16ab65;
    padding: 10px;
    border-radius: 0px 10px 10px 0px;
    @media (max-width: 767px) {
      font-size: 14px;
    }
    @media (max-width: 479px) {
      font-size: 12px;
    }
  }
}
</style>
