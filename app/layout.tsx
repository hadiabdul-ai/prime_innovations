import '@/app/css/style.css'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata = {
  title: 'Prime Innovations',
  description: 'Turning your ideas into reality',
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
        <meta property="og:description" content="Turning your ideas into reality" />
        <meta property="og:image" content="https://www.primeinnovations.ca/images/logo.png" />
        <meta property="og:url" content="https://www.primeinnovations.ca/" />
        <meta property="og:type" content="website" />

        {/* Apple Meta Tags */}
        <link rel="apple-touch-icon" href="https://www.primeinnovations.ca/images/logo.png" />
        <meta name="apple-mobile-web-app-title" content="Prime Innovations" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-inter antialiased bg-black text-slate-100 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  )
}
