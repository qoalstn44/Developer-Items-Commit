import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { Component } from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';
// import logo from '../../img/logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faComputer,
  faComputerMouse,
  faKeyboard,
  faHeadphones,
  faMicrophone,
} from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';

// TODO : 버튼 스타일 수정
// import { ReactComponent as Next } from '../../img/arrow-right-solid.svg';
// import { ReactComponent as Prev } from '../../img/arrow-left-solid.svg';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
      }}
      onClick={onClick}
    />
  );
}

class Slide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,

      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,

      // nextArrow: () => (<Next />),
      // prevArrow: () => (<Prev />),

      speed: 1000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            nextArrow: false,
            prevArrow: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
          },
        },
      ],
    };

    // Todo : 동적 라우팅 구성
    return (
      <StContainer>
        <Slider {...settings}>
          <StCommunityBox>
            <StTitle>PC</StTitle>
            <StIcon>
              <FontAwesomeIcon icon={faComputer} size="9x" />
            </StIcon>
            {/* <StImg src={logo}></StImg> */}
          </StCommunityBox>
          <StCommunityBox>
            <StTitle>모니터</StTitle>
            <StIcon>
              <FontAwesomeIcon icon={faDesktop} size="9x" />
            </StIcon>
            {/* <StImg src={logo}></StImg> */}
          </StCommunityBox>
          <StCommunityBox>
            <StTitle>마우스</StTitle>
            <StIcon>
              <FontAwesomeIcon icon={faComputerMouse} size="9x" />
            </StIcon>
            {/* <StImg src={logo}></StImg> */}
          </StCommunityBox>
          <StCommunityBox>
            <StTitle>키보드</StTitle>
            <StIcon>
              <FontAwesomeIcon icon={faKeyboard} size="9x" />
            </StIcon>
            {/* <StImg src={logo}></StImg> */}
          </StCommunityBox>
          <StCommunityBox>
            <StTitle>헤드셋</StTitle>
            <StIcon>
              <FontAwesomeIcon icon={faHeadphones} size="9x" />
            </StIcon>
            {/* <StImg src={logo}></StImg> */}
          </StCommunityBox>
          <StCommunityBox>
            <StTitle>마이크</StTitle>
            <StIcon>
              <FontAwesomeIcon icon={faMicrophone} size="9x" />
            </StIcon>
            {/* <StImg src={logo}></StImg> */}
          </StCommunityBox>
        </Slider>
      </StContainer>
    );
  }
}

{
  /* <FontAwesomeIcon icon={faComputer} />
<FontAwesomeIcon icon={faDesktop} />
<FontAwesomeIcon icon={faComputerMouse} />
<FontAwesomeIcon icon={faKeyboard} />
<FontAwesomeIcon icon={faHeadphones} />
<FontAwesomeIcon icon={faMicrophone} /> */
}

const StTitle = styled.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid black;
`;

// const StImg = styled.img`
//   width: 100%;
//   :hover {
//     background-color: #48af48;
//     border-radius: 4px;
//   }
// `;

const StIcon = styled.div`
  padding: 5px;
  :hover {
    background-color: #48af48;
    border-radius: 4px;
  }
`;

const StCommunityBox = styled.div`
  margin: auto;
  text-align: center;
`;

const StContainer = styled.div`
  border: 1px solid black;
  margin: auto;
  margin-bottom: 40px;
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export default Slide;
