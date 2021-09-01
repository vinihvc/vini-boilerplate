import { PropsWithChildren } from 'react'

import { x, SystemProps } from '@xstyled/styled-components'

type BaseLayoutProps = SystemProps

const BaseLayout = ({
  children,
  ...props
}: PropsWithChildren<BaseLayoutProps>) => {
  return (
    <x.main
      display="flex"
      minH="100vh"
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {children}
    </x.main>
  )
}

export default BaseLayout
