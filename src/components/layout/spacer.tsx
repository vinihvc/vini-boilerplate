import { HTMLChakraProps, chakra } from '@chakra-ui/system'

export type SpacerProps = HTMLChakraProps<'div'>

export const Spacer = chakra('div', {
  baseStyle: {
    flex: 1,
    justifySelf: 'stretch',
    alignSelf: 'stretch',
  },
})
