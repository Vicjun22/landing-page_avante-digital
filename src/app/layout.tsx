import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Avante Digital',
  description: 'Uma equipe especializada para impulsionar o crescimento de sua empresa.',
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

        <meta httpEquiv="Content-Language" content="pt-BR" />
        <meta name="keywords" content="web, avante.digital, react, next, agencia, agência, marketing, digital, marketing digital, agência de marketing digital" />
        <link rel="icon" type="image/jpeg" href='/avante-digital.jpg' sizes="any" />
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
