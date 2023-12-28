import {
  Main,
  Profile,
  ProfileImg,
  ProfileInfo,
  Info,
  Callout1,
  Callout2,
  Heading,
  Paragraph,
  Anchor,
} from '@/modules/nodes'

export default function Home() {
  return (
    <Main paddingTop={16} paddingBottom={16}>
      <Profile paddingBottom={8}>
        <ProfileImg src='/profile_img.png' rounded='lg'/>
        <ProfileInfo marginLeft={16}>
          <Heading>Taedonn</Heading>
          <Paragraph fontSize='xl' marginTop={1.5}>Frontend developer</Paragraph>
          <Callout1 paddingX={6} paddingY={5} marginTop={3} rounded='lg'>
            <Info icon='github' iconEffect>
              <Anchor href='https://github.com/taedonn' target='_blank'>https://github.com/taedonn</Anchor>
            </Info>
            <Info icon='web' marginTop={1.5} iconEffect>
              <Anchor href='https://taedonn.com' target='_blank'>https://taedonn.com</Anchor>
            </Info>
          </Callout1>
          <Callout2 paddingX={6} paddingY={5} marginTop={3} rounded='lg'>
            <Info icon='address'>Seoul, Korea</Info>
            <Info icon='email' marginTop={1.5}>taedonn@taedonn.com</Info>
          </Callout2>
        </ProfileInfo>
      </Profile>
      <Heading fontSize='3xl' marginTop={8} marginBottom={3}>About me</Heading>
      <Paragraph letterSpacing='wide'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        <br/>
        <br/>
        It has survived not only five centuries, but also the leap into electronic typesetting, 
        remaining essentially unchanged. It was popularised in the 1960s with the release of 
        Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
        like Aldus PageMaker including versions of Lorem Ipsum.
        <br/>
        <br/>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. 
        Sections 1.10.32 and 1.10.33 from &#34;de Finibus Bonorum et Malorum&#34; by Cicero are also reproduced 
        in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
      </Paragraph>
      <Heading fontSize='3xl' marginTop={16} marginBottom={3}>Skills</Heading>
    </Main>
  )
}
