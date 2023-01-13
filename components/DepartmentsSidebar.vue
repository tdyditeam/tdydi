<template>
  <div class="departments-sidebar">
    <div class="departments-sidebar__row">
      <div class="departments-sidebar__item">
        <p>Fakultetler</p>
      </div>
      <div class="departments-sidebar__item departments-sidebar__item--active">
        <p>Kafedralar</p>
      </div>
      <div class="departments-sidebar__item">
        <p>Kafedralar</p>
      </div>
      <div class="departments-sidebar__item">
        <p>Kafedralar</p>
      </div>
      <div class="departments-sidebar__item">
        <p>Kafedralar</p>
      </div>
      <div class="departments-sidebar__item">
        <p>Kafedralar</p>
      </div>
      <div class="departments-sidebar__item">
        <p>Kafedralar</p>
      </div>
      <div class="departments-sidebar__item">
        <p>Kafedralar</p>
      </div>
      <div class="departments-sidebar__item">
        <p>Kafedralar</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.departments-sidebar {
  margin-top: 10px;
  height: 100%;
  background-color: #f6f6f6;
  border-radius: 8px;
  &__row {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px;
  }

  &__item {
    width: 367px;
    padding: 13.5px;
    font-family: 'Gilroy';
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s;
    p {
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
    }
    &:hover {
      background-color: #dedede;
    }
  }

  &__item--active {
    background-color: #16ab65;
    color: #fff;
    &:hover {
      background-color: #16ab65;
      color: #fff;
    }
  }
}
</style>
