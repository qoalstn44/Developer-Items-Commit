import React from 'react';
import Slide from '../components/mainpage/Slide';
import BestView from '../components/mainpage/BestView';

function MainPage() {
  return (
    // 메인 홈페이지 컴포넌트 분리
    <>
      <Slide />

      <BestView />
    </>
  );
}

export default MainPage;
