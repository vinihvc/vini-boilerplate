import Link from 'next/link'
import { CONFIG } from '@/constants/config'
import { Github, Twitter } from 'lucide-react'

import { ThemeToggle } from '@/components/theme-toggle'
import { buttonVariants } from '../ui/button'

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-neutral-200 bg-white dark:border-b-neutral-700 dark:bg-neutral-900">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
              Next Boilerplate
            </span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={CONFIG.github}
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="sr-only">Visit Github</span>
              <Github />
            </Link>

            <Link
              href={CONFIG.twitter}
              className={buttonVariants({ variant: 'ghost', size: 'sm' })}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="sr-only">Visit Twitter</span>
              <Twitter />
            </Link>

            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
