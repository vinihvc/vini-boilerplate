import { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '@/utils/cn'

import { Providers } from './providers'
import '@/styles/globals.css'
import { SEO } from '@/constants/seo'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Toaster } from '@/components/ui/toaster'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: { absolute: SEO.title, template: `%s // ${SEO.title}` },
  applicationName: SEO.title,
  description: SEO.description,
  keywords: SEO.keywords,
  themeColor: '#0A0A0A',
  openGraph: {
    locale: 'en',
    title: SEO.title,
    description: SEO.description,
    url: SEO.url,
    type: 'website',
    images: [
      {
        url: '/images/thumb.png',
        width: 1200,
        height: 630,
        alt: SEO.description,
      },
    ],
    siteName: SEO.title,
  },
  twitter: {
    site: SEO.twitter,
  },
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'font-sans antialiased',
          'flex h-full min-h-screen flex-col',
          'bg-white dark:bg-neutral-900',
          'text-neutral-900 dark:text-neutral-50',
          fontSans.variable,
        )}
      >
        <Providers>
          <Header />

          <main className="flex flex-1 flex-col">{children}</main>

          <Footer />

          <TailwindIndicator />

          <Toaster />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
