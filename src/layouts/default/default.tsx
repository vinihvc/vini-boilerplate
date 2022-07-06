import { Footer } from 'components/footer'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <main>{children}</main>

      <Footer />
    </>
  )
}
