import type { Preview } from '@storybook/react'

import '../styles/globals.css'

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    themes: {
      clearable: false,
      list: [
        {
          name: 'Light',
          class: [],
          color: '#ffffff',
          default: true,
        },
        {
          name: 'Dark',
          class: ['dark'],
          color: '#000000',
        },
      ],
    },
  },
}

export default preview
