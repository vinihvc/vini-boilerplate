import { Story, Meta } from '@storybook/react'

import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Example button',
    bg: 'blue-500'
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />
