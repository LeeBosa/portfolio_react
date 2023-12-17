import type { Metadata } from 'next'
import Main from '@/app/main'
import Side from '@/app/side'

const nexume = require('../../nexume.config')

export const metadata: Metadata = {
  title: nexume.title,
  description: nexume.description,
  icons: {
    icon: nexume.icon,
  }
}

export default function Home() {
  return (
    <main className='w-full flex text-l-500'>
      <Side nexume={nexume}/>
      <Main nexume={nexume}/>
    </main>
  )
}
