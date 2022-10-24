import { useColorMode } from '@chakra-ui/color-mode'
import { HTMLChakraProps, chakra } from '@chakra-ui/system'

type ToggleProps = HTMLChakraProps<'button'>

export const ToggleTheme = (props: ToggleProps) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <chakra.button
      align="center"
      fontSize="2xl"
      className="toggle-theme"
      position="absolute"
      top="4"
      right="4"
      onClick={toggleColorMode}
      {...props}
    >
      {colorMode === 'light' ? '🌑' : '☀️'}
    </chakra.button>
  )
}
