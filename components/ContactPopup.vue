<template>
  <div :class="['contact-popup', { active: isActive }]">
    <div class="contact-popup__row">
      <div class="contact-popup__block">
        <div class="contact-popup__icon-close-wrapper">
          <div class="contact-popup__icon-close" @click="$emit('close')">
            <img
              src="@/assets/img/home/contact-popup/icon.svg"
              alt="icon-close"
            />
          </div>
        </div>
        <div class="contact-popup__body body-pop-up">
          <div class="body-pop-up__left-block">
            <div class="body-pop-up__title-wrapper">
              <div class="body-pop-up__title">{{ $t('button.contact') }}</div>
            </div>
            <div class="body-pop-up__input-block input-block-contact">
              <div class="input-block-contact__item">
                <div class="input-block-contact__title">
                  {{ $t('fullName') }}*
                </div>
                <form
                  action="#"
                  @submit.prevent
                  class="input-block-contact__form"
                >
                  <input
                    autocomplete="off"
                    :placeholder="$t('fullName')"
                    v-model="main.name"
                    class="input-block-contact__input"
                  />
                </form>
              </div>
              <div class="input-block-contact__item">
                <div class="input-block-contact__title">{{ $t('email') }}*</div>
                <form
                  action="#"
                  @submit.prevent
                  class="input-block-contact__form"
                >
                  <input
                    autocomplete="off"
                    type="email"
                    :placeholder="$t('email')"
                    v-model="main.email"
                    class="input-block-contact__input"
                  />
                </form>
              </div>
              <div class="input-block-contact__item">
                <div class="input-block-contact__title">
                  {{ $t('message') }}*
                </div>
                <form
                  action="#"
                  @submit.prevent
                  class="input-block-contact__form"
                >
                  <textarea
                    :placeholder="$t('message')"
                    v-model="main.text"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    class="input-block-contact__textarea"
                  ></textarea>
                </form>
              </div>
            </div>
            <div class="input-block-contact__button-wrapper">
              <button
                class="input-block-contact__button"
                @click.prevent="contactUs"
              >
                {{ $t('sendCom') }}
              </button>
            </div>
          </div>
          <div class="body-pop-up__right-block right-block-contact">
            <div class="right-block-contact__image">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.3292064233046!2d58.36930555363504!3d37.899143344014654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f70027fba23882f%3A0xdf41c4a8f5ab0ac!2z0KLRg9GA0LrQvNC10L3RgdC60LjQuSDQs9C-0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0LjQvdGB0YLQuNGC0YPRgiDRjdC60L7QvdC-0LzQuNC60Lgg0Lgg0YPQv9GA0LDQstC70LXQvdC40Y8!5e0!3m2!1sru!2s!4v1677316828827!5m2!1sru!2s"
                width="600"
                height="450"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <!-- <img src="@/assets/img/home/contact-popup/img.png" alt="img" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { request } from '~/api/generic.api'
export default {
  props: {
    isActive: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      main: {
        id: null,
        name: null,
        email: null,
        text: null,
      },
    }
  },
  methods: {
    async contactUs() {
      try {
        const res = await request({
          url: `/contact-us`,
          data: this.main,
        })
        if (res.status) {
          this.$emit('close')
          this.$toast(this.$t('sendContact'))
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.contact-popup {
  transition: all 1s;
  opacity: 0;
  visibility: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 111;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    opacity: 1;
    visibility: visible;
  }

  &__row {
  }

  &__block {
    padding: 40px;
    @media (max-width: 992px) {
      width: 700px;
    }
    @media (max-width: 767px) {
      width: 500px;
      padding: 20px;
    }
    @media (max-width: 479px) {
      width: 420px;
      padding: 10px;
    }
  }

  &__icon-close-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }

  &__icon-close {
    padding: 20px;
    background: rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(25px);
    display: inline-flex;
    border-radius: 50%;
    cursor: pointer;
    @media (max-width: 992px) {
      padding: 14px;
    }
  }

  &__body {
    background: rgba(51, 51, 51, 0.8);
    backdrop-filter: blur(7px);
    border-radius: 10px;
    padding: 40px;
    @media (max-width: 767px) {
      padding: 20px;
    }
  }
}
.body-pop-up {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
  &__left-block {
  }

  &__title-wrapper {
    display: flex;
    flex-direction: column;
    color: #fff;
    font-weight: 500;
    margin-bottom: 30px;
    @media (max-width: 992px) {
      margin-bottom: 15px;
    }
  }

  &__title {
    font-size: 40px;
    line-height: 47px;
  }

  &__sub-title {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.04em;
  }

  &__right-block {
  }
}
.input-block-contact {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 8px;
  @media (max-width: 992px) {
    gap: 10px;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  &__title {
    font-weight: 500;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0.05em;
    color: #ffffff;
  }

  &__input {
    width: 100%;
    background: transparent;
    border: 1px solid #ffffff;
    border-radius: 4px;
    padding: 10px;
    color: #fff;
    &::placeholder {
      color: #efefefb2;
    }
  }

  &__textarea {
    height: 73px;
    width: 100%;
    background: transparent;
    border: 1px solid #ffffff;
    border-radius: 4px;
    padding: 10px;
    color: #fff;
    resize: none;
    &::placeholder {
      color: #efefefb2;
    }
  }

  &__button-wrapper {
    display: flex;
    justify-content: flex-end;
  }

  &__button {
    background-color: #fff;
    padding: 15px 30px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 114%;
  }
}
.right-block-contact {
  &__image {
    @media (max-width: 992px) {
      iframe {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
}
</style>
