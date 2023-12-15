import type { Metadata } from 'next'
import { Body } from '@/modules/nodes'
import Side from '@/app/side'

const nexume = require('../../nexume.config')

export const metadata: Metadata = {
  title: nexume.title,
  description: nexume.description,
}

export default function Home() {
  return (
    <Side/>
  )
}
