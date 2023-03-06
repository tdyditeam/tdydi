<template>
  <div class="admin">
    <div class="admin__news">
      <div class="admin__news-header">
        <base-button @click="openPupup" text="+ Goşmak" isActive></base-button>
      </div>
      <div class="popup__tab">
        <span
          v-for="lang in langs"
          :key="lang.id"
          @click="toggleLang(lang.id, lang.key)"
          :class="{ active: activeLang === lang.id }"
          >{{ lang.name }}</span
        >
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
                <img
                  src="@/assets/img/admin/edit.png"
                  alt=""
                  @click="editItem(item)"
                />
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
      :editItemDatas="editItemDatas"
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
      activeLang: 1,
      lang: 'tm',
      editItemDatas: null,
      langs: [
        {
          id: 1,
          name: 'TK',
          key: 'tm',
        },
        {
          id: 2,
          name: 'RU',
          key: 'ru',
        },
        {
          id: 3,
          name: 'EN',
          key: 'en',
        },
      ],
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
      this.editItemDatas = null
      this.popupNews = true
    },
    async toggleLang(id, key) {
      this.activeLang = id
      this.lang = key
      await this.fetchIndicators()
    },
    async fetchIndicators() {
      try {
        const { indicators } = await request({
          url: `/indicators?lang=${this.lang}`,
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
        if (res.status) {
          await this.fetchIndicators()
        }
      } catch (error) {
        console.log(error)
      }
    },
    editItem(item) {
      this.editItemDatas = item
      this.popupNews = true
      console.log(this.editItemDatas)
      // try {
      //   const res = await request({
      //     url: `/indicators/${item.id}`,
      //     method: 'PUT',
      //   })
      //   console.log(res)
      //   //   if (res.status) {
      //   //     await this.fetchIndicators()
      //   //   }
      // } catch (error) {
      //   console.log(error)
      // }
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
.popup {
  &__tab {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    span {
      padding: 8px 28px;
      margin-right: 2px;
      font-family: 'Roboto Flex';
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;

      color: #969494;
      border-radius: 2px;
    }

    span:hover {
      color: #333333;
      background: #f4f4f4;
    }
    span.active {
      color: #333333;
      background: #f4f4f4;
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
      text-align: center;
      // text-align: left;
      // padding-left: 10px;
    }
  }
  &__body {
    background: #ffffff;
    &-row {
      border-bottom: 2px solid #f4f4f4;
    }
    &-col {
      text-align: center;
      // text-align: left;
      // padding-left: 10px;
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
