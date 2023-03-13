'use client'

import * as React from 'react'
import { cn } from '@/utils/cn'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'

export const HoverCard = HoverCardPrimitive.Root

export const HoverCardTrigger = HoverCardPrimitive.Trigger

export const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={cn(
      'z-50 w-64 rounded-md border border-neutral-100 bg-white p-4 shadow-md outline-none animate-in zoom-in-90 dark:border-neutral-800 dark:bg-neutral-800',
      className,
    )}
    {...props}
  />
))

HoverCardContent.displayName = HoverCardPrimitive.Content.displayName
