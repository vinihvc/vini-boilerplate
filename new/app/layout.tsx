import { Metadata } from "next"
import { cn } from "@/utils/cn"
import { Inter as FontSans } from "@next/font/google"

import { Providers } from "./providers"
import "@/styles/globals.css"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { TailwindIndicator } from "@/components/tailwind-indicator"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Next Boilerplate",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-sans antialiased",
          "min-h-screen flex flex-col h-full",
          "bg-white dark:bg-neutral-900",
          "text-neutral-900 dark:text-neutral-50",
          fontSans.variable
        )}
      >
        <Providers>
          <Header />

          <main className="flex flex-1 flex-col">{children}</main>

          <Footer />

          <TailwindIndicator />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
