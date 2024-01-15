import type { Metadata } from 'next'
import localfont from '@next/font/local'
import { Libre_Franklin } from 'next/font/google'

const Baskerville = localfont({
  src: [
    {
    path: '../public/fonts/BaskervilleMTPro-Regular.otf',
    weight: '400'
    }
  ],
  variable: '--font-baskerville'
})

const Franklin = Libre_Franklin({ 
  subsets: ['latin'],
  weight: ['300'], //extra-light
  style: ['normal'],
  variable: '--font-franklin'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${Baskerville.variable} ${Franklin.variable}`}>
      <body>{children}</body>
    </html>
  )
}
