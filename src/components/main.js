import '../css/main.css';

function Main() {
  const handleNightMode = (e) => {
    if(e.target.checked) { document.body.classList.replace('night_mode','bright_mode'); }
    else { document.body.classList.replace('bright_mode','night_mode'); }
  }

  return (
    <div className="main_index">
      <div className='fixed_area'>
        <input type='checkbox' id='color_mode' onChange={handleNightMode}/>
        <label htmlFor='color_mode'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/></svg>
        </label>
      </div>
      <div className='index_left'>
        <div className='img_wrap'>
          <img src='https://i.ibb.co/GR9QpsK/profile.png' alt='프로필 사진'></img>
        </div>
        <div className='profile_name'>
          <h2>taedonn.</h2>
          <h3>이태호</h3>
          <div className='hashtag'>
          <span>#프론트엔드</span>
          <span>#개발자</span>
          <span>#서울</span>
          <span>#토론토</span>
        </div>
        </div>
        <div className='profile_link'>
          <h2>사이트 바로가기</h2>
          <h3><a href='https://github.com/taedonn' target='_blank' rel='noreferrer'>⭐ 깃허브</a></h3>
          <h3><a href='https://taedonn.tistory.com' target='_blank' rel='noreferrer'>👋 블로그</a></h3>
          <h3><a href='https://portfolio.taedonn.com' target='_blank' rel='noreferrer'>👨‍💻 포트폴리오</a></h3>
        </div>
        <div className='profile_info'>
          <h2>연락처 정보</h2>
          <h3>
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/></svg></span>
            이태호 / TAE HO LEE
          </h3>
          <h3>
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg></span>
            서울시 용산구
          </h3>
          <h3>
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/></svg></span>
            1995년생
          </h3>
          <h3>
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/></svg></span>
            taedonn@outlook.com
          </h3>
        </div>
      </div>
      <div className='index_right'>
        <div className='title'>PROFILE</div>
        <div className='sub_title sub_title_school'>
          <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/><path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/></svg></div>
          <p>OCAD University<span>2013.09 ~ 2019.09</span></p>
        </div>
        <ul className='list list_school'>
          <li>학력 정보
            <ul className='sub_list'>
              <li><p>지역</p> 북미 온타리오주 토론토</li>
              <li><p>전공</p> Industrial Design</li>
              <li><p>학위</p> Bachelor's Degree</li>
            </ul>
          </li>
        </ul>
        <div className='title'>SKILLS</div>
        <div className='sub_title sub_title_skill_1'>
          <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/></svg></div>
          <p>웹 개발<span>2021.04 ~</span></p>
        </div>
        <ul className='list list_skills_1'>
          <li>프론트엔드 개발
            <ul className='sub_list'>
              <li><p>마크업 언어</p>HTML / Markdown</li>
              <li><p>스타일 시트</p>CSS / SASS / SCSS</li>
              <li><p>스크립트 언어</p>JavaScript / TypeScript / jQuery</li>
              <li><p>자바스크립트 라이브러리</p>THREE / GSAP</li>
              <li><p>자바스크립트 프레임워크</p>React / Vue</li>
              <li><p>자바스크립트 런타임</p>Node.js</li>
              <li><p>데이터 파싱</p>AJAX / JSON</li>
            </ul>
          </li>
          <li>개발 네트워크
            <ul className='sub_list'>
              <li><p>버전 관리 시스템</p>Git / SourceTree</li>
              <li><p>커뮤니티</p>GitHub / Tistory</li>
            </ul>
          </li>
        </ul>
        <div className='sub_title sub_title_skill_2'>
          <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M12.433 10.07C14.133 10.585 16 11.15 16 8a8 8 0 1 0-8 8c1.996 0 1.826-1.504 1.649-3.08-.124-1.101-.252-2.237.351-2.92.465-.527 1.42-.237 2.433.07zM8 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg></div>
          <p>제품 디자인<span>2013.09 ~</span></p>
        </div>
        <ul className='list list_skill_2'>
          <li>디자인 프로그램
            <ul className='sub_list'>
              <li><p>그래픽 디자인 프로그램</p>PhotoShop / Illustrator / Figma</li>
              <li><p>3D 디자인 프로그램</p>Rhinoceros / SolidWorks / KeyShot</li>
            </ul>
          </li>
        </ul>
        <div className='title'>EXPERIENCE</div>
        <div className='company'>
          <div className='sub_title sub_title_company'>
            <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H3Zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5Z"/></svg></div>
            <p>(주)아이클레이브<span>2021.12 ~ 현재</span></p>
          </div>
          <ul className='list'>
            <li>온라인 서비스 운영
              <ul className='sub_list'>
                <li>로보MD 사이트 운영 관리<span>2021.12 ~ 현재</span></li>
                <li>로보MD 사이트 리뉴얼<span>2022.01 ~ 2022.03</span></li>
                <li>로보MD 회원가입페이지 리뉴얼<span>2022.10 ~ 2022.11</span></li>
              </ul>
            </li>
            <li>자동 배너 제작 솔루션 운영
              <ul className='sub_list'>
                <li>배너 템플릿 제작 관리<span>2021.12 ~ 현재</span></li>
                <li>배너 스크립트 리팩토링<span>2023.01 ~ 2023.02</span></li>
                <li>배너 관리자 페이지 제작<span>2023.04 ~ 현재</span></li>
              </ul>
            </li>
            <li>진열 자동운영 솔루션 개발 참여
              <ul className='sub_list'>
                <li>진열 스크립트 개발<span>2022.03 ~ 2022.10</span></li>
                <li>진열 관리자 페이지 제작<span>2022.03 ~ 2022.10</span></li>
              </ul>
            </li>
          </ul>
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