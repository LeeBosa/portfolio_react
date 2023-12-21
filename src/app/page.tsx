import {
  Main,
  Profile,
  Img,
} from '@/modules/nodes'

export default function Home() {
  return (
    <Main>
      <Profile>
        <Img src='/profile_img.jpg'/>
      </Profile>
    </Main>
  )
}
