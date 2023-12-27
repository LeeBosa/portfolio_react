import {
  Main,
  Profile,
  ProfileImg,
  ProfileInfo,
  Info,
  Callout1,
  Callout2,
  H1,
  H2,
  P1,
  P2,
  Anchor,
} from '@/modules/nodes'

export default function Home() {
  return (
    <Main>
      <Profile paddingTop={16} paddingBottom={8}>
        <ProfileImg src='/profile_img.png' rounded='lg'/>
        <ProfileInfo marginLeft={16}>
          <H1>Taedonn</H1>
          <P1 marginTop={1.5}>Frontend developer</P1>
          <Callout1 paddingX={6} paddingY={5} marginTop={3} rounded='lg'>
            <Info icon='github'>
              <Anchor href='https://github.com/taedonn' target='_blank'>https://github.com/taedonn</Anchor>
            </Info>
            <Info icon='web' marginTop={1.5}>
              <Anchor href='https://taedonn.com' target='_blank'>https://taedonn.com</Anchor>
            </Info>
          </Callout1>
          <Callout2 paddingX={6} paddingY={5} marginTop={3} rounded='lg'>
            <Info icon='address'>Seoul, Korea</Info>
            <Info icon='email' marginTop={1.5}>taedonn@taedonn.com</Info>
          </Callout2>
        </ProfileInfo>
      </Profile>
      <H2 marginTop={8} marginBottom={3}>Intro</H2>
      <P2>
        Explore my projects and discover how I transform concepts into digital reality. <br/>
        Join me on this creative journey and let&#39;s build the future of the web together!
      </P2>
    </Main>
  )
}
