import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Sidik Adriansyah — Design Engineer & Frontend Developer',
  description:
    'Portfolio Sidik Adriansyah: branding, social media design, dan pengembangan frontend premium.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
