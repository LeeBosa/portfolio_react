import {
  Main,
  ProfileProvider,
  ProfileImg,
  ProfileInfo,
  IconProvider,
  SkillProvider,
  SkillTitle,
  SkillList,
  Skill,
  Callout,
  Heading,
  Paragraph,
  Anchor,
  ExperienceProvider,
  ExperienceLeft,
  ExperienceRight
} from '@/modules/nodes'

export default function Home() {
  return (
    <Main paddingTop={16} paddingBottom={16} paddingX={5}>
      <ProfileProvider paddingBottom={8} gap={16}>
        <ProfileImg src='/profile_img.png' rounded='lg'/>
        <ProfileInfo>
          <Heading fontSize='4xl'>John Doe</Heading>
          <Paragraph fontSize='xl' marginTop={1.5}>Developer</Paragraph>
          <Callout color='main' paddingX={6} paddingY={5} marginTop={3} rounded='lg'>
            <IconProvider icon='github' iconEffect>
              <Anchor href='https://github.com/myrepo' target='_blank'>https://github.com/myrepo</Anchor>
            </IconProvider>
            <IconProvider icon='web' marginTop={1.5} iconEffect>
              <Anchor href='https://myportfolio.com' target='_blank'>https://myportfolio.com</Anchor>
            </IconProvider>
          </Callout>
          <Callout paddingX={6} paddingY={5} marginTop={3} rounded='lg'>
            <IconProvider icon='address'>California, United States</IconProvider>
            <IconProvider icon='email' marginTop={1.5}>example@example.com</IconProvider>
          </Callout>
        </ProfileInfo>
      </ProfileProvider>
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
      <Heading marginTop={20} marginBottom={3} tooltip tooltipMsg={'Developing : grey<br/>Production : purple'}>Skills</Heading>
      <SkillProvider paddingTop={3} gap={4}>
        <SkillTitle>Languages</SkillTitle>
        <SkillList>
          <Skill icon='square-js' fill>JavaScript</Skill>
          <Skill>TypeScript</Skill>
          <Skill icon='html5'>HTML/CSS</Skill>
          <Skill icon='java'>Java</Skill>
        </SkillList>
      </SkillProvider>
      <SkillProvider gap={4}>
        <SkillTitle>Frameworks</SkillTitle>
        <SkillList>
          <Skill icon='node-js' fill>Node.js</Skill>
          <Skill fill>Next.js</Skill>
          <Skill icon='vuejs'>Vue.js</Skill>
          <Skill>Nuxt.js</Skill>
        </SkillList>
      </SkillProvider>
      <SkillProvider gap={4}>
        <SkillTitle>Libraries</SkillTitle>
        <SkillList>
          <Skill icon='react' fill>React</Skill>
          <Skill>Tailwind CSS</Skill>
          <Skill icon='font-awesome'>Font Awesome</Skill>
          <Skill>Redux</Skill>
          <Skill>Pinia</Skill>
          <Skill>Axios</Skill>
          <Skill>Next Auth</Skill>
          <Skill>JSON Web Tokens</Skill>
        </SkillList>
      </SkillProvider>
      <SkillProvider gap={4}>
        <SkillTitle>Databases</SkillTitle>
        <SkillList>
          <Skill fill>MySQL</Skill>
          <Skill>NoSQL</Skill>
          <Skill>Prisma</Skill>
          <Skill>Firebase</Skill>
        </SkillList>
      </SkillProvider>
      <SkillProvider gap={4}>
        <SkillTitle>Tools & IDEs</SkillTitle>
        <SkillList>
          <Skill icon='git-alt' fill>Git</Skill>
          <Skill icon='github'>GitHub</Skill>
          <Skill icon='sourcetree'>sourcetree</Skill>
          <Skill icon='jira'>Jira</Skill>
          <Skill>VSCode</Skill>
        </SkillList>
      </SkillProvider>
      <SkillProvider gap={4}>
        <SkillTitle>AWS</SkillTitle>
        <SkillList>
          <Skill icon='aws'>Amazon S3</Skill>
          <Skill icon='aws'>Amazon API Gateway</Skill>
        </SkillList>
      </SkillProvider>
      <Heading marginTop={20} marginBottom={5} period startPeriod='2019-08'>Experiences</Heading>
      <ExperienceProvider>
        <ExperienceLeft
          companyName='Company name'
          position='Junior developer'
          workPeriod='2019.08 ~'
        />
        <ExperienceRight gap={4}>
          <Paragraph fontSize='lg' fontWeight='medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Paragraph>
        </ExperienceRight>
      </ExperienceProvider>
    </Main>
  )
}
