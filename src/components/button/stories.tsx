import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Example button',
  },
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
