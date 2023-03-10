import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <hr />
      <StFooter>
        <h1>인연</h1>
        <div>
          <p>인연 소개 : 인연을 중요시 생각하는 남자들의 고군분투 프로젝트</p>
          <div>멤버 소개 : 김인섭, 박지수, 배민수, 이기동</div>
        </div>
      </StFooter>
    </>
  );
};

const StFooter = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 100px;
  @media screen and (max-width: 768px) {
    gap: 30px;
    h1 {
      width: 50px;
      font-size: 15px;
    }
    p {
      display: none;
    }
  }
`;

export default Footer;
