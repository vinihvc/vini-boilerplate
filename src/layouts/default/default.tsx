import { Footer } from 'components/footer'
import { Flex } from 'components/layout'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Flex as="main" flexDirection="column" flex={1}>
        {children}
      </Flex>

      <Footer />
    </>
  )
}
