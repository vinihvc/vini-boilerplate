import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import { ColorModeScript } from '@chakra-ui/color-mode'

import { defaultTheme } from 'theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript
            initialColorMode={defaultTheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
