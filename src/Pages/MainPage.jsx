import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";

function MainPage() {
  return (
    <div>
      <StHeader>
        <p>토글</p>
        <p>시간</p>
        <img src={logo} />
        <p>날씨</p>
        <p>로그인 회원가입</p>
      </StHeader>
      <StItemSlider>
        <p>컴퓨터</p>
        <p>키보드</p>
        <p>마우스</p>
        <p>모니터</p>
        <p>의자</p>
        <p>책상</p>
      </StItemSlider>
      <StBestViewList>
        <p>핫 픽스</p>
        <p>핫 픽스</p>
        <p>핫 픽스</p>
      </StBestViewList>
      <StBestViewList>
        <p>핫 픽스</p>
        <p>핫 픽스</p>
        <p>핫 픽스</p>
      </StBestViewList>
      <StSideBanner>
        공식문서API, 라이브러리, 튜토리얼, 예제, 커뮤니티 등을 한눈에 볼 수 있는
      </StSideBanner>
      <StFooter>
        팀이름, 팀소개, 팀원소개, 팀원이름, 팀원이메일, 팀원이미지, 팀원소개글,
      </StFooter>
    </div>
  );
}

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const StItemSlider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const StBestViewList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
const StSideBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
const StFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export default MainPage;
