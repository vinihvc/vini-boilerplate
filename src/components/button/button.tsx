import { chakra, forwardRef, HTMLChakraProps } from '@chakra-ui/system'

export type ButtonProps = {
  children: React.ReactNode
} & HTMLChakraProps<'button'>

export const Button = forwardRef<ButtonProps, 'button'>((props, ref) => {
  const { children, ...rest } = props

  return (
    <chakra.button
      ref={ref}
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="blue.500"
      color="white"
      outline="none"
      fontSize="sm"
      fontWeight="medium"
      h={10}
      px={5}
      transitionDuration="fast"
      boxShadow="lg"
      _hover={{
        bg: 'blue.600',
      }}
      {...rest}
    >
      {children}
    </chakra.button>
  )
})
