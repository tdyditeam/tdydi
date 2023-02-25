<template>
  <div>
    <bread-crumbs :breadCrumbs="breadCrumbs"></bread-crumbs>
    <title-block-pages :title="$route?.params?.teacher"></title-block-pages>
    <departments-teachers :teachers="teachers"></departments-teachers>
    <div class="teacher">
      <div class="teacher__description">
        <p>Neşirler</p>
        <p>Döwürleýin neşirlerden makalalar</p>
        <p>
          Çap edilen maslahatlaryň tezisler we beýleki çykyşlarynyň materiallary
        </p>
        <p>
          – Халов Н., Ишкабулов К, Иванов Б. Методические указание по
          использованию ППП для решения финансово-кредитным дисциплинам.
          Методическая указание. Ашгабат: ТИНХ, 1989.
        </p>
        <p>
          – Кутлыев Г., Мурадов К., Иванов Б., Кривошапкина Н. Лабораторный
          практикум: Экономическая информатика, программирование, вычислительная
          практика. Часть 1. Методическая указание. Ашгабат: ТИНХ, 1991.
        </p>
        <p>
          – Кутлыев Г., Мурадов К., Иванов Б., Кривошапкина Н. Лабораторный
          практикум: Экономическая информатика, программирование, вычислительная
          практика. Часть 1. Методическая указание. Ашгабат: ТИНХ, 1991.
        </p>
        <p>
          – Ишкабулов К, Иванов Б. ОПТИМИЗАЦИЯ ТЕХНОЛОГИИ УЧЕТА И ОПЛАТЫ ТРУДА В
          УСЛОВИЯХ АРЕНДНЫХ ОТНОШЕНИЙ. Проблемы компьютеризации высшей школы
          Туркменистана в свете новой политики в области образования
          провозглашенной президентом Сапармуратом Туркменбаши Тезисы докладов
          научно-методической конференции высших учебных заведений
          Туркменистана. Ашгабат-РИПО «Ылхам», 1994.
        </p>
        <p>
          – Ишкабулов К, Клычниязов М, Иванов Б. АРМ «ГАРАЖ-АРЕНДА». Проблемы
          компьютеризации высшей школы Туркменистана в свете новой политики в
          области образования провозглашенной президентом Сапармуратом
          Туркменбаши Тезисы докладов научно-методической конференции высших
          учебных заведений Туркменистана. Ашгабат-РИПО «Ылхам», 1994.
        </p>
        <p>
          – Ишкабулов К, Иванов Б. АРМ «ГАРАЖ-АРЕНДА». Тезисы докладов
          научно-методической конференции молодых ученых Туркменистана. Ашгабат,
          1994.
        </p>
        <p>–</p>
        <p>
          Егоров, А. В. Функции и цели науки сравнительного права / А. В. Егоров
          // Правовое регулирование государственного строительства в Украине и
          проблемы совершенствования законодательства : тез. докл. межрегион.
          конф. молодых ученых и аспирантов. – Харьков, 1992. – С. 8–9.
        </p>
        <p>
          Егоров, А. В. К вопросу о предмете сравнительного правоведения / А. В.
          Егоров // Юридическая наука и образование в Республике Беларусь на
          рубеже XX–XXI веков : материалы междунар. науч.-практ. конф. – Гродно,
          1998. – С. 214–216.
        </p>
        <p>
          Егоров, А. В. Международно-правовые аспекты регулирования
          трубопроводного транспорта / А. В. Егоров // Проблемы безопасности и
          надежности трубопроводного транспорта : тез. докл. – Новополоцк, 1999.
          – С. 154–157.
        </p>
        <p>
          Егоров, А. В. Механизм заимствования иностранных правовых элементов в
          национальной практике правотворчества / А. В. Егоров // Правовые акты:
          социальная обусловленность, качество, применение и совершенствование :
          материалы межвуз. науч.-практ. конф., Минск, 11–12 ноября 1999 г. –
          Минск, 1999. – С. 308–316.
        </p>
        <p>
          Егоров, А. В. Правовой интеграции Республики Беларусь – научную основу
          / А. В. Егоров // Система права и законодательства Республики Беларусь
          : материалы респ. науч.-практ. конф. : в 2 ч. – Гродно, 1999. – Ч. 2.
          – С. 51–55.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teachers: [
        {
          id: 1,
          name: 'Iwanow Bäşim Meredowiç',
          img: 'img_1.png',
          skills: 'Maglumat ulgamlary kafedrasynyň müdiri, uly mugallym.',
          description:
            'Maglumat ulgamlary kafedrasynyň müdiri, uly mugallym. Türkmenistanyň Ýokary okuw mekdepleriniň professor-mugallymlarynyň arasynda geçirilen «Ýylyň mugallymy-2020» 3-nji orun – 2020ý. Türkmenistanyň «Watana bolan söýgüsi üçin» medaly bilen sylaglanan -2021ý. Kafedrada okadylýan dersler boýunça bir näçe okuw gollanmalarynyň we okuw kitaplarynyň awtory.Maglumat ulgamlary kafedrasynyň müdiri, uly mugallym.',
        },
      ],
    }
  },
  computed: {
    breadCrumbs() {
      return [
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
        {
          id: 5,
          name: this.$route?.params?.teacher,
          path: `/about-us/departments/${this.$route.params.id}/${this.$route.params.sub}/${this.$route?.params?.teacher}`,
          exact: true,
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
.teacher {
  padding: 40px 20px 0px 20px;
  &__description {
    font-family: 'Roboto Flex';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000;
    text-align: justify;
  }
}
</style>
