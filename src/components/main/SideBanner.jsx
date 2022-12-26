import React from 'react';
import styled from 'styled-components';

const SideBanner = () => {
  return (
    <StSideBanner>
      공식문서API, 라이브러리, 튜토리얼, 예제, 커뮤니티 등을 한눈에 볼 수 있는
    </StSideBanner>
  );
};

const StSideBanner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export default SideBanner;
