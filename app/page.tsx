import Link from 'next/link'
import { CONFIG } from '@/constants/config'

import { CopyButton } from '@/components/copy-button'
import { buttonVariants } from '@/components/ui/button'

const RootPage = () => {
  return (
    <section className="container my-10 flex flex-1 flex-col">
      <div className="flex max-w-[980px] flex-col items-start space-y-5">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Beautifully Next Boilerplate <br className="hidden sm:inline" />
          built with <span className="font-bold text-blue-500">
            shadcn/ui
          </span>{' '}
          Components.
        </h1>

        <p className="max-w-[700px] text-lg text-neutral-700 dark:text-neutral-400 sm:text-xl">
          A Next.js boilerplate with a focus on practicality. Already set up
          with TypeScript, Tailwind CSS, Radix UI, Prettier, ESLint, Husky,
          Lint-Staged, Vitest, PNPM, Dark Mode and more.
        </p>

        <div className="flex w-full gap-4">
          <Link
            href={CONFIG.repository}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: 'lg' })}
          >
            GitHub
          </Link>

          <Link
            href={CONFIG.documentation}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: 'lg', variant: 'outline' })}
          >
            Components
          </Link>

          <pre className="hidden h-11 items-center justify-between space-x-2 overflow-x-auto rounded-lg border border-neutral-100 bg-neutral-100 pl-6 pr-2 dark:border-neutral-700 dark:bg-black md:flex">
            <code className="font-mono text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              {CONFIG.command}
            </code>
            <CopyButton
              value={CONFIG.command}
              className="border-none text-neutral-900 hover:bg-transparent dark:text-neutral-50"
            />
          </pre>
        </div>
      </div>
    </section>
  )
}

export default RootPage
