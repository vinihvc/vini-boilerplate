import { HTMLChakraProps, useColorModeValue } from '@chakra-ui/system'

import { Flex } from 'components/layout'
import { Link } from 'components/layout/link'

export type FooterProps = HTMLChakraProps<'div'>

export const Footer = (props: FooterProps) => {
  return (
    <Flex
      justify="center"
      position="absolute"
      bottom="6"
      left="0"
      right="0"
      fontWeight="medium"
      gap="2"
      {...props}
    >
      Made with ❤️ by
      <Link
        href="https://github.com/vinihvc"
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
