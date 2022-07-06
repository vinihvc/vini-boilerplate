import { NextSeo } from 'next-seo'

import { chakra } from '@chakra-ui/system'
import { useColorMode } from '@chakra-ui/color-mode'

import { DefaultLayout } from 'layouts/default'

import { Button } from 'components/button'

const HomePage = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <NextSeo title="Home" />

      <DefaultLayout>
        <chakra.div
          display="flex"
          h="100vh"
          justifyContent="center"
          alignItems="center"
        >
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
          </Button>
        </chakra.div>
      </DefaultLayout>
    </>
  )
}

export default HomePage
