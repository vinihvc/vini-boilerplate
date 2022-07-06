import { HTMLChakraProps } from '@chakra-ui/system'

import { Flex, Text } from 'components/layout'

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
      <Text
        as="a"
        href="https://github.com/vinihvc"
        target="_blank"
        rel="norefer noopener"
        color="blue.500"
        borderBottom="1px solid transparent"
        transitionDuration="fast"
        _hover={{
          borderBottomColor: 'blue.200',
        }}
      >
        @vinihvc
      </Text>
    </Flex>
  )
}
