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

        { /* Meta Pixel Code */ }
        <script dangerouslySetInnerHTML={{ __html:
            `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3118022051838271');
            fbq('track', 'PageView');`,
        }} />
      <noscript>
        <img style={{ display: 'none' }} height="1" width="1"
          src="https://www.facebook.com/tr?id=3118022051838271&ev=PageView&noscript=1" />
      </noscript>
        { /* End Meta Pixel Code */}

        <meta name="facebook-domain-verification" content="ap9dfshimcr2eolme2w7xraco1a8qi" />
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
