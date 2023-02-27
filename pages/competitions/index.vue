<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="description"
      :title="title"
      :img="img"
    ></block-pages>
    <the-table :datas="datas"></the-table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      img: '4.png',
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.competitions.lessonCompetitions'),
          path: '/competitions',
          exact: true,
        },
      ],
      datas: [
        {
          id: 1,
          fullName: 'Rejepow Täçmyrat Çarymyradowiç',
          skills:
            'Buhgalterçilik hasaba alnyşy we audit taýýarlyk ugrunyň 1-nji ýyl talyby',
          competitionName: 'Türkmenistanyň taryhy',
          winnerPlace: 'II orun',
        },
        {
          id: 2,
          fullName: 'Tejenow Döwletmyrat Tejenowiç',
          skills: 'Maliýe menejmenti taýýarlyk ugrunyň 3-nji ýyl talyby',
          competitionName: 'Türkmenistanyň taryhy',
          winnerPlace: 'II orun',
        },
        {
          id: 3,
          fullName: 'Atanýazowa Maral Musaýewna',
          skills: 'Ykdysadyýet we hukuk hünäriniň 3-nji ýyl talyby',
          competitionName: 'Türkmenistanyň taryhy',
          winnerPlace: 'II orun',
        },
        {
          id: 4,
          fullName: 'Hommadowa Maral Kasymowna',
          skills:
            'Buhgalterçilik hasaba alnyşy we audit taýýarlyk ugrunyň 1-nji ýyl talyby',
          competitionName: 'Rus dili',
          winnerPlace: 'II orun',
        },
        {
          id: 5,
          fullName: 'Saparowa Mähri Azadowna',
          skills: 'Menejment taýýarlyk ugrunyň 1-nji ýyl talyby',
          competitionName: 'Rus dili',
          winnerPlace: 'II orun',
        },
        {
          id: 6,
          fullName: 'Amangeldiýewa Gülşat Batyrowna',
          skills: 'Maliýe menejmenti taýýarlyk ugrunyň 3-nji ýyl talyby',
          competitionName: 'Iňlis dili',
          winnerPlace: 'II orun',
        },
        {
          id: 7,
          fullName: 'Hojaýewa Aýperi Hangeldiýewna',
          skills: 'Maliýe menejmenti taýýarlyk ugrunyň 3-nji ýyl talyby',
          competitionName: 'Iňlis dili',
          winnerPlace: 'III orun',
        },
        {
          id: 8,
          fullName: 'Rahmankukowa Jahan',
          skills:
            'Söwdada we logistikada sanly tehnologiýalar taýýarlyk ugrunyň 2-nji ýyl talyby',
          competitionName: 'Iňlis dili',
          winnerPlace: 'III orun',
        },
        {
          id: 9,
          fullName: 'Hudaýberdiýew Eziz Bäşimowiç',
          skills:
            'Maglumat ulgamlary we tehnologiýalary taýýarlyk ugrunyň 2-nji ýyl talyby',
          competitionName: 'Matematika',
          winnerPlace: 'III orun',
        },
        {
          id: 10,
          fullName: 'Saparow Begenç Batyrowiç ',
          skills: 'Ykdysadyýet we hukuk taýýarlyk ugrunyň 1-nji ýyl talyby',
          competitionName: 'Matematika',
          winnerPlace: 'III orun',
        },
      ],
      title: 'Ders bäsleşikler',
      description: `<p><strong>Türkmen döwlet ykdysadyýet we dolandyryş institutynyň talyplarynyň 2022-nji ýylyň dekabr aýynyň 22-i, 23-i we 24-i günleri geçirilen Türkmenistanyň ýokary okuw mekdepleriniň talyplarynyň okuw dersleri boýunça Döwlet bäsleşiklerinde gazanan netijeleri</strong></p>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>

<style lang="scss" scoped></style>
