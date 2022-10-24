import NextLink from 'next/link'

import { NextSeo } from 'next-seo'

import { Button } from 'components/button'
import { Center, Flex, Text } from 'components/layout'

const Custom404Page = () => {
  return (
    <>
      <NextSeo title="404" />

      <Center flex={1}>
        <Flex flexDirection="column" align="center" gap={4}>
          <Text fontSize="xl" fontWeight="semibold">
            Page not found
          </Text>

          <NextLink href="/" passHref>
            <Button as="a" size="lg">
              Back to home
            </Button>
          </NextLink>
        </Flex>
      </Center>
    </>
  )
}

export default Custom404Page
