<template>
  <table class="table">
    <thead>
      <tr>
        <th>T/B</th>
        <th>F.A.A</th>
        <th>Hünäri we ýyly</th>
        <th>Bäsleşik geçirilen dersiň ady</th>
        <th>Gazanan netijesi</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, index) in datas" :key="data.id">
        <td>{{ index + 1 }}</td>
        <td>{{ data.name }}</td>
        <td>
          {{ data.majors_year }}
        </td>
        <td>{{ data.subject_name }}</td>
        <td>{{ data.student_result }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    sticky: {
      type: Boolean,
      default: () => false,
    },
    datas: {
      type: Array,
      default: () => [],
    },
  },
}
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
          padding: 6px;
        }
        @media (max-width: 479px) {
          padding: 4px;
          font-size: 12px;
          padding: 6px;
        }
      }
    }
  }
  tbody {
    tr {
      transition: background-color 0.3s ease 0s;
      cursor: pointer;
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
          padding: 6px;
        }
        @media (max-width: 479px) {
          font-size: 10px;
          padding: 4px;
        }
      }
    }
  }
}
</style>
