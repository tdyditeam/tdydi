<template>
  <div class="departments-teachers">
    <div class="departments-teachers__block">
      <div
        class="departments-teachers__item-wrapper item-departments-teachers"
        v-for="teacher in teachers"
        :key="teacher.id"
        @click="$emit('clickedToCard', teacher.name)"
      >
        <div class="departments-teachers__item item-departments-teachers">
          <div class="item-departments-teachers__row">
            <div class="item-departments-teachers__image">
              <img
                :src="
                  require(`@/assets/img/home/departments-teachers/${teacher.img}`)
                "
                alt="img"
              />
            </div>
            <div class="item-departments-teachers__content">
              <div class="item-departments-teachers__teacher">
                <h2>{{ teacher.name }}</h2>
                <h3 class="item-departments-teachers__about">
                  {{ teacher.skills }}
                </h3>
              </div>
              <div class="item-departments-teachers__text">
                {{ teacher.description }}
              </div>
            </div>
          </div>
          <div
            class="item-departments-teachers__text item-departments-teachers__text--wrapped"
          >
            Türkmenistanyň Ýokary okuw mekdepleriniň professor-mugallymlarynyň
            arasynda geçirilen «Ýylyň mugallymy-2020» 3-nji orun – 2020ý.
            Türkmenistanyň «Watana bolan söýgüsi üçin» medaly bilen sylaglanan
            -2021ý. Kafedrada okadylýan dersler boýunça bir näçe okuw
            gollanmalarynyň we okuw kitaplarynyň awtory.Maglumat ulgamlary
            kafedrasynyň müdiri, uly mugallym.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    teachers: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.departments-teachers {
  font-family: 'Gilroy';
  max-width: 900px;
  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 120%;
    text-transform: uppercase;
    color: #333333;
    margin-bottom: 20px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__item-wrapper {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 10px;
  }

  &__item {
    display: flex;
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 10px;
    @media (max-width: 767px) {
      flex-direction: column;
      gap: 10px;
    }
  }
}
.item-departments-teachers {
  cursor: pointer;
  &__row {
    display: flex;
    gap: 40px;
    @media (max-width: 767px) {
      align-items: center;
      gap: 20px;
    }
    @media (max-width: 479px) {
      gap: 10px;
    }
  }
  &__image {
    flex: 0 1 20%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 0 1 81%;
  }

  &__teacher {
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0.04em;
    color: #333333;
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    @media (max-width: 479px) {
      font-size: 16px;
      line-height: 125%;
    }
  }

  &__about {
    display: none;
    @media (max-width: 767px) {
      display: block;
      font-weight: 500;
      font-size: 14px;
      line-height: 120%;
      color: #333333;
    }
    @media (max-width: 479px) {
      font-size: 14px;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.04em;
    color: #333333;
    @media (max-width: 767px) {
      display: none;
    }
  }

  &__text--wrapped {
    display: none;
    @media (max-width: 767px) {
      display: block;
    }
    @media (max-width: 479px) {
      font-size: 12px;
    }
  }
}
</style>
