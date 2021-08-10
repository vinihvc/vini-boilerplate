import { Preflight, ThemeProvider } from '@xstyled/styled-components'

import GlobalStyles from '../src/styles/global'

import theme from '../src/styles/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyles />

      <Story />
    </ThemeProvider>
  )
]
