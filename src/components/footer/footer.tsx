import { chakra, HTMLChakraProps } from '@chakra-ui/system'

export type FooterProps = {
  children?: React.ReactNode
} & HTMLChakraProps<'div'>

export const Footer = ({ ...props }: FooterProps) => {
  return (
    <chakra.div
      display="flex"
      justifyContent="center"
      position="absolute"
      bottom="6"
      left="0"
      right="0"
      fontWeight="medium"
      gap="2"
      {...props}
    >
      Made with ❤️ by
      <chakra.a
        href="https://github.com/vinihvc"
        target="_blank"
        rel="norefer noopener"
        color="blue.500"
        borderBottom="1px solid transparent"
        transitionDuration="fast"
        _hover={{
          borderBottomColor: 'blue.200'
        }}
      >
        @vinihvc
      </chakra.a>
    </chakra.div>
  )
}
