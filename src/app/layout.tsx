import type { Metadata } from 'next'
import { Montserrat } from "next/font/google";
import '@/css/tailwind.css'

const { title, description, icon } = require('../../nexume.config')

export const metadata: Metadata = {
  title: title,
  description: description,
  icons: {
    icon: icon,
  }
}

const montserrat = Montserrat({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        {children}
      </body>
    </html>
  )
}
