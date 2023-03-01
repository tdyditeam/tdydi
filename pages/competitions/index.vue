<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="$t('competitions.description')"
      :title="$t('competitions.name')"
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
        {
          id: 11,
          fullName: 'Nurmyradow Döwlet Muhammedowiç',
          skills: 'Menejment taýýarlyk ugrunyň 2-nji ýyl talyby',
          competitionName: 'Matematika',
          winnerPlace: 'III orun',
        },
        {
          id: 12,
          fullName: 'Muhammetgulyýew Mukam Altyýewiç',
          skills:
            'Sanly ykdysadyýetde maliýe bazarlary we maliýe howpsuzlygy taýýarlyk ugrunyň 3-nji ýyl talyby',
          competitionName: 'Ykdysadyýet',
          winnerPlace: 'I orun',
        },
        {
          id: 13,
          fullName: 'Arazklyçew Guwançmyrat Nurmuradowiç',
          skills: 'Gymmatly kagyzlar bazary  hünäriniň 4-nji ýyl talyby',
          competitionName: 'Ykdysadyýet',
          winnerPlace: 'II orun',
        },
        {
          id: 14,
          fullName: 'Žummyýewa Bahargül Şamuradowna',
          skills: 'Elektron täjirçiligi hünäriniň 3-nji ýyl talyby',
          competitionName: 'Ykdysadyýet',
          winnerPlace: 'III orun',
        },
        {
          id: 15,
          fullName: 'Orazberdiýewa Züleýha Nurberdiýewna ',
          skills:
            'Awtomatlaşdyrylan ulgamlaryň we kompýuter tehnikasynyň programma üpjünçiligi  hünariniň 4-nji ýyl talyby',
          competitionName: 'Häzirki zaman kompýuter tehnologiýalary',
          winnerPlace: 'II orun',
        },
        {
          id: 16,
          fullName: 'Eminjanow Gadamjan Eminjanowiç ',
          skills:
            'Kompýuter ulgamynyň programma üpjünçiligi taýýarlyk ugrunyň 3-nji ýyl talyby',
          competitionName: 'Häzirki zaman kompýuter tehnologiýalary',
          winnerPlace: 'III orun',
        },
        {
          id: 17,
          fullName: 'Baýmuradow Bazarkuly Furkatjanowiç',
          skills:
            'Kompýuter ulgamynyň programma üpjünçiligi taýýarlyk ugrunyň 2-nji ýyl talyby',
          competitionName: 'Häzirki zaman kompýuter tehnologiýalary',
          winnerPlace: 'III orun',
        },
        {
          id: 18,
          fullName: 'Alparslan Durdymyradowiç Durdymyradow',
          skills: 'Dünýä ykdysadyýeti hünäriniň 3-nji ýyl talyby',
          competitionName: 'Ekologiýa',
          winnerPlace: 'I orun',
        },
        {
          id: 19,
          fullName: 'Allamyradowa Arazgül Döwletmyradowna',
          skills: 'Statistika taýýarlyk ugrunyň 2-nji ýyl talyby',
          competitionName: 'Ekologiýa',
          winnerPlace: 'II orun',
        },
        {
          id: 20,
          fullName: 'Rozmuradow Serdar Rozmuradowiç',
          skills: 'Statistika taýýarlyk ugrunyň 3-nji ýyl talyby',
          competitionName: 'Ekologiýa',
          winnerPlace: 'II orun',
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
