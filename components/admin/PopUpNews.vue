<template>
  <div class="popup">
    <div class="popup__wrapper">
      <div class="row">
        <div class="col-9">
          <div class="popup__tab">
            <span class="active">TKM</span>
            <span>RUS</span>
            <span>ENG</span>
          </div>
        </div>
        <div class="col-9">
          <text-filed label="Title"></text-filed>
        </div>
        <div class="col-3 row-4">
          <text-filed label="Title"></text-filed>
        </div>
        <!-- <s-col cols="3" rows="4" style="padding-top: 20px; width: 298.32px"> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  &__wrapper {
    background: #fff;
    width: 600px;
    padding: 15px;
  }
  &__tab {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    span {
      padding: 8px 28px;
      margin-right: 2px;
      font-family: 'Gilroy';
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;

      color: #969494;
      border-radius: 2px;
    }
    span.active {
      color: #333333;
      background: #f4f4f4;
    }
  }
}
</style>
