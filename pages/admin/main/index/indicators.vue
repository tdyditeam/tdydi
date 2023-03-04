<template>
  <div class="admin">
    <div class="admin__news">
      <div class="admin__news-header">
        <base-button @click="openPupup" text="+ Goşmak" isActive></base-button>
      </div>
      <div class="admin__langs">
        <div class="admin__lang">tk</div>
        <div class="admin__lang">ru</div>
        <div class="admin__lang">en</div>
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
            <tr
              v-for="(item, i) in indicators"
              :key="item.id"
              class="table__body-row"
            >
              <td class="table__body-col">{{ i + 1 }}</td>
              <td class="table__body-col">
                <img
                  class="table__body-col__image"
                  :src="`${imageUrl}${item.image}`"
                  alt=""
                />
              </td>
              <td class="table__body-col">{{ item.name }}</td>
              <td class="table__body-col">{{ item.count }}</td>
              <td class="table__body-col actions">
                <img src="@/assets/img/admin/edit.png" alt="" />
                <img
                  src="@/assets/img/admin/trash.png"
                  alt=""
                  @click="deleteItem(item)"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <pop-up-indicators
      v-if="popupNews"
      @close="close"
      height="350"
    ></pop-up-indicators>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const PopUpIndicators = () =>
  import('~/components/admin/popup/PopUpIndicators.vue')
import { request } from '@/api/generic.api'

export default {
  components: { PopUpIndicators },
  layout: 'admin',
  data() {
    return {
      popupNews: false,
      indicators: [],
    }
  },
  computed: {
    ...mapGetters(['imageUrl']),
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
        const { indicators } = await request({
          url: `/indicators?lang=${`tm`}`,
          method: 'GET',
        })
        console.log(indicators)
        if (indicators) {
          this.indicators = indicators
        }
      } catch (error) {
        console.log(error)
      }
    },
    async close() {
      this.popupNews = false
      await this.fetchIndicators()
    },
    async deleteItem(item) {
      try {
        const res = await request({
          url: `/indicators`,
          data: {
            image_name: item.image,
          },
          method: 'DELETE',
        })
        console.log(res)
        //   if (indicators) {
        //     this.indicators = indicators
        //   }
      } catch (error) {
        console.log(error)
      }
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
