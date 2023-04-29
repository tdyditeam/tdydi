<template>
  <div class="video-block">
    <div class="video-block__row" v-if="galerias.length > 0">
      <div
        class="video-block__column"
        v-for="(galery, index) in galerias"
        :key="galery.id"
      >
        <div class="video-block__video">
          <video v-if="galery" class="videos" :id="galery.id">
            <source :src="`${imageUrl}${galery.image}`" />
          </video>
          <div @click="playVideo(galery)" class="video-block__play-icon">
            <svg
              v-if="playId === galery.id"
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35 17.4984C35 27.1634 27.167 35 17.502 35V35C7.837 35 0 27.169 0 17.504V17.504C0 7.83902 7.833 0 17.498 0V0C27.163 0 35 7.83341 35 17.4984V17.4984ZM11.6481 27.6834C13.2441 27.6834 14.5431 26.3896 14.5431 24.7936C14.5431 19.9318 14.5431 15.0686 14.5431 10.2051C14.5431 8.60911 13.2437 7.31529 11.6477 7.31529V7.31529C10.0517 7.31529 8.76351 8.60912 8.76351 10.2051C8.76351 15.0725 8.76351 19.93 8.76351 24.7936C8.76351 26.3896 10.0521 27.6834 11.6481 27.6834V27.6834ZM23.342 27.6864C24.9381 27.6864 26.2287 26.3925 26.2287 24.7964C26.2287 19.9199 26.2287 15.0612 26.2287 10.202C26.2287 8.60597 24.9289 7.3121 23.3328 7.3121V7.3121C21.7368 7.3121 20.4488 8.60599 20.4488 10.2021C20.4488 15.0729 20.4488 19.9344 20.4488 24.7964C20.4488 26.3925 21.746 27.6864 23.342 27.6864V27.6864Z"
                fill="#959595"
              />
              <path
                d="M14.5431 24.7941C14.5431 26.3901 13.244 27.6839 11.648 27.6839V27.6839C10.052 27.6839 8.76349 26.3901 8.76349 24.7941C8.76349 19.9305 8.76349 15.073 8.76349 10.2056C8.76349 8.60961 10.0516 7.31578 11.6476 7.31578V7.31578C13.2436 7.31578 14.5431 8.6096 14.5431 10.2056C14.5431 15.0691 14.5431 19.9323 14.5431 24.7941Z"
                fill="white"
              />
              <path
                d="M26.2284 24.7964C26.2284 26.3924 24.9378 27.6863 23.3417 27.6863V27.6863C21.7456 27.6863 20.4485 26.3925 20.4485 24.7964C20.4485 19.9344 20.4485 15.0729 20.4485 10.2021C20.4485 8.60598 21.7365 7.31209 23.3325 7.31209V7.31209C24.9286 7.31209 26.2284 8.60596 26.2284 10.202C26.2284 15.0612 26.2284 19.9199 26.2284 24.7964Z"
                fill="white"
              />
            </svg>
            <svg
              v-else
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="17.5"
                cy="17.5"
                r="17.5"
                fill="#D0D0D0"
                fill-opacity="0.56"
              />
              <path
                d="M26.5 17.866C27.1667 17.4811 27.1667 16.5189 26.5 16.134L13 8.33975C12.3333 7.95485 11.5 8.43597 11.5 9.20577V24.7942C11.5 25.564 12.3333 26.0452 13 25.6603L26.5 17.866Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="video-block__bottom-block bottom-block-video">
            <div class="bottom-block-video__row">
              <div class="bottom-block-video__title" v-if="galery.name">
                {{ galery.name }}
              </div>
              <div class="bottom-block-video__title" v-else>
                TÜRKMEN DÖWLET YKDYSADYÝET WE DOLANDYRYŞ INSTITUTY
              </div>
              <div
                @click="fullscreen(galery.id)"
                class="bottom-block-video__time"
              >
                <img src="@/assets/img/home/maxsimize.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      status: true,
      selectedId: null,
      playId: null,
    }
  },
  computed: {
    ...mapGetters(['imageUrl']),
  },
  methods: {
    playVideo(galery) {
      let video = document.getElementById(`${galery.id}`)
      galery.status = !galery.status
      if (this.selectedId !== null && this.selectedId !== galery.id) {
        let elem = document.getElementById(`${this.selectedId}`)
        let find = this.galerias.find((data) => data.id === this.selectedId)
        find.status = !find.status
        if (!find.status) {
          elem.pause()
        }
      }
      this.selectedId = galery.id
      if (galery.status) {
        this.playId = galery.id
        video.play()
      } else {
        this.playId = null
        video.pause()
      }
    },
    fullscreen(id) {
      let video = document.getElementById(`${id}`)
      video.requestFullscreen()
    },
  },
}
</script>

<style lang="scss" scoped>
.video-block {
  transition: all 3s;
  &__row {
    display: flex;
    flex-wrap: wrap;
    margin: 0px -10px;
  }

  &__column {
    flex: 0 1 33.333%;
    padding: 0px 10px;
    margin-bottom: 20px;
    cursor: pointer;
    width: 350px;
    height: 350px;
    @media (max-width: 767px) {
      flex: 0 1 50%;
    }
    @media (max-width: 479px) {
      flex: 0 1 100%;
    }
  }

  &__video {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    &:hover {
      .bottom-block-video {
        opacity: 1;
      }
    }
  }

  &__play-icon {
    cursor: pointer;
    position: absolute;
    opacity: 0;
  }

  &__bottom-block {
  }
}
.bottom-block-video {
  transition: all 1s;
  position: absolute;
  width: 100%;
  bottom: 0;
  opacity: 0;
  &__row {
    display: flex;
    justify-content: space-between;
    border-radius: 0px 0px 10px 10px;
    padding: 20px;
    background: linear-gradient(
      180deg,
      rgba(64, 62, 62, 0) 0%,
      rgba(47, 47, 47, 0.78) 100%
    );
    @media (max-width: 767px) {
      padding: 10px;
    }
    @media (max-width: 479px) {
      padding: 20px;
    }
  }

  &__title {
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    line-height: 114%;
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  &__time {
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    line-height: 114%;
    img {
      width: 20px;
      height: 20px;
    }
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
}
.video-block__video:hover .video-block__play-icon {
  opacity: 1;
}
</style>
