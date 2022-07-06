import { chakra, forwardRef, HTMLChakraProps } from '@chakra-ui/system'

type ContainerProps = HTMLChakraProps<'div'>

export const Container = forwardRef<ContainerProps, 'div'>((props, ref) => {
  const styles = {
    w: '100%',
    mx: 'auto',
    maxW: '60ch',
    px: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  return (
    <chakra.div ref={ref} className="container" {...props} __css={styles} />
  )
})
