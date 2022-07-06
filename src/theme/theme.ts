import { globalStyles } from './global'

import { foundations } from './foundations'
// import { components } from './components'

type ColorModeProps = 'light' | 'dark' | 'system'

export const defaultTheme = {
  ...foundations,
  config: {
    useSystemColorMode: false,
    initialColorMode: 'system' as ColorModeProps,
  },
  styles: {
    global: globalStyles,
  },
}
