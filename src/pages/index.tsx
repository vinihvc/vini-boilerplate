import { INCLUDED } from 'constants/included'

import { NextSeo } from 'next-seo'

import { Image } from 'components/image'
import { Center, Container, Flex, Text } from 'components/layout'
import { Link } from 'components/layout/link'

const HomePage = () => {
  return (
    <>
      <NextSeo title="Home" />

      <Container maxW="container.xl" flex={1}>
        <Center flex={1}>
          <Flex flexDirection="column" align="center" gap={4}>
            <Image
              width={192}
              height={192}
              borderRadius="full"
              src="https://raw.githubusercontent.com/vinihvc/next-boilerplate/master/public/img/icon-192.png"
              alt="Next Logo with Chakra UI logo in the background"
            />

            <Text
              as="h1"
              fontSize={{ base: '2xl', md: '6xl', lg: '8xl' }}
              fontWeight="black"
              textAlign="center"
            >
              Next Boilerplate
            </Text>

            <Text fontSize="lg" fontWeight="medium" textAlign="center">
              Based on{' '}
              <Link
                href="https://chakra-ui.com/docs/styled-system/style-props"
                aria-label="Visit Chakra UI website to learn more about style props"
                isExternal
              >
                chakra-system
              </Link>{' '}
              (not all Chakra UI components)
            </Text>

            <Flex flexDirection="column" align="center" gap={1}>
              <Text fontWeight="medium" textAlign="center">
                Components included:
              </Text>

              <Flex justify="center" flexWrap="wrap">
                {INCLUDED?.map((item) => (
                  <Link key={item.name} href={item.link} mr="2" isExternal>
                    {item.name}
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Center>
      </Container>
    </>
  )
}

export default HomePage
