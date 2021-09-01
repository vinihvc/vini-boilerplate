import { PropsWithChildren } from 'react'

import { x, SystemProps } from '@xstyled/styled-components'

export type TesteProps = {
  customProps?: string
} & SystemProps

const Teste = ({ ...props }: PropsWithChildren<TesteProps>) => {
  return (
    <x.div {...props}>
      <h1>Teste</h1>
    </x.div>
  )
}

export default Teste
