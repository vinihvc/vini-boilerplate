import { HTMLChakraProps, useColorModeValue } from '@chakra-ui/system'

import { Flex } from 'components/layout'
import { Link } from 'components/layout/link'

export type FooterProps = HTMLChakraProps<'div'>

export const Footer = (props: FooterProps) => {
  return (
    <Flex
      as="footer"
      justify="center"
      fontWeight="medium"
      gap="2"
      py="5"
      {...props}
    >
      Made with
      <span aria-label="Heart icon">❤️</span>
      by
      <Link
        href="https://viniciusvicentini.com/github"
        aria-label="Visit my GitHub profile"
        color={useColorModeValue('blue.600', 'blue.300')}
        borderBottom="1px solid transparent"
        transitionDuration="fast"
        _hover={{
          borderBottomColor: useColorModeValue('blue.600', 'blue.300'),
        }}
        isExternal
      >
        @vinihvc
      </Link>
    </Flex>
  )
}
