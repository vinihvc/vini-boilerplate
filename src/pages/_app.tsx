import { AppProps } from 'next/app'
import Head from 'next/head'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import BaseLayout from 'layouts/Base'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Next Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
        <meta name="description" content="Next Boilerplate" />
      </Head>

      <DefaultSeo {...SEO} />

      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  )
}

export default App
