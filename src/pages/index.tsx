import { useColorMode } from '@chakra-ui/color-mode'

import { INCLUDED_COMPONENTS } from 'constants/included-components'

import { NextSeo } from 'next-seo'

import { DefaultLayout } from 'layouts/default'

import { Button } from 'components/button'
import { Center, Flex, Text } from 'components/layout'
import { Link } from 'components/layout/link'

const HomePage = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <NextSeo title="Home" />

      <DefaultLayout>
        <Center flex={1}>
          <Flex flexDirection="column" align="center" gap={4}>
            <Button onClick={toggleColorMode}>
              {`Toggle ${colorMode === 'light' ? 'Dark' : 'Light'}`}
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

              <Flex justify="center" flexWrap="wrap">
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
        </Center>
      </DefaultLayout>
    </>
  )
}

export default HomePage
