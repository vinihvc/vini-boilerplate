import { AppProps } from 'next/app'
import Head from 'next/head'

import { ChakraProvider } from '@chakra-ui/provider'

import NextNProgress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import { defaultTheme } from 'theme'

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

      <NextNProgress
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        options={{ showSpinner: false }}
      />

      <ChakraProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
