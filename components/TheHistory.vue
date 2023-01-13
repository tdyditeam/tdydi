<template>
  <div class="institute-history">
    <div class="institute-history__row">
      <div class="institute-history__image">
        <img src="@/assets/img/home/TheHistory.png" alt="surat" />
      </div>
      <div class="institute-history__body">
        <div class="institute-history__content">
          <div class="institute-history__title">Institutyň taryhy</div>
          <div class="institute-history__text">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Berkarar döwletiň täze
            eýýamynyň Galkynyşy döwründe hormatly Prezidentimiz Serdar
            Berdimuhamedowyň başda durmagynda ylmyň we tehnikanyň gazananlaryny
            ykdysadyýet bilen berk utgaşdyrmak, jemgyýetiň bar bolan ähli
            mümkinçiliklerini doly güýje girizmek we şonuň esasynda
            Türkmenistany innowasion döwlete öwürmek, häzirki zaman ýokary
            tehnologik senagaty kemala getirmek, bäsdeşlige ukyply taýýar
            önümleri öndürmek döwletimiziň baş strategik ugry bolup durýar. Şu
            maksady durmuşa geçirmekde ýokary derejeli ykdysatçy hünärmenlere
            uly orun degişli bolup, olar Türkmen döwlet ykdysadyýet we
            dolandyryş institutynda taýýarlanylýar. Institut 1980-nji ýylyň
            31-nji ýanwarynda Türkmen halk hojalyk instituty ady bilen Türkmen
            döwlet uniwersitetiniň binýadynda döredildi.
          </div>
        </div>
        <div class="institute-history__button">
          <base-button
            @click="$router.push(localeLocation('/about-us'))"
            text="DOLY OKA"
            appendIcon
            isActive
            iconUrl="home/icon-about.svg"
          ></base-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.institute-history {
  font-family: 'Gilroy';
  padding: 60px 0px 15px 0px;
  &__row {
    display: flex;
    gap: 52px;
    @media (max-width: 992px) {
      gap: 30px;
    }
    @media (max-width: 767px) {
      flex-wrap: wrap;
    }
  }

  &__title-mobile {
    display: none;
    @media (max-width: 767px) {
      display: block;
      font-weight: 600;
      font-size: 24px;
      line-height: 118%;
      color: #333333;
    }
    @media (max-width: 479px) {
      font-size: 16px;
    }
  }

  &__image {
    flex: 0 1 36%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    @media (max-width: 992px) {
      flex: 0 1 50%;
    }
    @media (max-width: 767px) {
      flex: 0 1 100%;
    }
  }

  &__body {
    flex: 0 1 64%;
    @media (max-width: 992px) {
      flex: 0 1 50%;
    }
    @media (max-width: 767px) {
      flex: 0 1 100%;
    }
  }

  &__content {
    width: 100%;
    margin-bottom: 20px;
  }

  &__title {
    font-weight: 600;
    font-size: 40px;
    line-height: 47px;
    color: #333333;
    margin-bottom: 40px;
    @media (max-width: 767px) {
      display: none;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: justify;
    color: #000000;
    @media (max-width: 767px) {
      font-size: 16px;
    }
    @media (max-width: 479px) {
      font-size: 12px;
    }
  }

  &__button {
    font-family: 'Gilroy';
    font-size: 14px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  &__icon {
    margin-top: 6px;
  }
  @media (max-width: 479px) {
    padding: 4px 8px;
    font-size: 12px;
  }
}
</style>
