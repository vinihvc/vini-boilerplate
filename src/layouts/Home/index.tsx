import { NextSeo } from 'next-seo'

import { useColorMode } from '@xstyled/styled-components'

import Button from 'components/Button'

const HomeLayout = () => {
  const [colorMode, setColorMode] = useColorMode()

  const toggleColor = () => {
    setColorMode(colorMode === 'default' ? 'dark' : 'default')
  }

  return (
    <>
      <NextSeo title="Home" />

      <Button onClick={toggleColor}>
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </Button>
    </>
  )
}

export default HomeLayout
