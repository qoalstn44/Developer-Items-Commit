import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StFooter>
      <h1>팀 이름 : 인연</h1>
      <div>
        <p>
          팀 소개 : 우리의 만남은 인연이었다. 4명의 남자들의 고군분투 프로젝트
        </p>
        <div>멤버 소개 : 김인섭, 박지수, 배민수, 이기동</div>
      </div>
    </StFooter>
  );
};

const StFooter = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 100px;
`;

// const StFooterIntro = styled.div`
//   padding: 10px;
// `;

export default Footer;
