export default {
  methods: {
    createdAt(createdTime, lang) {
      let time = ''
      const monthNames = {
        tm: [
          'Ýanwar',
          'Fewral',
          'Mart',
          'Aprel',
          'Maý',
          'Iýun',
          'Iyul',
          'Awgust',
          'Sentýabr',
          'Oktýabr',
          'Noýabr',
          'Dekabr'
        ],
        ru: [
          'Январь',
          'Февраль',
          'Март',
          'Апрель',
          'Май',
          'Июнь',
          'Июль',
          'Август',
          'Сентябрь',
          'Октябрь',
          'Ноябрь',
          'Декабрь'
        ],
        en: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ]
      }

      let month = new Date(createdTime).getMonth()
      let date = new Date(createdTime).getDate()
      let year = new Date(createdTime).getFullYear()
      time = `${date} ${monthNames[lang][month]}, ${year}`
      return time
    },
  }
}