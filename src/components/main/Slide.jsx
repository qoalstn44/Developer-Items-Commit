import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { Component } from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';
import logo from '../../img/logo.png';

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
          nextArrow: false,
          prevArrow: false,
          breakpoint: 768,
          settings: {
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
            <StTitle>커뮤1</StTitle>
            <StImg src={logo}></StImg>
          </StCommunityBox>
          <StCommunityBox>
            <StTitle>커뮤2</StTitle>
            <StImg src={logo}></StImg>
          </StCommunityBox>
          <StCommunityBox>
            <StTitle>커뮤3</StTitle>
            <StImg src={logo}></StImg>
          </StCommunityBox>
          <StCommunityBox>
            <StTitle>커뮤4</StTitle>
            <StImg src={logo}></StImg>
          </StCommunityBox>
          <StCommunityBox>
            <StTitle>커뮤5</StTitle>
            <StImg src={logo}></StImg>
          </StCommunityBox>
          <StCommunityBox>
            <StTitle>커뮤6</StTitle>
            <StImg src={logo}></StImg>
          </StCommunityBox>
        </Slider>
      </StContainer>
    );
  }
}

const StTitle = styled.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid black;
`;

const StImg = styled.img`
  width: 100%;
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
  width: 50%;
`;

export default Slide;
