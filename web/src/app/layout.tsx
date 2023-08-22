import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Avante Digital',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>        
        <meta name="author" content="Victor Elias Ross Júnior" />
        <meta name="email" content="vicjun22@gmail.com" />

        <meta name="keywords" content="web, avante.digital, react, next, agencia, agência, marketing, digital, marketing digital, agência de marketing digital" />
        <meta httpEquiv="Content-Language" content="pt-BR" />
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
