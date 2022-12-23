import React from 'react';
import styled from 'styled-components';
import Weather from '../components/Weather';
import logo from '../img/logo.png';

import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function MainPage() {
  const navigate = useNavigate();

  // const menu = useRef();
  // const toggleBtn = useRef();

  // console.log(menu.current);
  // console.log(toggleBtn.current);

  // useEffect(() => {
  //   const menu = document.querySelector(".navbar-menu");
  //   console.log("🚀  MainPage  menu", menu);

  //   const toggleBtn = document.querySelector(".navbar-toggleBtn");
  //   console.log("🚀  MainPage  toggleBtn", toggleBtn);

  //   toggleBtn.addEventListener("click", () => {
  //     menu.classList.toggle("active");
  //   });
  // }, []);

  const [toggle, setToggle] = useState(false);

  const onClickToggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      ``
      <StHeader>
        <StNavLogo>
          <img src={logo} alt="logo" onClick={() => navigate('/')} />
        </StNavLogo>

        {toggle ? (
          <StNavMenu className={'navbar-menu'}>
            <li onClick={() => navigate('/1')}>커뮤니티</li>
            <li onClick={() => navigate('/2')}>중고거래</li>
            <li onClick={() => navigate('/3')}>이륙장</li>
            <li onClick={() => navigate('/4')}>마이페이지</li>
            <li onClick={() => navigate('/5')}>회원가입/로그인</li>
          </StNavMenu>
        ) : null}

        <StNavToggleBtn onClick={onClickToggleHandler}>
          <i className="fa-solid fa-bars"></i>
        </StNavToggleBtn>
      </StHeader>
      <hr />
      <StItemSlider>
        <div>
          <p>컴퓨터</p>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <p>키보드</p>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <p>마우스</p>
          <img src={logo} alt="logo" />
        </div>
      </StItemSlider>
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
    </div>
  );
}

////////// Header  //////////
const StHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1360px;
  margin: 0 auto;
  background-color: #263343;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const StNavLogo = styled.div`
  img {
    width: 150px;
    height: 100px;
  }
`;

const StNavMenu = styled.div`
  display: flex;
  list-style: none;
  li {
    padding: 8px 12px;
  }
  li:hover {
    background-color: #48af48;
    border-radius: 4px;
  }

  @media screen and (max-width: 768px) {
    /* display: none; */
    flex-direction: column;
    align-items: center;
    width: 100%;
    li {
      width: 100%;
      text-align: center;
    }
    /* .active {
      display: block;
    } */
  }
`;

const StNavToggleBtn = styled.span`
  display: none;
  position: absolute;
  top: 40px;
  right: 32px;
  font-size: 24px;
  color: #48af48;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

////////// Slider //////////
const StItemSlider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

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
