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
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={`${montserrat.className}`}>
        {children}
      </body>
    </html>
  )
}
