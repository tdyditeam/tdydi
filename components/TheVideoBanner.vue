<template>
  <div class="banner__video">
    <div class="banner__video-wrapper">
      <!--  -->
      <video id="videos" autoplay muted loop poster="banner.png">
        <source src="@/assets/video/video.mp4" />
      </video>
      <div class="banner__video-controls">
        <div @click="playVideo" class="banner__video-play">
          <img v-if="!status" src="@/assets/img/home/play.svg" alt="" />
          <img v-else src="@/assets/img/home/pouse.svg" alt="" />
        </div>
        <div class="banner__video-time"></div>
        <div @click="fullscreen" class="banner__video-maxsimize">
          <img src="@/assets/img/home/maxsimize.png" alt="" />
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
      let video = document.getElementById('videos')
      this.status = video.paused
      if (!video.paused) {
        video.pause()
      } else {
        video.play()
      }
    },
    fullscreen() {
      let video = document.getElementById('videos')
      video.requestFullscreen()
    },
  },
  mounted() {
    let video = document.getElementById('videos')
    this.status = video.paused
  },
}
</script>

<style lang="scss" scoped>
.banner__video {
  position: absolute;
  width: 500px;
  height: 300px;
  bottom: 50px;
  right: 30px;
  z-index: 5;
  border-radius: 20px;
  overflow: hidden;
  &-wrapper {
    position: relative;
    video {
      border-radius: 20px;
      width: 100%;
      height: 100%;
    }
  }
  &-controls {
    position: absolute;
    bottom: 2px;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 6px 30px;
    background: rgba(72, 72, 72, 0.478);
    border-radius: 0px 0px 20px 20px;
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }
  &-time {
    flex: 1 1 auto;
  }
  &-maxsimize {
    width: 25px;
    height: 25px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  &-play {
    width: 35px;
    height: 35px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
