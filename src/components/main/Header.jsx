import React from 'react';
import styled from 'styled-components';
import logo from '../../img/logo.png';
import AuthForm from '../AuthForm';
import { useState } from 'react';
import { authService } from '../../firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggle, setToggle }) => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  });

  const onClickToggleHandler = () => {
    setToggle(!toggle);
  };

  const [signinmodal, setSignInModal] = useState(false);
  const showsignin = () => {
    setSignInModal(true);
  };

  const onLogOutClick = () => {
    authService.signOut();
  };

  const onClickNavigateCommunityHandler = () => {
    setToggle(!toggle);
    navigate('/postlist');
  };

  // const onClickNavigateLoginHandler = () => {
  //   setToggle(!toggle);
  //   navigate('/1');
  // };

  return (
    <div>
      <StNavLogo>
        <img src={logo} alt="logo" onClick={() => navigate('/')} />
      </StNavLogo>

      <StHeader>
        <StNavMenu>
          <li onClick={() => navigate('/postlist')}>커뮤니티</li>

          {isLoggedIn ? (
            <li onClick={onLogOutClick}>로그아웃</li>
          ) : (
            <li onClick={showsignin}>로그인</li>
          )}
          {signinmodal && <AuthForm setSignInModal={setSignInModal} />}
          {isLoggedIn ? <li> 마이페이지 </li> : null}
        </StNavMenu>

        {toggle ? (
          <StNavMenuNone className={'navbar-menu'}>
            <li onClick={onClickNavigateCommunityHandler}>커뮤니티</li>
            {/* <li onClick={() => navigate('/2')}>회원가입/로그인</li> */}
            {isLoggedIn ? (
              <li onClick={onLogOutClick}>로그아웃</li>
            ) : (
              <li onClick={showsignin}>로그인</li>
            )}
            {signinmodal && <AuthForm setSignInModal={setSignInModal} />}
            {isLoggedIn ? <li> 마이페이지 </li> : null}
          </StNavMenuNone>
        ) : null}

        <StNavToggleBtn onClick={onClickToggleHandler}>
          <i className="fa-solid fa-bars"></i>
        </StNavToggleBtn>

        <StNavToggleBtn onClick={onClickToggleHandler}>
          <i className="fa-solid fa-bars"></i>
        </StNavToggleBtn>
      </StHeader>
    </div>
  );
};

// TODO : 로고 가운데 정렬
const StHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 80px;
  max-width: 1360px;
  margin: auto;
  border: 3px solid black;
  width: 80%;
  padding-right: 10px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0px;
    width: 90%;
  }
`;

const StNavLogo = styled.div`
  img {
    position: absolute;
    top: 7%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 150px;
    height: 100px;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const StNavMenu = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  li {
    padding: 8px 12px;
  }
  li:hover {
    background-color: #48af48;
    border-radius: 4px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StNavMenuNone = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: center;
    width: 80%;
    gap: 5px;
    li {
      width: 70%;
      text-align: center;
      padding: 8px 12px;
      border: 1px solid black;
    }
    li:hover {
      background-color: #48af48;
      border-radius: 4px;
    }
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

export default Header;
