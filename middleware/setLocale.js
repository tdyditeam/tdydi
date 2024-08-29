export default function ({ app }) {
  const locale = app.i18n.locale

  const cookieOptions = {
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
    sameSite: 'Lax',
    secure: false,
    httpOnly: false,
  }
  app.$cookies.set('i18n_redirected', locale, cookieOptions)
}
