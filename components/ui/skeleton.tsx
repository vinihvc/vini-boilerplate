import { cn } from '@/utils/cn'

export const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-300 dark:bg-gray-800',
        className,
      )}
      {...props}
    />
  )
}
