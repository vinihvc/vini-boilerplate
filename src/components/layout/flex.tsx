import {
  chakra,
  forwardRef,
  SystemProps,
  HTMLChakraProps,
} from '@chakra-ui/system'

export type FlexOptions = {
  align?: SystemProps['alignItems']
  justify?: SystemProps['justifyContent']
  wrap?: SystemProps['flexWrap']
  direction?: SystemProps['flexDirection']
  basis?: SystemProps['flexBasis']
  grow?: SystemProps['flexGrow']
  shrink?: SystemProps['flexShrink']
}

export type FlexProps = HTMLChakraProps<'div'> & FlexOptions

export const Flex = forwardRef<FlexProps, 'div'>((props, ref) => {
  const { direction, align, justify, wrap, basis, grow, shrink, ...rest } =
    props

  const styles = {
    display: 'flex',
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    flexBasis: basis,
    flexGrow: grow,
    flexShrink: shrink,
  }

  return <chakra.div ref={ref} className="flex" __css={styles} {...rest} />
})
