import { NextSeo } from 'next-seo'

import { useColorMode } from '@chakra-ui/color-mode'

import { DefaultLayout } from 'layouts/default'

import { Button } from 'components/button'

import { Flex, Text } from 'components/layout'
import { Link } from 'components/layout/link'
import { INCLUDED_COMPONENTS } from 'constants/included-components'

const HomePage = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <NextSeo title="Home" />

      <DefaultLayout>
        <Flex direction="column" h="100vh" justify="center" align="center">
          <Flex flexDirection="column" gap="4" align="center">
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>

            <Link
              href="https://chakra-ui.com/docs/styled-system/theme"
              fontSize="xl"
              fontWeight="semibold"
              color="blue.600"
              borderBottom="1px solid transparent"
              transitionDuration="fast"
              _hover={{
                borderBottomColor: 'blue.600',
              }}
              isExternal
            >
              Chakra theme included
            </Link>

            <Flex flexDirection="column" align="center">
              <Text fontSize="xl" fontWeight="semibold">
                Included layout component
              </Text>

              <Flex justify="center">
                {INCLUDED_COMPONENTS?.map((component) => (
                  <Link
                    key={component.name}
                    href={component.link}
                    mr="2"
                    color="blue.600"
                    borderBottom="1px solid transparent"
                    transitionDuration="fast"
                    _hover={{
                      borderBottomColor: 'blue.600',
                    }}
                    isExternal
                  >
                    {component.name}
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </DefaultLayout>
    </>
  )
}

export default HomePage
