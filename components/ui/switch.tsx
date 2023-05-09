'use client'

import * as React from 'react'
import { cn } from '@/utils/cn'
import * as SwitchPrimitives from '@radix-ui/react-switch'

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=unchecked]:bg-neutral-200 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900 dark:data-[state=checked]:bg-neutral-400 dark:data-[state=unchecked]:bg-neutral-700',
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'data-[state=unchecked]:tranneutral-x-0 data-[state=checked]:tranneutral-x-5 pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform',
      )}
    />
  </SwitchPrimitives.Root>
))

Switch.displayName = SwitchPrimitives.Root.displayName
