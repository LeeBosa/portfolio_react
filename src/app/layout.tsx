import type { Metadata } from 'next'
import { Noto_Sans_KR } from "next/font/google";
import '@/css/tailwind.css'

const { title, description, icon } = require('../../nexume.config')

export const metadata: Metadata = {
  title: title,
  description: description,
  icons: {
    icon: icon,
  }
}

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={`${notoSansKR.className}`}>
        {children}
      </body>
    </html>
  )
}
