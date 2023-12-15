import type { Metadata } from 'next'
import Side from '@/app/side'

const nexume = require('../../nexume.config')

export const metadata: Metadata = {
  title: nexume.title,
  description: nexume.description,
}

export default function Home() {
  return (
    <main className='w-full flex'>
      <Side/>
    </main>
  )
}
