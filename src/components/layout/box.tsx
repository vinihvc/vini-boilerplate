import { chakra, forwardRef, HTMLChakraProps } from '@chakra-ui/system'

type BoxProps = HTMLChakraProps<'div'>

export const Box = forwardRef<BoxProps, 'div'>((props, ref) => {
  return <chakra.div ref={ref} className="box" {...props} />
})
