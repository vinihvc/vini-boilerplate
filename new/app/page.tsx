import Link from "next/link"
import { cn } from "@/utils/cn"

import { CopyButton } from "@/components/copy-button"
import { buttonVariants } from "@/components/ui/button"

const RootPage = () => {
  return (
    <section className="container flex flex-col flex-1 my-10">
      <div className="flex max-w-[980px] flex-col items-start space-y-5">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>

        <p className="max-w-[700px] text-lg text-neutral-700 dark:text-neutral-400 sm:text-xl">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>

        <div className="flex gap-4 w-full">
          <Link
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg" })}
          >
            Documentation
          </Link>

          <Link
            href="https://github.com/vinihvc/next-boilerplate"
            target="_blank"
            rel="noreferrer"
            className={buttonVariants({ size: "lg", variant: "outline" })}
          >
            GitHub
          </Link>

          <pre className="hidden h-11 items-center justify-between space-x-2 overflow-x-auto rounded-lg border border-neutral-100 bg-neutral-100 pr-2 pl-6 dark:border-neutral-700 dark:bg-black md:flex">
            <code className="font-mono text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              npx create-next-app -e https://github.com/vinihvc/next-boilerplate
            </code>
            <CopyButton
              value="npx create-next-app -e https://github.com/shadcn/next-template"
              className="border-none text-neutral-900 hover:bg-transparent dark:text-neutral-50"
            />
          </pre>
        </div>
      </div>
    </section>
  )
}

export default RootPage
