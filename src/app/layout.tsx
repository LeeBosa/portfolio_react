import { Noto_Sans_KR } from 'next/font/google'

const notoSansKR = Noto_Sans_KR({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={notoSansKR.className}>{children}</body>
    </html>
  )
}
