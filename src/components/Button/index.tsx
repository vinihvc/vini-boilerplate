import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import { x, SystemProps } from '@xstyled/styled-components'

export type ButtonProps = {
  as?: React.ElementType
} & SystemProps &
  AnchorHTMLAttributes<HTMLAnchorElement> &
  ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <x.button
      display="flex"
      transition
      transitionDuration
      bg={{ _: 'blue-600', hover: 'blue-500' }}
      color="white"
      outline="none"
      fontSize="sm"
      fontWeight="medium"
      borderRadius
      boxShadow
      px={7}
      py={3}
      {...props}
    >
      {children}
    </x.button>
  )
}

export default Button
