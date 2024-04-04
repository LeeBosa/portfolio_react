import type { Metadata } from 'next'
import { Montserrat } from "next/font/google"
import nexumeConfig from '../../nexume.config'
import '@/css/tailwind.css'

export const metadata: Metadata = {
	title: nexumeConfig.title,
	description: nexumeConfig.description,
	icons: { icon: nexumeConfig.icon }
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
