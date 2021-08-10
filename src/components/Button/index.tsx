import { HTMLAttributes } from 'react'

import { Color, x } from '@xstyled/styled-components'

import { SpaceProps } from '@xstyled/system'

export type ButtonProps = {
  children?: React.ReactNode
  bg?: Color
} & HTMLAttributes<HTMLButtonElement> &
  SpaceProps

const Button = ({ bg = 'primary', children, ...props }: ButtonProps) => {
  return (
    <x.button
      display="flex"
      bg={{ _: bg, hover: `${String(bg).split('-')[0]}-600` }}
      color="white"
      outline="none"
      border="1px solid"
      borderColor="blue-700"
      borderRadius
      transition
      px={7}
      py={3}
      {...props}
    >
      {children}
    </x.button>
  )
}

export default Button
