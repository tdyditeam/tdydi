<template>
  <div class="events __container">
    <div class="events__wrapper">
      <div class="events__title">
        <div class="events__title-content">
          <div class="events__title-name">Wakalar</div>
          <div class="events__title-actions">
            <span
              v-for="action in actions"
              :key="action.id"
              :class="{ _active: activeId === action.id }"
              @click="changeAction(action.id)"
              >{{ action.name }}</span
            ><span>Hemmesi</span>
          </div>
        </div>
        <div class="events__title-divider"></div>
      </div>
      <div class="events__body">
        <div class="events__body-container">
          <div class="swiper-wrapper events__body-cards">
            <div class="swiper-slide events__body-card">
              <div class="events__body-content">
                <div class="events__body-content-img">
                  <img src="@/assets/img/home/events/1.png" alt="" />
                </div>
                <div class="date">03.10.2022</div>
                <div class="events__body-title">
                  Where does it come from? Where does it come from?..
                </div>
                <div class="events__body-description">
                  Where does it come from? Where does it come from?..\ Where
                  does it come from? Where does it come from?..
                </div>
              </div>
              <div class="events__body-bottom">
                <div class="events__body-left">
                  <img src="" alt="" />
                  <div class="events__body-name">
                    <span>Atayew Atamyratgulmuhammet</span
                    ><span>Elektron isewurliginin ykdysadyyeti</span>
                  </div>
                </div>
                <div class="events__body-right">
                  <div class="events__body-teacher">
                    <span>Mugallym:</span><span>Amanow Aman</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide events__body-card">
              <div class="events__body-content">
                <div class="events__body-content-img">
                  <img src="@/assets/img/home/events/2.png" alt="" />
                </div>
                <div class="date">03.10.2022</div>
                <div class="events__body-title">
                  Where does it come from? Where does it come from?..
                </div>
                <div class="events__body-description">
                  Where does it come from? Where does it come from?..\ Where
                  does it come from? Where does it come from?..
                </div>
              </div>
              <div class="events__body-bottom">
                <div class="events__body-left">
                  <img src="" alt="" />
                  <div class="events__body-name">
                    <span>Atayew Atamyratgulmuhammet</span
                    ><span>Elektron isewurliginin ykdysadyyeti</span>
                  </div>
                </div>
                <div class="events__body-right">
                  <div class="events__body-teacher">
                    <span>Mugallym:</span><span>Amanow Aman</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide events__body-card">
              <div class="events__body-content">
                <div class="events__body-content-img">
                  <img src="@/assets/img/home/events/3.png" alt="" />
                </div>
                <div class="date">03.10.2022</div>
                <div class="events__body-title">
                  Where does it come from? Where does it come from?..
                </div>
                <div class="events__body-description">
                  Where does it come from? Where does it come from?..\ Where
                  does it come from? Where does it come from?..
                </div>
              </div>
              <div class="events__body-bottom">
                <div class="events__body-left">
                  <img src="" alt="" />
                  <div class="events__body-name">
                    <span>Atayew Atamyratgulmuhammet</span
                    ><span>Elektron isewurliginin ykdysadyyeti</span>
                  </div>
                </div>
                <div class="events__body-right">
                  <div class="events__body-teacher">
                    <span>Mugallym:</span><span>Amanow Aman</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide events__body-card">
              <div class="events__body-content">
                <div class="events__body-content-img">
                  <img src="@/assets/img/home/events/1.png" alt="" />
                </div>
                <div class="date">03.10.2022</div>
                <div class="events__body-title">
                  Where does it come from? Where does it come from?..
                </div>
                <div class="events__body-description">
                  Where does it come from? Where does it come from?..\ Where
                  does it come from? Where does it come from?..
                </div>
              </div>
              <div class="events__body-bottom">
                <div class="events__body-left">
                  <img src="" alt="" />
                  <div class="events__body-name">
                    <span>Atayew Atamyratgulmuhammet</span
                    ><span>Elektron isewurliginin ykdysadyyeti</span>
                  </div>
                </div>
                <div class="events__body-right">
                  <div class="events__body-teacher">
                    <span>Mugallym:</span><span>Amanow Aman</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-slide events__body-card">
              <div class="events__body-content">
                <div class="events__body-content-img">
                  <img src="@/assets/img/home/events/2.png" alt="" />
                </div>
                <div class="date">03.10.2022</div>
                <div class="events__body-title">
                  Where does it come from? Where does it come from?..
                </div>
                <div class="events__body-description">
                  Where does it come from? Where does it come from?..\ Where
                  does it come from? Where does it come from?..
                </div>
              </div>
              <div class="events__body-bottom">
                <div class="events__body-left">
                  <img src="" alt="" />
                  <div class="events__body-name">
                    <span>Atayew Atamyratgulmuhammet</span
                    ><span>Elektron isewurliginin ykdysadyyeti</span>
                  </div>
                </div>
                <div class="events__body-right">
                  <div class="events__body-teacher">
                    <span>Mugallym:</span><span>Amanow Aman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide events__body-buttons">
            <div class="events__body-buttons-prev">
              <img
                src="@/assets/img/home/events/keyboard_arrow_left.svg"
                alt=""
              />
            </div>
            <div class="events__body-buttons-next">
              <img
                src="@/assets/img/home/events/keyboard_arrow_right.svg"
                alt=""
              />
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
      activeId: 1,
      actions: [
        { id: 1, name: 'Täzelikler' },
        { id: 2, name: 'Makalalar' },
      ],
      options: {
        loop: true,
        speed: 2000,
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
      },
    }
  },
  methods: {
    changeAction(id) {
      this.activeId = id
    },
  },
}
</script>

<style lang="scss" scoped>
.events {
  padding: 30px 0px 100px 0px;
  &__title {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    &-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-name {
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 500;
      font-size: 40px;
      line-height: 47px;
      color: var(--text);
    }
    &-actions {
      span {
        padding: 14px 13px;
        background: #e5f3ff;
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: #16ab65;
        cursor: pointer;
      }
      span:not(:first-child) {
        margin-left: 5px;
      }
      span:nth-child(1) {
        border-radius: 6px 0px 0px 6px;
      }
      span:nth-child(3) {
        background: var(--text);
        border-radius: 0px 6px 6px 0px;
        color: var(--white);
      }
      span._active {
        background: #16ab65;
        color: var(--white);
      }
    }
    &-divider {
      height: 1px;
      background: #808884;
      border-radius: 15px;
      margin-top: 15px;
    }
  }
  &__body {
    &-container {
    }
    &-cards {
      display: flex;
      overflow-x: auto;
      &::-webkit-scrollbar {
        display: none;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }
    }
    &-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 430px;
      height: 429px;
      padding: 10px;
      background: var(--white);
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      &:not(:first-child) {
        margin-left: 30px;
      }
    }
    &-content {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 15px;
      width: 410px;
      height: 360px;
      background: #f5f5f5;
      border-radius: 10px;
      &-img {
        width: 380px;
        height: 200px;
        border-radius: 10px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }
      }
    }
    &-buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-top: 20px;
      &-prev {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        padding: 8px 4px;
        background: #eef0f4;
        border-radius: 24px;
        transform: matrix(-1, 0, 0, 1, 0, 0);
        cursor: pointer;
      }
      &-next {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        padding: 8px 4px;
        background: #eef0f4;
        border-radius: 24px;
        transform: matrix(-1, 0, 0, 1, 0, 0);
        margin-left: 24px;
        cursor: pointer;
      }
    }
  }
}
</style>
