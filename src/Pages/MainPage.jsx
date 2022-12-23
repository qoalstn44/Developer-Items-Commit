import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.png';
import Header from '../components/main/Header';
import Slide from '../components/main/Slide';
import { useState } from 'react';

function MainPage() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Header toggle={toggle} setToggle={setToggle} />
      <hr />

      <Slide />

      <hr />
      <StBestViewList>
        <img src={logo} alt="logo" />
        <img src={logo} alt="logo" />
        <img src={logo} alt="logo" />
      </StBestViewList>
      <hr />
      <StSideBanner>
        공식문서API, 라이브러리, 튜토리얼, 예제, 커뮤니티 등을 한눈에 볼 수 있는
      </StSideBanner>
      <hr />
      <StFooter>
        팀이름, 팀소개, 팀원소개, 팀원이름, 팀원이메일, 팀원이미지, 팀원소개글,
      </StFooter>
    </>
  );
}

////////// BestView  //////////
const StBestViewList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

////////// SideBanner //////////
const StSideBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

////////// Footer  //////////
const StFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export default MainPage;
