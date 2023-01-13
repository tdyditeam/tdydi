<template>
  <div class="departments-teachers">
    <h2 class="departments-teachers__title">Kafedranyň mugallymlary</h2>
    <div class="departments-teachers__block">
      <div class="departments-teachers__item-wrapper item-departments-teachers">
        <div class="departments-teachers__item item-departments-teachers">
          <div class="item-departments-teachers__image">
            <img
              src="@/assets/img/home/departments-teachers/img_1.png"
              alt="img"
            />
          </div>
          <div class="item-departments-teachers__content">
            <div class="item-departments-teachers__teacher">
              Iwanow Bäşim Meredowiç
            </div>
            <div class="item-departments-teachers__text">
              Maglumat ulgamlary kafedrasynyň müdiri, uly mugallym.
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
      <div class="departments-teachers__item-wrapper item-departments-teachers">
        <div class="departments-teachers__item item-departments-teachers">
          <div class="item-departments-teachers__image">
            <img
              src="@/assets/img/home/departments-teachers/img_2.png"
              alt="img"
            />
          </div>
          <div class="item-departments-teachers__content">
            <div class="item-departments-teachers__teacher">
              Nuryýewa Oguljeren Nurýagdyýewna
            </div>
            <div class="item-departments-teachers__text">
              Maglumat ulgamlary kafedrasynyň mugallymy. Türkmenistanyň Ýokary
              okuw mekdepleriniň professor-mugallymlarynyň arasynda geçirilen
              «Ýylyň mugallymy-2020» 3-nji orun – 2020ý. Türkmenistanyň «Watana
              bolan söýgüsi üçin» medaly bilen sylaglanan -2021ý. Kafedrada
              okadylýan dersler boýunça bir näçe okuw gollanmalarynyň we okuw
              kitaplarynyň awtory.Maglumat ulgamlary kafedrasynyň müdiri, uly
              mugallym. Türkmenistanyň Ýokary okuw mekdepleriniň
              professor-mugallymlarynyň arasynda geçirilen «Ýylyň
              mugallymy-2020» 3-nji orun – 2020ý. Türkmenistanyň «Watana bolan
              söýgüsi üçin» medaly bilen sylaglanan -2021ý. Kafedrada okadylýan
              dersler boýunça bir näçe okuw gollanmalarynyň we okuw kitaplarynyň
              awtory.
            </div>
          </div>
        </div>
      </div>
      <div class="departments-teachers__item-wrapper item-departments-teachers">
        <div class="departments-teachers__item item-departments-teachers">
          <div class="item-departments-teachers__image">
            <img
              src="@/assets/img/home/departments-teachers/img_3.png"
              alt="img"
            />
          </div>
          <div class="item-departments-teachers__content">
            <div class="item-departments-teachers__teacher">
              Allaberdiýew Kaýumberdi Jepbarberdiýewiç
            </div>
            <div class="item-departments-teachers__text">
              Maglumat ulgamlary kafedrasynyň mugallymy, Maliýe fakultetiniň
              dekanynyň okuw işleri boýunça orunbasary.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
    gap: 40px;
    background-color: #f5f5f5;
    padding: 15px;
    border-radius: 10px;
  }
}
.item-departments-teachers {
  &__image {
    flex: 0 0 180px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__teacher {
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0.04em;
    color: #333333;
  }

  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    letter-spacing: 0.04em;
    color: #333333;
  }
}
</style>
