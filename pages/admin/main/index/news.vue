<template>
  <div class="admin">
    <div class="admin__news">
      <div class="admin__news-header">
        <base-button @click="openPupup" text="+ Goşmak" isActive></base-button>
      </div>
      <div class="admin__news-body">
        <table class="table">
          <thead class="table__head">
            <tr class="table__head-row">
              <th class="table__head-col">№</th>
              <th class="table__head-col">User photo</th>
              <th class="table__head-col">Title</th>
              <th class="table__head-col">Text</th>
              <th class="table__head-col">
                User name <br />
                Hünäri
              </th>
              <th class="table__head-col">Photo</th>
              <th class="table__head-col">Date</th>
              <th class="table__head-col">
                Super name <br />
                Wezipe
              </th>
              <th class="table__head-col"></th>
              <th class="table__head-col"></th>
            </tr>
          </thead>
          <tbody class="table__body">
            <tr v-for="(item, i) in 20" :key="item" class="table__body-row">
              <td class="table__body-col">{{ i }}</td>
              <td class="table__body-col">
                <img
                  class="table__body-col__image"
                  src="@/assets/img/home/TheHistory.png"
                  alt=""
                />
              </td>
              <td class="table__body-col"></td>
              <td class="table__body-col"></td>
              <td class="table__body-col"></td>
              <td class="table__body-col"></td>
              <td class="table__body-col"></td>
              <td class="table__body-col"></td>
              <td class="table__body-col">
                <img src="@/assets/img/admin/edit.png" alt="" />
              </td>
              <td class="table__body-col">
                <img src="@/assets/img/admin/trash.png" alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <pop-up-news v-if="popupNews" @close="popupNews = false"></pop-up-news>
  </div>
</template>

<script>
const PopUpNews = () => import('~/components/admin/popup/PopUpNews.vue')

export default {
  components: { PopUpNews },
  layout: 'admin',
  data() {
    return {
      popupNews: false,
    }
  },
  methods: {
    openPupup() {
      this.popupNews = true
    },
  },
}
</script>

<style lang="scss" scoped>
.admin {
  &__news {
    &-header {
      width: 100px;
      margin-bottom: 15px;
    }
    &-body {
      height: calc(100vh - 180px);
      overflow-y: scroll;
    }
  }
}
.table {
  width: 100%;
  border-collapse: collapse;
  &__head {
    height: 70px;
    background: #f4f4f4;
    position: sticky;
    top: 0;
    &-row {
    }
    &-col {
      text-align: left;
      padding-left: 10px;
    }
  }
  &__body {
    background: #ffffff;
    &-row {
      border-bottom: 2px solid #f4f4f4;
    }
    &-col {
      text-align: left;
      padding-left: 10px;
      &__image {
        width: 70px;
        height: 70px;
        padding: 10px;
      }
      &:nth-child(9) {
        width: 20px;
        img {
          width: 25px;
          height: 25px;
        }
      }
      &:nth-child(10) {
        width: 20px;
        padding-right: 10px;
        img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
}
</style>
