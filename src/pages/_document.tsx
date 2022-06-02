import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import { ColorModeScript } from '@chakra-ui/color-mode'

import theme from 'styles/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript
            initialColorMode={
              theme.config.initialColorMode as 'light' | 'dark' | 'system'
            }
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
