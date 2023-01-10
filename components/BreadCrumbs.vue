<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__list">
      <a href="#" class="breadcrumbs__item">Biz barada</a>
    </li>
    <li class="breadcrumbs__list">
      <a href="#" class="breadcrumbs__item">Wakalar</a>
    </li>
    <li class="breadcrumbs__list active">
      <a href="#" class="breadcrumbs__item">Täzelikler</a>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;
  list-style-type: none;
  margin: 0;
  padding: 11px 0px;
  font-family: 'Gilroy';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  color: var(--text);
  &__list {
    align-items: center;
    display: inline-flex;
    position: relative;
    &:not(:last-child) {
      padding-right: 20px;
      &::after {
        position: absolute;
        content: '/';
        right: 5px;
        width: 10px;
      }
    }
    &.active {
      color: var(--primary);
    }
  }
}
</style>
