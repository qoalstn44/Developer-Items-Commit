import styled from 'styled-components';
import logo from '../../img/logo.png';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// SwiperCore.use([Navigation, Pagination]);
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';

function Slide() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </>
    // <StItemSlide>
    //   <div>
    //     <p>컴퓨터</p>
    //     <img src={logo} alt="logo" />
    //   </div>
    //   <div>
    //     <p>키보드</p>
    //     <img src={logo} alt="logo" />
    //   </div>
    //   <div>
    //     <p>마우스</p>
    //     <img src={logo} alt="logo" />
    //   </div>
    // </StItemSlide>
  );
}

const StItemSlide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export default Slide;
