import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'

const baseStyle = defineStyle((props) => {
  const { colorScheme: c } = props

  const color = mode(`${c}.500`, `${c}.400`)(props)
  const borderColor = mode(`${c}.500`, `${c}.400`)(props)
  const activeColor = mode(`${c}.600`, `${c}.300`)(props)

  return {
    fontWeight: 'semibold',
    color,
    borderBottom: '1px solid transparent',
    transitionDuration: 'fast',
    _hover: {
      borderBottomColor: borderColor,
    },
    _active: { color: activeColor },
  }
})

export const linkTheme = defineStyleConfig({
  baseStyle,
  defaultProps: {
    colorScheme: 'blue',
  },
})
