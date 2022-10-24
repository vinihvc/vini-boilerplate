import { Footer } from 'components/footer'
import { Flex } from 'components/layout'
import { ToggleTheme } from 'components/toggle-theme'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <ToggleTheme />

      <Flex as="main" flexDirection="column" flex={1}>
        {children}
      </Flex>

      <Footer />
    </>
  )
}
