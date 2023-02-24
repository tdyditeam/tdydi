<template>
  <div>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <title-block-pages title="Kafedranyň mugallymlary"></title-block-pages>
    <departments-teachers
      :teachers="teachers"
      @clickedToCard="
        (name) =>
          $router.push(
            localeLocation(
              `/about-us/departments/${this.$route.params.id}/${this.$route.params.sub}/${name}/`
            )
          )
      "
    ></departments-teachers>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadCrumbs: [
        { id: 1, name: this.$t('header.menu.main'), path: '/', exact: true },
        {
          id: 2,
          name: this.$t('header.menu.aboutUs.name'),
          path: '/about-us',
          exact: true,
        },
        {
          id: 3,
          name: this.$t('header.menu.aboutUs.departments'),
          path: `/about-us/departments/${this.$route.params.id}`,
          exact: true,
        },
        {
          id: 4,
          name: this.$t(`departments.${this.$route?.params?.sub}.title`),
          path: `/about-us/departments/${this.$route.params.id}/${this.$route.params.sub}`,
          exact: true,
        },
      ],
      teachers: [
        {
          id: 1,
          name: 'Iwanow Bäşim Meredowiç',
          img: 'img_1.png',
          skills: 'Maglumat ulgamlary kafedrasynyň müdiri, uly mugallym.',
          description:
            'Maglumat ulgamlary kafedrasynyň müdiri, uly mugallym. Türkmenistanyň Ýokary okuw mekdepleriniň professor-mugallymlarynyň arasynda geçirilen «Ýylyň mugallymy-2020» 3-nji orun – 2020ý. Türkmenistanyň «Watana bolan söýgüsi üçin» medaly bilen sylaglanan -2021ý. Kafedrada okadylýan dersler boýunça bir näçe okuw gollanmalarynyň we okuw kitaplarynyň awtory.Maglumat ulgamlary kafedrasynyň müdiri, uly mugallym.',
        },
        {
          id: 2,
          name: 'Allaberdiýew Kaýumberdi Jepbarberdiýewiç',
          img: 'img_3.png',
          skills: 'Maglumat ulgamlary kafedrasynyň mugallymy.',
          description:
            ' Maglumat ulgamlary kafedrasynyň mugallymy, Maliýe fakultetiniň dekanynyň okuw işleri boýunça orunbasary.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped></style>
