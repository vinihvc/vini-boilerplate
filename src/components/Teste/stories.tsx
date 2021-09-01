import { Story, Meta } from '@storybook/react'

import Teste, { TesteProps } from '.'

export default {
  title: 'Teste',
  component: Teste
} as Meta

export const Default: Story<TesteProps> = (args) => <Teste {...args} />
