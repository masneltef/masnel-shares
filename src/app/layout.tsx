import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yvan Tefiang',
  description: 'Software Engineer & Data Scientist specializing in Machine Learning and Full-Stack Development. Currently pursuing MS at Carnegie Mellon University.',
  keywords: ['Software Engineer', 'Data Science', 'Machine Learning', 'Full Stack Development', 'React', 'Python', 'Carnegie Mellon'],
  authors: [{ name: 'Yvan Masnel Tefiang Ngatia', url: 'https://yvantefiang.com' }],
  creator: 'Yvan Masnel Tefiang Ngatia',
  publisher: 'yvantefiang.com',
  openGraph: {
    title: 'Yvan Masnel Tefiang Ngatia - Software Engineer & Data Scientist',
    description: 'Software Engineer & Data Scientist specializing in Machine Learning and Full-Stack Development',
    url: 'https://yvantefiang.com',
    siteName: 'yvantefiang.com',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yvan Masnel Tefiang Ngatia - Software Engineer & Data Scientist',
    description: 'Software Engineer & Data Scientist specializing in Machine Learning and Full-Stack Development',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Add the emoji favicon here
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🥐</text></svg>",
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
        <link rel="canonical" href="https://yvantefiang.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body 
        className="antialiased bg-white text-gray-900" 
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
        suppressHydrationWarning={true}
      >
        <div className="min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}