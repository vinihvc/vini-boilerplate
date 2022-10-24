import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'
import { mode } from '@chakra-ui/theme-tools'

const baseStyle = defineStyle({
  lineHeight: '1.2',
  borderRadius: 'md',
  fontWeight: 'semibold',
  transitionProperty: 'common',
  transitionDuration: 'normal',
  _focusVisible: {
    boxShadow: 'outline',
  },
  _disabled: {
    opacity: 0.4,
    cursor: 'not-allowed',
    boxShadow: 'none',
  },
  _hover: {
    _disabled: {
      bg: 'initial',
    },
  },
})

const variantSolid = defineStyle((props) => {
  const { colorScheme: c } = props

  const hoverBg = `${c}.600`
  const activeBg = `${c}.700`
  const background = mode(`${c}.500`, `${c}.200`)(props)

  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bg: background,
    color: mode('white', 'gray.800')(props),
    _hover: {
      bg: mode(hoverBg, `${c}.300`)(props),
      _disabled: {
        bg: background,
      },
    },
    _active: { bg: mode(activeBg, `${c}.400`)(props) },
  }
})

const variants = {
  solid: variantSolid,
}

const sizes = {
  lg: defineStyle({
    h: '12',
    minW: '12',
    fontSize: 'lg',
    px: '6',
  }),
  md: defineStyle({
    h: '10',
    minW: '10',
    fontSize: 'md',
    px: '4',
  }),
  sm: defineStyle({
    h: '8',
    minW: '8',
    fontSize: 'sm',
    px: '3',
  }),
  xs: defineStyle({
    h: '6',
    minW: '6',
    fontSize: 'xs',
    px: '2',
  }),
}

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'solid',
    size: 'md',
    colorScheme: 'blue',
  },
})
