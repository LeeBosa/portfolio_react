import type { Metadata } from 'next'
import {
  Main,
  Side,
  Img,
} from '@/modules/nodes'

const { title, description, icon } = require('../../nexume.config')

export const metadata: Metadata = {
  title: title,
  description: description,
  icons: {
    icon: icon,
  }
}

export default function Home() {
  return (
    <main className='w-full flex text-l-500'>
      <Side>
        <Img/>
      </Side>
      <Main/>
    </main>
  )
}
