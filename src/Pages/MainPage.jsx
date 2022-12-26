import React from 'react';
import Header from '../components/main/Header';
import Slide from '../components/main/Slide';
import { useState } from 'react';
import BestView from '../components/main/BestView';
import SideBanner from '../components/main/SideBanner';
import Footer from '../components/main/Footer';

function MainPage() {
  const [toggle, setToggle] = useState(false);

  return (
    // 메인 홈페이지 컴포넌트 분리
    <>
      <Header toggle={toggle} setToggle={setToggle} />
      <hr />

      <Slide />

      <hr />

      <BestView />

      <hr />
      <SideBanner />

      <hr />
      <Footer />
    </>
  );
}

export default MainPage;
