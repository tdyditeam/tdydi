<template>
  <div class="video-block">
    <div class="video-block__row">
      <div class="video-block__column">
        <div class="video-block__video">
          <video class="videos" poster="banner.png">
            <source src="@/assets/video/narhoz.mp4" />
          </video>
          <div @click="playVideo" class="video-block__play-icon">
            <img v-if="!status" src="@/assets/img/home/play.svg" alt="" />
            <img v-else src="@/assets/img/home/pouse.svg" alt="" />
          </div>
          <div class="video-block__bottom-block bottom-block-video">
            <div class="bottom-block-video__row">
              <div class="bottom-block-video__title">
                Ykdysadyýet we dolandyryş instituty
              </div>
              <div @click="fullscreen" class="bottom-block-video__time">
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
export default {
  data() {
    return {
      status: true,
    }
  },
  methods: {
    playVideo() {
      let video = document.querySelector('.videos')
      this.status = video.paused
      console.log(video)
      if (!video.paused) {
        video.pause()
      } else {
        video.play()
      }
    },
    fullscreen() {
      let video = document.querySelector('.videos')
      video.requestFullscreen()
    },
  },
  mounted() {
    // let video = document.getElementById('videos')
    // this.status = video.paused
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
