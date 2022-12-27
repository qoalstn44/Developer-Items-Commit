import React from 'react';
import Slide from '../components/mainpage/Slide';
import BestView from '../components/mainpage/BestView';
import styled from 'styled-components';

function MainPage() {
  return (
    <StMain>
      <Slide />

      <BestView />
    </StMain>
  );
}

const StMain = styled.div`
  @media screen and (max-width: 768px) {
    padding-top: 90px;
  }
`;

export default MainPage;
