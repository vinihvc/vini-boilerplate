import { RouterContext } from 'next/dist/shared/lib/router-context'

import { ChakraProvider } from '@chakra-ui/provider'

import theme from '../src/styles/theme'

import './reset.css'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  )
]
