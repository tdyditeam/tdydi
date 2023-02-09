<template>
  <div class="events">
    <the-title-block
      :title="'TÄZELIKLER'"
      :activeId="activeId"
      :items="items"
      @change="change"
    >
    </the-title-block>
    <events-article
      :events="activeId === 1 ? news : arcticles"
    ></events-article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeId: 1,
      items: [
        {
          id: 1,
          name: 'Täzelikler',
        },
        {
          id: 2,
          name: 'Makalalar',
        },
      ],
      news: [
        {
          id: 1,
          img: 'news1.jpg',
          title: 'Halkara ylmy-amaly maslahat',
          createdAt: '26.01.23',
          viewCount: 324,
          description:
            'Türkmen döwlet ykdysadyýet we dolandyryş instituty ýokary okuw mekdepleriň professor-mugallymlaryny «Döwletiň durnukly...',
        },
        {
          id: 2,
          img: 'news2.jpg',
          title: 'AÇYK HALKARA INTERNET OLIMPIADASY',
          createdAt: '23.01.23',
          viewCount: 125,
          description:
            'Türkmen döwlet ykdysadyýet we dolandyryş instituty ýokary okuw mekdepleriň talyplaryny 2023-nji ýylyň 12-nji aprelinde...',
        },
        {
          id: 3,
          img: 'news3.jpg',
          title:
            'Aziýa Ösüş Bankynyň wekilleriniň gatnaşmagynda talyplar bilen...',
          createdAt: '19.01.23',
          viewCount: 345,
          description:
            '2023-nji ýylyň 18-nji ýanwarynda Türkmen döwlet ykdysadyýet we dolandyryş institutynyň uly mejlisler zalynda Aziýa Ösüş Bankynyň...',
        },
        {
          id: 4,
          img: 'news4.jpg',
          title: 'Halkara Bitaraplyk güni mynasybetli “Ykdysadyýet” ugry...',
          createdAt: '01.12.22',
          viewCount: 324,
          description:
            'Halkara Bitaraplyk güni mynasybetli “Ykdysadyýet” ugry boýunça ýokary okuw mekdepleriniň talyplarynyň arasynda online görnüşinde...',
        },
      ],
      arcticles: [
        {
          id: 1,
          img: null,
          title: 'Türkmenistanyň dermanlyk ösümlikleri – dertleriň melhemi.',
          createdAt: null,
          viewCount: 324,
          description:
            '2022-nji ýylyň 18-nji oktýabrynda Türkmen döwlet ykdysadyýet we...',
        },
        {
          id: 2,
          img: null,
          title: 'Saglygy goraýyş ulgamynda halkara hyzmatdaşlyk',
          createdAt: null,
          viewCount: 125,
          description: 'Ýurdumyzda 10.10.2022ý.-11.10.2022ý....',
        },
        {
          id: 3,
          img: null,
          title: 'Daşary ýurt dillerini öwrenmek döwrüň talabydyr',
          createdAt: null,
          viewCount: 345,
          description:
            'Bedew batly ösüşleri özüne hemra edinip, baky bagtyýarlyk ýolundan barha öňe barýan  Garaşsyz, hemişelik Bitarap...',
        },
        {
          id: 4,
          img: null,
          title: 'Halyçylyk - gadymy senet',
          createdAt: null,
          viewCount: 324,
          description:
            'Gözelligiň we kämilligiň ajaýyp nusgasy bolan türkmen halysy özüniň üýtgeşik owadanlygy, nepisligi bilen has ir döwürlerden...',
        },
      ],
    }
  },
  methods: {
    change(item) {
      this.activeId = item.id
    },
  },
}
</script>

<style lang="scss" scoped>
.events {
  padding: 15px 0px;
}
</style>
