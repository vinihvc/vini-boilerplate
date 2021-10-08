/**
 * File used by next-seo
 *
 * @see https://github.com/garmeeh/next-seo
 */
export default {
  titleTemplate: '%s - Next Boilerplate ',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vini-boilerplate.vercel.app',
    site_name: 'Next Boilerplate',
    title: 'Next Boilerplate',
    images: [
      {
        url: 'https://raw.githubusercontent.com/viniciushvc/next-boilerplate/master/public/img/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Next Boilerplate'
      }
    ]
  },
  twitter: {
    handle: '@viniciushvc',
    site: 'http',
    cardType: 'summary_large_image'
  }
}
