import {
  Main,
  Profile,
  ProfileImg,
  ProfileInfo,
  H1,
  P1,
} from '@/modules/nodes'

export default function Home() {
  return (
    <Main>
      <Profile>
        <ProfileImg src='/profile_img.png'/>
        <ProfileInfo>
          <H1>Taedonn</H1>
          <P1 marginTop={1.5}>Frontend developer</P1>
        </ProfileInfo>
      </Profile>
    </Main>
  )
}
