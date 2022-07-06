import { chakra, forwardRef, HTMLChakraProps } from '@chakra-ui/system'

type CenterProps = HTMLChakraProps<'div'>

export const Center = forwardRef<CenterProps, 'div'>((props, ref) => {
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return <chakra.div ref={ref} className="center" {...props} __css={styles} />
})
