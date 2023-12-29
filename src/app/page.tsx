import {
  Main,
  Profile,
  ProfileImg,
  ProfileInfo,
  IconProvider,
  Callout,
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
          <Heading fontSize='4xl'>Taedonn</Heading>
          <Paragraph fontSize='xl' marginTop={1.5}>Frontend developer</Paragraph>
          <Callout color='main' paddingX={6} paddingY={5} marginTop={3} rounded='lg'>
            <IconProvider icon='github' iconEffect>
              <Anchor href='https://github.com/taedonn' target='_blank'>https://github.com/taedonn</Anchor>
            </IconProvider>
            <IconProvider icon='web' marginTop={1.5} iconEffect>
              <Anchor href='https://taedonn.com' target='_blank'>https://taedonn.com</Anchor>
            </IconProvider>
          </Callout>
          <Callout paddingX={6} paddingY={5} marginTop={3} rounded='lg'>
            <IconProvider icon='address'>Seoul, Korea</IconProvider>
            <IconProvider icon='email' marginTop={1.5}>taedonn@taedonn.com</IconProvider>
          </Callout>
        </ProfileInfo>
      </Profile>
      <Heading marginTop={8} marginBottom={3}>About me</Heading>
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
      <Heading marginTop={20} marginBottom={3} tooltip tooltipMsg={'B : Beginner<br/>H : Hobby<br/>P : Pro'}>Skills</Heading>
    </Main>
  )
}
