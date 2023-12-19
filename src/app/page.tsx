import type { Metadata } from 'next'
import {
  Body,
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
    <Body>
      <Side>
        <Img/>
      </Side>
      <Main/>
    </Body>
  )
}
