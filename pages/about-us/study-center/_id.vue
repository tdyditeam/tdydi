<template>
  <div class="study-center">
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="description[$route.params.id]"
      :title="title[$route.params.id]"
      :img="img[$route.params.id]"
    ></block-pages>
    <div class="study-center__button">
      <base-button
        :text="$t('button.feedBack')"
        appendIcon
        isActive
        iconUrl="icons/icon-down.svg"
      ></base-button>
    </div>
    <div>
      <div class="study-center__block-about block-about">
        <div class="block-about__input-group">
          <div class="block-about__input-wrapper">
            <div class="block-about__title">{{ $t('fullName') }}</div>
            <input
              type="text"
              :placeholder="$t('fullName')"
              v-model="main.name"
              class="block-about__input"
            />
          </div>
          <div class="block-about__right-row">
            <div class="block-about__input-wrapper">
              <div class="block-about__title">{{ $t('email') }}</div>
              <input
                type="text"
                :placeholder="$t('email')"
                v-model="main.email"
                class="block-about__input"
              />
            </div>
            <div class="block-about__input-wrapper">
              <div class="block-about__title">{{ $t('tel') }}</div>
              <input
                type="text"
                :placeholder="$t('tel')"
                v-model="main.phone_number"
                class="block-about__input"
              />
            </div>
          </div>
        </div>
        <client-only>
          <div class="ckeditor">
            <div id="ckeditor" style="height: 300px"></div>
          </div>
        </client-only>
        <File
          :label="$t('document')"
          placeholder="--------"
          :progress="progress"
          :success="progress === 100"
          @changeFile="changeFile"
        />
        <div class="block-about__button">
          <base-button
            @click="sendComment"
            :text="$t('sendCom')"
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
            <p class="chat__people-incoming">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              soluta expedita a suscipit voluptatem atque, repellat enim
              accusantium aperiam tenetur ipsum vero ut recusandae, veniam
              asperiores saepe minima, dolore sunt! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Natus fuga praesentium est in
              delectus facere doloremque non veritatis hic consequuntur
              voluptatibus modi animi eveniet aliquid sed placeat, ab qui
              labore?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let ClassicEditor
let CKEditor

if (process.client) {
  ClassicEditor = require('@ckeditor/ckeditor5-build-classic')
  //   CKEditor = require('@ckeditor/ckeditor5-vue')
} else {
  CKEditor = { component: { template: '<div></div>' } }
}
export default {
  data() {
    return {
      feedBack: false,
      progress: 0,
      main: {
        id: null,
        name: null,
        email: null,
        phone_number: null,
        description: null,
        image: null,
        is_needed: false,
      },
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
        1: this.$t('studyCenters.auditTraining.title'),
        2: this.$t('studyCenters.hazynaSportsClub.title'),
      },
      description: {
        0: this.$t('studyCenters.economistTraining.description'),
        1: this.$t('studyCenters.auditTraining.description'),
        2: this.$t('studyCenters.hazynaSportsClub.description'),
      },
      img: {
        0: 'image.png',
        1: '3.png',
        2: '2.png',
      },
    }
  },
  async mounted() {
    setTimeout(() => {
      ClassicEditor.create(document.querySelector('#ckeditor'))
        .then((editor) => {
          window.editor = editor
        })
        .catch((error) => {
          console.error('There was a problem initializing the editor.', error)
        })
    }, 500)
  },
  methods: {
    async sendComment() {
      const elem = document.querySelector('.ck-content')
      console.log(elem.innerHTML)
      this.main.description = elem.innerHTML
      console.log(this.main)
      this.$toast(this.$t('checkCommit'))
    },
    changeFile(file) {
      this.main.image = file
    },
  },
}
</script>

<style lang="scss">
.study-center {
  display: flex;
  flex-direction: column;
  gap: 20px;
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
    max-width: 600px;
    padding: 25px 20px;
    display: flex;
    align-items: flex-start;
    column-gap: 20px;
    background-color: #f2f2f2;
    border-radius: 6px;
    margin-bottom: 20px;
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
.ck-editor__main {
  height: 300px !important;
}
.ck.ck-editor__main > .ck-editor__editable {
  height: 300px !important;
}
.ck-editor__main p {
  font-size: 16px;
  color: var(--text);
  line-height: calc(35 / 28) * 100%;
}
.ck-file-dialog-button {
  display: none !important;
}
</style>
