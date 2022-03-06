import { useColorMode, x } from '@xstyled/styled-components'

import BaseLayout from 'layouts/Base'

import Button from 'components/Button'

const HomeLayout = () => {
  const [colorMode, setColorMode] = useColorMode()

  const toggleColor = () => {
    setColorMode(colorMode === 'default' ? 'dark' : 'default')
  }

  return (
    <BaseLayout flexDirection="column">
      <Button onClick={toggleColor}>
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </Button>

      <x.div position="absolute" bottom="20" fontWeight="medium">
        Made with ❤️ by{' '}
        <x.a
          href="https://github.com/vinihvc"
          target="_blank"
          color="link"
          rel="norefer noopener"
          textDecoration={{ hover: 'underline' }}
        >
          Vinicius Vicentini
        </x.a>
      </x.div>
    </BaseLayout>
  )
}

export default HomeLayout
