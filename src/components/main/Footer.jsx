import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return <StFooter>팀이름, 팀소개, 팀원소개, 팀원이름, 팀원이메일, 팀원이미지, 팀원소개글,</StFooter>;
};

const StFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export default Footer;
