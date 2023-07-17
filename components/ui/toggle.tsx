'use client'

import * as React from 'react'
import { cn } from '@/utils/cn'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { VariantProps, tv } from 'tailwind-variants'

export const toggleVariants = tv({
  base: 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors data-[state=on]:bg-neutral-200 dark:hover:bg-neutral-800 dark:data-[state=on]:bg-neutral-700 focus:outline-none dark:text-neutral-100 focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:focus:ring-offset-neutral-900 hover:bg-neutral-100  dark:hover:text-neutral-100 dark:data-[state=on]:text-neutral-100',
  variants: {
    variant: {
      default: 'bg-transparent',
      outline:
        'bg-transparent border border-neutral-200 hover:bg-neutral-100 dark:border-neutral-700',
    },
    size: {
      sm: 'h-9 px-2.5',
      md: 'h-10 px-3',
      lg: 'h-11 px-5',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
})

export const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName
