<template>
  <div class="faculties">
    <div class="study-center">
      <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
      <block-pages
        :description="datas?.description"
        :title="datas?.name"
        :img="datas?.image"
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
            :fileName="fileName"
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
        <template v-if="comments.length > 0">
          <div
            class="study-center__chat chat"
            v-for="comment in comments"
            :key="comment.id"
          >
            <div class="chat__item">
              <div class="chat__profile">
                <p>{{ comment.name.slice(0, 1).toUpperCase() }}</p>
              </div>
              <div class="chat__people">
                <div class="chat__name-data">
                  <p class="chat__people-name">{{ comment.name }}</p>
                  <p class="chat__data">
                    {{
                      new Date(comment.created_at).toISOString().slice(0, 10)
                    }}
                  </p>
                </div>
                <p
                  class="chat__people-incoming"
                  v-html="comment.description"
                ></p>
                <div class="comments__files" v-if="comment.image">
                  <a
                    :href="`${imageUrl}${comment.image}`"
                    target="download"
                    class="comments__file"
                  >
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
                    <p>{{ $t('documentCom') }}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
    <sidebar-without-route
      :subMenus="subMenus"
      :activeId="activeId"
      @changeDatas="changeDatas"
    ></sidebar-without-route>
  </div>
</template>

<script>
import { request } from '~/api/generic.api'
import { mapGetters } from 'vuex'
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
      fileName: null,
      comments: [],
      main: {
        id: null,
        name: null,
        email: null,
        phone_number: null,
        description: null,
        image: null,
        is_needed: false,
      },
      datas: null,
      subMenus: null,
      activeId: null,
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
          path: `/about-us/study-center?q=${this.$route.query.q}`,
          exact: true,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['imageUrl']),
  },
  async fetch() {
    await Promise.all([this.fetchDatas(), this.fetchCommets()])
  },
  async mounted() {
    document.querySelector('.wrapper').scrollTop = 0
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
    async fetchDatas() {
      try {
        const res = await request({
          url: `/study-centers`,
          params: {
            lang: this.$i18n.locale,
          },
          method: 'GET',
        })
        console.log('data', res)
        if (res.status) {
          this.subMenus = res.study_centers || null
          this.activeId = this.subMenus[0].id
          this.datas = this.subMenus[0]
        }
      } catch (error) {
        console.log(error)
      }
    },
    changeDatas(id) {
      this.datas = this.subMenus.find((item) => item.id === id)
      console.log(this.datas)
      this.activeId = this.subMenus.find((item) => item.id === id)?.id
    },
    async sendComment() {
      const elem = document.querySelector('.ck-content')
      console.log(elem.innerHTML)
      this.main.description = elem.innerHTML
      console.log(this.main)
      try {
        const res = await request({
          url: `/comments`,
          data: this.main,
        })
        console.log('comments', res)
        if (res.status) {
          this.$toast(this.$t('checkCommit'))
          this.main.id = null
          this.main.name = null
          this.main.email = null
          this.main.phone_number = null
          this.main.description = null
          this.main.image = null
          this.main.is_needed = false
          this.fileName = null
        }
      } catch (error) {
        console.log(error)
      }
    },
    async fetchCommets() {
      try {
        const res = await request({
          url: `/comments/get-user`,
          method: 'GET',
        })
        console.log('comments-get', res)
        if (res.status) {
          this.comments = res.comment || []
        }
      } catch (error) {
        console.log(error)
      }
    },
    changeFile(file) {
      this.fileName = file.name
      this.main.image = file
      console.log(this.main)
    },
  },
}
</script>
<style lang="scss">
.faculties {
  display: flex;
  justify-content: space-between;
}
.study-center {
  width: 100%;
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
.comments {
  // .comments__files
  &__files {
    padding-top: 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  // .comments__file
  &__file {
    width: 80%;
    display: flex;
    border: 0.5px solid #c1c1c1;
    border-radius: 4px;
    color: var(--secondary);
    align-items: center;
    padding: 10px;
    p {
      padding: 0 10px;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 0.135px;
    }
    span:last-child {
      cursor: pointer;
    }
  }
}
</style>
