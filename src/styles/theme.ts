import foundations from '@chakra-ui/theme/foundations'

import { globalStyles } from './global'
// import { components } from './components'
// import { globalStyles } from './global-styles'
// import { layerStyles } from './layer-styles'
// import { textStyles } from './text-styles'

const theme = {
  ...foundations,
  config: {
    useSystemColorMode: false,
    initialColorMode: 'system',
  },
  styles: {
    global: globalStyles,
  },

  // layerStyles,
  // textStyles,
  // components
}

export default theme
