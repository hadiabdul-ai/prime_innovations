import '@/app/css/style.css'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Prime Innovations',
  description: 'Web apps, AI agents, chatbots and voice agents. Get a free evaluation of your business.',
  openGraph: {
    title: 'Prime Innovations',
    description: 'Web apps, AI agents, chatbots and voice agents. Get a free evaluation of your business.',
    siteName: 'Prime Innovations',
    images: [{
      url: 'https://www.primeinnovationshq.com/images/logo.png',
      width: 1200,
      height: 630,
      alt: 'Prime Innovations Logo',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prime Innovations',
    description: 'Web apps, AI agents, chatbots and voice agents. Get a free evaluation of your business.',
    images: ['https://www.primeinnovationshq.com/images/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Prime Innovations" />
        <meta property="og:description" content="Web apps, AI agents, chatbots and voice agents. Get a free evaluation of your business." />
        <meta property="og:url" content="https://www.primeinnovationshq.com/" />
        <meta property="og:type" content="website" />

        {/* Apple Meta Tags */}
        <link rel="apple-touch-icon" href="https://www.primeinnovationshq.com/images/logo.png" />
        <meta name="apple-mobile-web-app-title" content="Prime Innovations" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Force og:image with absolute URL */}
        <meta property="og:image" content="https://www.primeinnovationshq.com/images/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className={`${inter.variable} font-inter antialiased bg-black text-slate-100 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  )
}
