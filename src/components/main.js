import '../css/main.css';

function Main() {
  return (
    <div className="main_index">
      <div className='index_left'>
        <div className='img_wrap'>
          <img src='https://i.ibb.co/GR9QpsK/profile.png' alt='프로필 사진'></img>
        </div>
        <div className='profile_name'>
          <h2>taedonn.</h2>
          <h3>이태호</h3>
        </div>
      </div>
      <div className='index_right'>
        <div className='title'>
          PROFILE
        </div>
        <h2>
          <span>#프론트엔드</span>
          <span>#개발자</span>
          <span>#ISTJ</span>
          <span>#서울</span>
          <span>#토론토</span>
          <span>#OCADU</span>
        </h2>
        <div className='title'>SKILLS</div>
        <div className='skills_list'>
          <span>HTML</span>
          <span>CSS</span>
          <span>SASS</span>
          <span>SCSS</span>
          <span>Markdown</span>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>jQuery</span>
          <span>GSAP</span>
          <span>Three.js</span>
          <span>Node.js</span>
          <span>React</span>
          <span>Vue</span>
          <span>AJAX</span>
          <span>JSON</span>
          <span>Git</span>
          <span>GitHub</span>
        </div>
        <div className='title'>EXPERIENCE</div>
        <div className='company_list'>
          <div className='company'>
            <div className='company_name'>
              <div className='company_logo'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V.5ZM2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-1 2v1H2v-1h1Zm1 0h1v1H4v-1Zm9-10v1h-1V3h1ZM8 5h1v1H8V5Zm1 2v1H8V7h1ZM8 9h1v1H8V9Zm2 0h1v1h-1V9Zm-1 2v1H8v-1h1Zm1 0h1v1h-1v-1Zm3-2v1h-1V9h1Zm-1 2h1v1h-1v-1Zm-2-4h1v1h-1V7Zm3 0v1h-1V7h1Zm-2-2v1h-1V5h1Zm1 0h1v1h-1V5Z"/></svg></div>
              <p>(주)아이클레이브<span>2021.12 ~ 현재</span></p>
            </div>
            <ul className='company_info'>
              <li>온라인 서비스 운영
                <ul className='company_info_sub'>
                  <li>로보MD 사이트 운영 관리<span>2021.12 ~ 현재</span></li>
                  <li>로보MD 사이트 리뉴얼<span>2022.01 ~ 2022.03</span></li>
                  <li>로보MD 회원가입페이지 리뉴얼<span>2022.10 ~ 2022.11</span></li>
                </ul>
              </li>
              <li>자동 배너 제작 솔루션 운영
                <ul className='company_info_sub'>
                  <li>배너 템플릿 제작 관리<span>2021.12 ~ 현재</span></li>
                  <li>배너 스크립트 리팩토링<span>2023.01 ~ 2023.02</span></li>
                  <li>배너 관리자 페이지 제작<span>2023.04 ~ 현재</span></li>
                </ul>
              </li>
              <li>진열 자동운영 솔루션 개발 참여
                <ul className='company_info_sub'>
                  <li>진열 스크립트 개발<span>2022.03 ~ 2022.10</span></li>
                  <li>진열 관리자 페이지 제작<span>2022.03 ~ 2022.10</span></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className='copyright'>
          Copyright {new Date().getFullYear()}. taedonn, all rights reserved.<br/>
          <a href='https://github.com/taedonn/resume' target='_blank' rel='noreferrer'>Check this repository on GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Main;