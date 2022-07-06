import { NextSeo } from 'next-seo'

import { useColorMode } from '@chakra-ui/color-mode'

import { DefaultLayout } from 'layouts/default'

import { Button } from 'components/button'

import { Flex } from 'components/layout'

const HomePage = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <NextSeo title="Home" />

      <DefaultLayout>
        <Flex direction="column" h="100vh" justify="center" align="center">
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </Flex>
      </DefaultLayout>
    </>
  )
}

export default HomePage
