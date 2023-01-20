<template>
  <div class="photo-block">
    <div class="photo-block__row">
      <div class="photo-block__column-1">
        <div class="photo-block__first">
          <div class="photo-block__image" @click="showPopUp">
            <img src="@/assets/img/home/TheHistory.png" alt="surat" />
            <div class="photo-block__text-block">
              <div class="photo-block__text-wrapper">
                <div class="photo-block__text">Sapaklaryň pursady</div>
              </div>
            </div>
          </div>
          <div class="photo-block__image" @click="showPopUp">
            <img src="@/assets/img/home/gallery/img_2.png" alt="surat" />
            <div class="photo-block__text-block">
              <div class="photo-block__text-wrapper">
                <div class="photo-block__text">Kitaphanadaky pursatlar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="photo-block__column-2">
        <div class="photo-block__image-long" @click="showPopUp">
          <img src="@/assets/img/home/gallery/img_3.png" alt="surat" />
          <div class="photo-block__text-block">
            <div class="photo-block__text-wrapper">
              <div class="photo-block__text">Sapaklaryň pursady</div>
            </div>
          </div>
        </div>
      </div>
      <div class="photo-block__column-3">
        <div class="photo-block__last">
          <div class="photo-block__image" @click="showPopUp">
            <img src="@/assets/img/home/gallery/img_4.png" alt="surat" />
            <div class="photo-block__text-block">
              <div class="photo-block__text-wrapper">
                <div class="photo-block__text">Ylmy cäreler</div>
              </div>
            </div>
          </div>
          <div class="photo-block__image" @click="showPopUp">
            <img src="@/assets/img/home/gallery/img_5.png" alt="surat" />
            <div class="photo-block__text-block">
              <div class="photo-block__text-wrapper">
                <div class="photo-block__text">Sapaklaryň pursady</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <gallery-photo-popup
      :isActive="isActive"
      @close="closePopUp"
    ></gallery-photo-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
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
    gap: 20px;
    @media (max-width: 992px) {
      flex-wrap: wrap;
    }
    @media (max-width: 767px) {
      gap: 10px;
    }
  }

  &__column-1 {
    flex: 0 1 33.333%;
    cursor: pointer;
    @media (max-width: 992px) {
      flex: 0 1 48%;
    }
    @media (max-width: 767px) {
      flex: 0 1 49%;
    }
    @media (max-width: 400px) {
      flex: 0 1 100%;
    }
  }

  &__column-2 {
    cursor: pointer;
    @media (max-width: 992px) {
      flex: 0 1 49%;
    }
    @media (max-width: 540px) {
      flex: 0 1 48%;
    }
    @media (max-width: 400px) {
      flex: 0 1 100%;
    }
  }

  &__column-3 {
    cursor: pointer;
    @media (max-width: 767px) {
      flex: 0 1 100%;
    }
  }

  &__first {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 767px) {
      gap: 10px;
    }
  }

  &__last {
    display: flex;
    gap: 20px;
    @media (min-width: 992px) {
      flex-direction: column;
    }
    @media (max-width: 767px) {
      flex: 0 1 50%;
      gap: 10px;
    }
    @media (max-width: 479px) {
      flex: 0 1 100%;
      flex-direction: column;
    }
  }

  &__image {
    width: 100%;
    height: 310px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 10px;
    }
    &:hover {
      .photo-block__text-block {
        opacity: 1;
      }
    }
    @media (max-width: 992px) {
      height: 100%;
    }
    @media (max-width: 767px) {
    }
  }

  &__image-long {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    &:hover {
      .photo-block__text-block {
        opacity: 1;
      }
    }
  }
  &__text-block {
    position: absolute;
    width: 100%;
    bottom: 0;
    opacity: 0;
    transition: all 1s;
    border-radius: 0px 0px 10px 10px;
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
    font-family: 'Gilroy';
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
