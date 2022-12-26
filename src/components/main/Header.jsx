import React from 'react';
import styled from 'styled-components';
import logo from '../../img/logo.png';

import { useNavigate } from 'react-router-dom';

const Header = ({ toggle, setToggle }) => {
  const navigate = useNavigate();

  const onClickToggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <StHeader>
      <StNavLogo>
        <img src={logo} alt="logo" onClick={() => navigate('/')} />
      </StNavLogo>

      <StNavMenu className={'navbar-menu'}>
        <li onClick={() => navigate('/1')}>커뮤니티</li>
        <li onClick={() => navigate('/2')}>중고거래</li>
        <li onClick={() => navigate('/3')}>이륙장</li>
        <li onClick={() => navigate('/4')}>마이페이지</li>
        <li onClick={() => navigate('/5')}>회원가입/로그인</li>
      </StNavMenu>

      {toggle ? (
        <StNavMenuNone className={'navbar-menu'}>
          <li onClick={() => navigate('/1')}>커뮤니티</li>
          <li onClick={() => navigate('/2')}>중고거래</li>
          <li onClick={() => navigate('/3')}>이륙장</li>
          <li onClick={() => navigate('/4')}>마이페이지</li>
          <li onClick={() => navigate('/5')}>회원가입/로그인</li>
        </StNavMenuNone>
      ) : null}

      <StNavToggleBtn onClick={onClickToggleHandler}>
        <i className="fa-solid fa-bars"></i>
      </StNavToggleBtn>
    </StHeader>
  );
};

const StHeader = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  max-width: 1360px;
  margin: 0 auto;
  border: 1px solid black;
  /* background-color: #263343; */
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
    width: 100%;
    padding-bottom: 10px;
    li {
      width: 100%;
      text-align: center;
      padding: 8px 12px;
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
