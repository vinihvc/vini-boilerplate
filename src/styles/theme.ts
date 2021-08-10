import { defaultTheme } from '@xstyled/styled-components'

const theme = {
  ...defaultTheme,
  raddi: {
    ...defaultTheme.radii,
    default: '10px'
  },
  colors: {
    ...defaultTheme.colors,
    primary: '#3b82f6',
    darkBlue: '#2C1D3E',
    bg: '#fff',
    text: '#333',
    link: '#006688',
    modes: {
      dark: {
        bg: '#10171d',
        text: '#dfdfdf',
        link: 'primary'
      }
    }
  }
} as const

export default theme
