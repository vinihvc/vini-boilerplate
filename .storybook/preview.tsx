import React from 'react'

import { RouterContext } from 'next/dist/shared/lib/router-context'

import { ChakraProvider } from '@chakra-ui/provider'

import { defaultTheme } from '../src/theme'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
}

export const decorators = [
  (Story) => (
    <ChakraProvider theme={defaultTheme}>
      <Story />
    </ChakraProvider>
  ),
]
