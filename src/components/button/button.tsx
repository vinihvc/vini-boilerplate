import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  ThemingProps,
  useStyleConfig,
} from '@chakra-ui/system'

export type ButtonProps = HTMLChakraProps<'button'> & ThemingProps<'Button'>

export const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const styles = useStyleConfig('Button', props)

  const { children, ...rest } = props

  return (
    <chakra.button ref={ref} __css={styles} {...rest}>
      {children}
    </chakra.button>
  )
})
