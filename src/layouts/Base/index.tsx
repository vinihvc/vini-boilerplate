import {
  ThemeProvider,
  Preflight,
  x,
  ColorModeProvider
} from '@xstyled/styled-components'

import GlobalStyles from 'styles/global'

import theme from 'styles/theme'

type BaseLayoutProps = {
  children?: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Preflight />
        <GlobalStyles />

        <x.main>{children}</x.main>
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default BaseLayout
