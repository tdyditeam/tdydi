<template>
  <section>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <block-pages
      :description="description"
      :title="title"
      :img="img"
    ></block-pages>
  </section>
</template>

<script>
export default {
  data() {
    return {
      img: '2.png',
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.competitions.scientificCompetitions'),
          path: '/competitions/scientific-competitions',
          exact: true,
        },
      ],
      title: 'Ylmy bäsleşikler',
      description: `<p>2022-nji ýylda Türkmenistanyň Magtymguly adyndaky Ýaşlar guramasynyň Merkezi Geňeşiniň we Türkmenistanyň Ylymlar akademiýasynyň Türkmenistanyň ýaşlarynyň arasynda geçirilen ylmy işler boýunça bäsleşige 3 ugur boýunça 10 sany ylmy iş, ýagny, «<em>Innowasiýa ykdysadyýeti</em>» ugry boýunça 6 sany, «<em>Maglumat we aragatnaşyk ulgamlary, kompýuter tehnologiýalary</em>» ugry boýunça 3 sany, «<em>Ynsanperwer ylymlary</em>» ugry boýunça 1 sany ylmy iş hödürlenildi (4 sany mugallym, 6 sany talyp).</p><p>Bäsleşigiň netijesinde «<em>Innowasiýa ykdysadyýeti</em>» ugry boýunça bank işi kafedrasynyň mugallym-öwrenijisi <em>Sahatkuliýew Begenç I orna</em>, Dünýä maliýe bazary hünäriniň 4-nji ýyl talyby <em>Gurbanow Ýaranmuhammet II orna</em>, Buhgalterçilik hasaba alnyşy we audit hünäriniň 4-nji ýyl talyby <em>Amanmämmedowa Aksoltan III orna</em> mynasyp boldy.</p>`,
    }
  },
  mounted() {
    document.querySelector('.wrapper').scrollTop = 0
  },
}
</script>

<style lang="scss" scoped></style>
