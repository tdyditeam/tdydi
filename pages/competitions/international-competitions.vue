<template>
  <div class="international-competitions">
    <bread-crumbs></bread-crumbs>
    <table class="table">
      <thead>
        <tr>
          <th>T/B</th>
          <th>F.A.A</th>
          <th>Hunari we yyly</th>
          <th>Bäsleşik geçirilen dersiň ady</th>
          <th>Gazanan netijesi</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Rejepow Taçmyrat Çarymyradowiç</td>
          <td>
            Buhgalterçilik hasaba alnyşy we audit taýýarlyk ugrunyň 1-nji ýyl
            talyby
          </td>
          <td>Türkmenistanyň taryhy</td>
          <td>II orun</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Rejepow Taçmyrat Çarymyradowiç</td>
          <td>
            Buhgalterçilik hasaba alnyşy we audit taýýarlyk ugrunyň 1-nji ýyl
            talyby
          </td>
          <td>Türkmenistanyň taryhy</td>
          <td>II orun</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Rejepow Taçmyrat Çarymyradowiç</td>
          <td>
            Buhgalterçilik hasaba alnyşy we audit taýýarlyk ugrunyň 1-nji ýyl
            talyby
          </td>
          <td>Türkmenistanyň taryhy</td>
          <td>II orun</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Rejepow Taçmyrat Çarymyradowiç</td>
          <td>
            Buhgalterçilik hasaba alnyşy we audit taýýarlyk ugrunyň 1-nji ýyl
            talyby
          </td>
          <td>Türkmenistanyň taryhy</td>
          <td>II orun</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Rejepow Taçmyrat Çarymyradowiç</td>
          <td>
            Buhgalterçilik hasaba alnyşy we audit taýýarlyk ugrunyň 1-nji ýyl
            talyby
          </td>
          <td>Türkmenistanyň taryhy</td>
          <td>II orun</td>
        </tr>
        <tr class="_active">
          <td>1</td>
          <td>Rejepow Taçmyrat Çarymyradowiç</td>
          <td>
            Buhgalterçilik hasaba alnyşy we audit taýýarlyk ugrunyň 1-nji ýyl
            talyby
          </td>
          <td>Türkmenistanyň taryhy</td>
          <td>II orun</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Rejepow Taçmyrat Çarymyradowiç</td>
          <td>
            Buhgalterçilik hasaba alnyşy we audit taýýarlyk ugrunyň 1-nji ýyl
            talyby
          </td>
          <td>Türkmenistanyň taryhy</td>
          <td>II orun</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.international-competitions {
  @media (max-width: 992px) {
    padding-top: 120px;
  }
}
table {
  padding-top: 40px;
  width: 100%;

  thead {
    background-color: #20ba72;
    height: 80px;
    tr {
      th {
        padding: 10px;
        font-weight: 400;
        font-size: 16px;
        line-height: 120%;
        color: #ffffff;
        text-align: center;
        @media (max-width: 767px) {
          font-size: 14px;
        }
        @media (max-width: 479px) {
          font-size: 12px;
          padding: 6px;
        }
      }
    }
  }
  tbody {
    tr {
      transition: background-color 0.3s ease 0s;
      &:nth-child(even) {
        background-color: #f5f5f5;
      }
      &._active,
      &:hover {
        background-color: rgba(22, 171, 101, 0.13);
      }
      td {
        font-weight: 400;
        font-size: 16px;
        line-height: 120%;
        color: #333333;
        padding: 10px;
        @media (max-width: 767px) {
          font-size: 14px;
        }
        @media (max-width: 479px) {
          font-size: 12px;
          padding: 6px;
        }
      }
    }
  }
}
</style>
