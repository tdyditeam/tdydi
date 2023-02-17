<template>
  <div class="table">
    <div class="table__wrapper">
      <div class="table__overlay">
        <table>
          <thead :class="['table__head', { 'table__head--sticky': sticky }]">
            <tr>
              <th>T/B</th>
              <th>F.A.A</th>
              <th>Hunari we yyly</th>
              <th>Bäsleşik geçirilen dersiň ady</th>
              <th>Gazanan netijesi</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table__row">
              <td>1</td>
              <td>Rejepow Taçmyrat Çarymyradowiç</td>
              <td>
                Buhgalterçilik hasaba alnyşy we audit taýýarlyk ugrunyň 1-nji
                ýyl talyby
              </td>
              <td>Türkmenistanyň taryhy</td>
              <td>II orun</td>
            </tr>
            <tr class="table__row">
              <td>1</td>
              <td>Rejepow Taçmyrat Çarymyradowiç</td>
              <td>
                Buhgalterçilik hasaba alnyşy we audit taýýarlyk ugrunyň 1-nji
                ýyl talyby
              </td>
              <td>Türkmenistanyň taryhy</td>
              <td>II orun</td>
            </tr>
            <tr class="table__row">
              <td>1</td>
              <td>Rejepow Taçmyrat Çarymyradowiç</td>
              <td>
                Buhgalterçilik hasaba alnyşy we audit taýýarlyk ugrunyň 1-nji
                ýyl talyby
              </td>
              <td>Türkmenistanyň taryhy</td>
              <td>II orun</td>
            </tr>
            <tr class="table__row">
              <td>1</td>
              <td>Rejepow Taçmyrat Çarymyradowiç</td>
              <td>
                Buhgalterçilik hasaba alnyşy we audit taýýarlyk ugrunyň 1-nji
                ýyl talyby
              </td>
              <td>Türkmenistanyň taryhy</td>
              <td>II orun</td>
            </tr>
            <tr class="table__row">
              <td>1</td>
              <td>Rejepow Taçmyrat Çarymyradowiç</td>
              <td>
                Buhgalterçilik hasaba alnyşy we audit taýýarlyk ugrunyň 1-nji
                ýyl talyby
              </td>
              <td>Türkmenistanyň taryhy</td>
              <td>II orun</td>
            </tr>
            <tr class="table__row">
              <td>1</td>
              <td>Rejepow Taçmyrat Çarymyradowiç</td>
              <td>
                Buhgalterçilik hasaba alnyşy we audit taýýarlyk ugrunyň 1-nji
                ýyl talyby
              </td>
              <td>Türkmenistanyň taryhy</td>
              <td>II orun</td>
            </tr>
            <tr class="table__row">
              <td>1</td>
              <td>Rejepow Taçmyrat Çarymyradowiç</td>
              <td>
                Buhgalterçilik hasaba alnyşy we audit taýýarlyk ugrunyň 1-nji
                ýyl talyby
              </td>
              <td>Türkmenistanyň taryhy</td>
              <td>II orun</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sticky: {
      type: Boolean,
      default: () => false,
    },
    img: {
      type: Boolean,
      default: () => true,
    },
  },
}
</script>

<style scoped lang="scss">
.table {
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  &__wrapper {
    width: 100%;
  }
  &__overlay {
    overflow: auto;
    scroll-behavior: smooth;
  }
  table {
    width: 100%;
    border-spacing: 0 2px;
  }
  .table__head {
    border-radius: 4px;
    &--sticky {
      position: sticky;
      top: 2px;
      z-index: 1;
      &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 6px;
        left: 0;
        top: -3px;
        background-color: var(--white);
        z-index: 1;
      }
    }
    tr {
      th {
        background-color: var(--primary);
        z-index: 2;
        padding: 14px 10px;
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        text-transform: uppercase;
        color: var(--white);
        &:not(:first-child) {
          border-left: 2px solid #fff;
        }
      }
    }
  }
  .table__row {
    cursor: pointer;
    td {
      font-family: 'Gilroy';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 120%;
      text-transform: uppercase;
      color: var(---text);
      padding: 15px;
      word-break: break-all;
      &:not(:first-child) {
        border-left: 2px solid #fff;
      }
      text-align: center;
    }
    &:hover td {
      background: rgba(22, 171, 101, 0.13) !important;
    }
    &:nth-child(even) {
      td {
        background-color: #f5f5f5;
      }
    }
  }
  &__img {
    width: 135px;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 100%;
      width: 100%;
      border-radius: 2px;
      object-fit: contain;
      object-position: center center;
    }
  }
}
</style>
