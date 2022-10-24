import { HTMLChakraProps } from '@chakra-ui/system'

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
        isExternal
      >
        @vinihvc
      </Link>
    </Flex>
  )
}
