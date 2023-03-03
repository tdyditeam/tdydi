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
              <th class="table__head-col">Surat</th>
              <th class="table__head-col">Ady</th>
              <th class="table__head-col">Sany</th>
              <th class="table__head-col" style="width: 200px">Düzetmek</th>
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
              <td class="table__body-col actions">
                <img src="@/assets/img/admin/edit.png" alt="" />
                <img src="@/assets/img/admin/trash.png" alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <pop-up-indicators
      v-if="popupNews"
      @close="popupNews = false"
      @indicatorsCreated="indicatorsCreated"
      height="350"
    ></pop-up-indicators>
  </div>
</template>

<script>
const PopUpIndicators = () =>
  import('~/components/admin/popup/PopUpIndicators.vue')
import { request } from '@/api/generic.api'

export default {
  components: { PopUpIndicators },
  layout: 'admin',
  data() {
    return {
      popupNews: false,
    }
  },
  async mounted() {
    await this.fetchIndicators()
  },
  methods: {
    openPupup() {
      this.popupNews = true
    },
    async fetchIndicators() {
      try {
        const res = await request({
          url: '/indicators',
          method: 'GET',
        })
        console.log(res)
        if (res) {
        }
      } catch (error) {
        console.log(error)
      }
    },
    async indicatorsCreated() {
      await this.fetchIndicators()
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
      width: 100%;
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
    }
  }
  .actions {
    img {
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
}
</style>
