import { SystemStyleObject } from '@chakra-ui/system'

export const globalStyles: SystemStyleObject = {
  html: {
    overflowY: 'scroll',
  },

  '#__next': {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
}
