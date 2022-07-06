import {
  chakra,
  forwardRef,
  SystemProps,
  HTMLChakraProps,
} from '@chakra-ui/system'

type TextProps = {
  align?: SystemProps['textAlign']
  decoration?: SystemProps['textDecoration']
  casing?: SystemProps['textTransform']
} & HTMLChakraProps<'p'>

export const Text = forwardRef<TextProps, 'p'>((props, ref) => {
  const { align, decoration, casing, ...rest } = props

  const styles = {
    textAlign: align,
    textDecoration: decoration,
    textTransform: casing,
  }

  return <chakra.p ref={ref} className="text" {...rest} __css={styles} />
})
