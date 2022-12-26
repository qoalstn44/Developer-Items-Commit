import React from 'react';
import styled from 'styled-components';
import logo from '../../img/logo.png';

const BestView = () => {
  return (
    <StBestViewList>
      <img src={logo} alt="logo" />
      <img src={logo} alt="logo" />
      <img src={logo} alt="logo" />
      <img src={logo} alt="logo" />
      <img src={logo} alt="logo" />
      <img src={logo} alt="logo" />
    </StBestViewList>
  );
};

const StBestViewList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  padding: 0 20px;
  /* margin-top: 50px; */
  max-width: 1360px;
  margin: 40px auto 0px auto;
  /* border: 1px solid black; */
  img {
    border: 1px solid black;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default BestView;
