import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import '@/css/globals.css'

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "John Doe",
  description: "John Doe's resume",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSansKR.className}>{children}</body>
    </html>
  )
}
