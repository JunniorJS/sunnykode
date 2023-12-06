import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HappyHost: SunnyKode',
  description: 'Site fictício feito sem fins comerciais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className=''>{children}</body>
    </html>
  )
}
