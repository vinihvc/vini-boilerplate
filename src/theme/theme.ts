import { components } from './components'
import { foundations } from './foundations'
import { globalStyles } from './global'

type ColorModeProps = 'light' | 'dark' | 'system'

export const defaultTheme = {
  ...foundations,
  components,
  config: {
    useSystemColorMode: false,
    initialColorMode: 'system' as ColorModeProps,
  },
  styles: {
    global: globalStyles,
  },
}
