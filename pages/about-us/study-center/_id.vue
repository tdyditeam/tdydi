<template>
  <div class="study-center">
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="description[$route.params.id]"
      :title="title[$route.params.id]"
    ></block-pages>
    <div class="study-center__button">
      <base-button
        @click="$router.push(localeLocation('/about-us'))"
        text="Comment yazymak"
        appendIcon
        isActive
        iconUrl="icons/icon-down.svg"
      ></base-button>
    </div>
    <h2>Isleg arzuwlarynyzy yazmak...</h2>
    <div class="study-center__block-about block-about">
      <div class="block-about__input-group">
        <div class="block-about__input-wrapper">
          <div class="block-about__title">F.A.A</div>
          <input type="text" placeholder="Ady" class="block-about__input" />
        </div>
        <div class="block-about__right-row">
          <div class="block-about__input-wrapper">
            <div class="block-about__title">E-pocta</div>
            <input
              type="text"
              placeholder="e-mail"
              class="block-about__input"
            />
          </div>
          <div class="block-about__input-wrapper">
            <div class="block-about__title">Tel nomer</div>
            <input
              type="text"
              placeholder="telefon belgiňiz"
              class="block-about__input"
            />
          </div>
        </div>
      </div>
      <div class="block-about__body">
        <div class="block-about__header">
          <div class="block-about__left">
            <div class="block-about__icons">
              <button class="block-about__icon">
                <img src="@/assets/img/icons/icon-bold.svg" alt="icon" />
              </button>
              <button class="block-about__icon">
                <img src="@/assets/img/icons/icon-italic.svg" alt="icon" />
              </button>
              <button class="block-about__icon">
                <img src="@/assets/img/icons/icon-u.svg" alt="icon" />
              </button>
              <button class="block-about__icon">
                <img src="@/assets/img/icons/icon-a.svg" alt="icon" />
              </button>
            </div>
            <div class="block-about__icons">
              <button class="block-about__icon">
                <img src="@/assets/img/icons/icon-left-align.svg" alt="icon" />
              </button>
              <button class="block-about__icon">
                <img
                  src="@/assets/img/icons/icon-center-align.svg"
                  alt="icon"
                />
              </button>
              <button class="block-about__icon">
                <img src="@/assets/img/icons/icon-numeration.svg" alt="icon" />
              </button>
              <button class="block-about__icon">
                <img src="@/assets/img/icons/icon-symbols.svg" alt="icon" />
              </button>
            </div>
            <div class="block-about__icons">
              <button class="block-about__icon">
                <img src="@/assets/img/icons/icon-union.svg" alt="icon" />
              </button>
              <button class="block-about__icon">
                <img src="@/assets/img/icons/icon-img.svg" alt="icon" />
              </button>
              <button class="block-about__icon">
                <img src="@/assets/img/icons/icon-smile.svg" alt="icon" />
              </button>
              <button class="block-about__icon">
                <img src="@/assets/img/icons/icon-add.svg" alt="icon" />
              </button>
            </div>
          </div>
          <div class="block-about__right">
            <div class="block-about__back-next">
              <button class="block-about__icon">
                <img src="@/assets/img/icons/icon-back.svg" alt="icon" />
              </button>
              <button class="block-about__icon">
                <img src="@/assets/img/icons/icon-next.svg" alt="icon" />
              </button>
            </div>
            <button class="block-about__icon">
              <img src="@/assets/img/icons/icon-yet.svg" alt="icon" />
            </button>
          </div>
        </div>
        <div class="block-about__content">
          <h2 class="block-about__title-content">
            This is a WYSIWYG Figma Editor
          </h2>
          <p class="block-about__text">
            Gastropub chillwave lumbersexual umami lyft. Poke austin direct
            trade, marfa raclette letterpress actually. Chartreuse sriracha
            pinterest twee lo-fi try-hard. Meditation banh mi kitsch, prism
            organic hot chicken literally heirloom occupy af semiotics food
            truck.
          </p>
          <p class="block-about__text">
            Aesthetic asymmetrical gluten-free, health goth shaman meh
            lumbersexual bespoke kinfolk helvetica vaporware fashion axe
            freegan. Pour-over hammock succulents disrupt chartreuse raw denim.
            Brunch aesthetic fanny pack subway tile everyday carry green juice
            neutra beard cray small batch poke yuccie plaid pork belly. Blue
            bottle 8-bit flexitarian hashtag. Scenester marfa yuccie snackwave
            edison bulb. VHS blog pickled scenester venmo hashtag lo-fi.
          </p>
        </div>
      </div>
      <div class="block-about__button">
        <base-button
          @click="$router.push(localeLocation('/about-us'))"
          text="Ugratmak"
          appendIcon
          isActive
          iconUrl="icons/icon-down.svg"
        ></base-button>
      </div>
    </div>
    <div class="study-center__chat chat">
      <div class="chat__item">
        <div class="chat__profile">
          <p>M</p>
        </div>
        <div class="chat__people">
          <div class="chat__name-data">
            <p class="chat__people-name">Maksat Maksadow</p>
            <p class="chat__data">20.01.2023 13:10</p>
          </div>
          <p class="chat__people-incoming">Salam gowmy yagday</p>
          <div class="chat__people-send-wrapper">
            <p class="chat__people-send">Howa gowy</p>
            <p class="chat__people-send">Men gowy dal?</p>
          </div>
          <div class="chat__toanswer">
            <p>Otwet beray</p>
          </div>
        </div>
      </div>
    </div>
    <div class="study-center__chat chat">
      <div class="chat__item">
        <div class="chat__profile">
          <p>M</p>
        </div>
        <div class="chat__people">
          <div class="chat__name-data">
            <p class="chat__people-name">Maksat Maksadow</p>
            <p class="chat__data">20.01.2023 13:10</p>
          </div>
          <p class="chat__people-incoming">Salam gowmy yagday</p>
          <div class="chat__toanswer">
            <p>Otwet beray</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.aboutUs.name'),
          path: '/about-us',
          exact: true,
        },
        {
          id: 3,
          name: this.$t('header.menu.aboutUs.studyCenter'),
          path: `/about-us/study-center/${this.$route.params.id}`,
          exact: true,
        },
      ],
      title: {
        0: this.$t('studyCenters.economistTraining.title'),
        '«Audit» okuw merkezi': this.$t('studyCenters.auditTraining.title'),
        '«Hazyna» sport kluby': this.$t('studyCenters.hazynaSportsClub.title'),
      },
      description: {
        0: this.$t('studyCenters.economistTraining.description'),
        '«Audit» okuw merkezi': this.$t(
          'studyCenters.auditTraining.description'
        ),
        '«Hazyna» sport kluby': this.$t(
          'studyCenters.hazynaSportsClub.description'
        ),
      },
      img: {
        '«Ykdysatçy» okuw merkezi': 'image.png',
        '«Audit» okuw merkezi': '3.png',
        '«Hazyna» sport kluby': '2.png',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.study-center {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 84px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
  &__button {
    max-width: 191px;
    display: flex;
  }

  h2 {
    font-weight: 600;
    font-size: 28px;
    line-height: calc(35 / 28) * 100%;
  }
}
.block-about {
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
  background: linear-gradient(0deg, #f2f2f2, #f2f2f2),
    linear-gradient(0deg, #f2f2f2, #f2f2f2), #f2f2f2;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
  &__input-group {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  &__input-wrapper {
    flex: 1 1 auto;
  }

  &__title {
    font-weight: 400;
    font-size: 16px;
    line-height: 120%;
    color: #474747;
    margin-bottom: 4px;
  }

  &__input {
    padding: 14px 10px;
    width: 100%;
    border: 0.945709px solid #474747;
    border-radius: 3.78284px;
    &::placeholder {
      font-weight: 400;
      font-size: 16px;
      line-height: 120%;
      color: #474747;
    }
  }

  &__right-row {
    display: flex;
    flex: 0 1 50%;
    gap: 20px;
    @media (max-width: 767px) {
      flex: 0 1 100%;
    }
  }

  &__body {
    background-color: #fff;
    padding: 10px 20px 56px 20px;
    border-radius: 9px;
    border: 1.17172px solid #523b3b;
  }

  &__header {
    display: flex;
    flex-wrap: wrap;
  }

  &__left {
    flex: 1 1 auto;
    display: flex;
    gap: 30px;
  }

  &__icons {
  }

  &__icon {
    padding: 10px;
    border-radius: 10px;
    background: transparent;
    transition: background-color 0.3s ease 0s;
    &:hover {
      background-color: #f2f2f2;
    }
  }

  &__right {
    display: flex;
  }

  &__back-next {
  }

  &__content {
    padding: 50px 30px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__title-content {
    font-size: 28px;
    color: #000;
    font-weight: 500;
    line-height: calc(35 / 28) * 100%;
  }

  &__text {
    font-size: 20px;
    line-height: calc(35 / 20) * 100%;
    color: #000;
  }

  &__button {
    display: flex;
    justify-content: flex-end;
  }
}
.chat {
  &__item {
    max-width: 460px;
    padding: 10px 20px;
    display: flex;
    align-items: flex-start;
    column-gap: 20px;
    background-color: #f2f2f2;
    border-radius: 6px;
  }

  &__profile {
    flex: 0 0 43px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d9d9d9;
    border-radius: 50%;
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 120%;
      color: #000;
    }
  }

  &__people {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
  }

  &__name-data {
    display: flex;
    align-items: center;
  }

  &__people-name {
    font-weight: 600;
    font-size: 18px;
    line-height: 120%;
    color: #16ab65;
    flex: 1 1 auto;
  }

  &__data {
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: #000000;
  }

  &__people-incoming {
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: #000000;
  }

  &__people-send-wrapper {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__people-send {
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    color: #757272;
  }

  &__toanswer {
    display: flex;
    justify-content: flex-end;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #16ab65;
  }
}
</style>
