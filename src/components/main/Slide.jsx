import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { Component } from 'react';
import Slider from 'react-slick';

import styled from 'styled-components';

import logo from '../../img/logo.png';

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
      // vertical: true,
      // verticalSwiping: true,
    };
    return (
      <StContainer>
        <Slider {...settings}>
          <StImg src={logo}></StImg>
          <StImg src={logo}></StImg>
          <StImg src={logo}></StImg>
          <StImg src={logo}></StImg>
          <StImg src={logo}></StImg>
          <StImg src={logo}></StImg>
        </Slider>
      </StContainer>
    );
  }
}

const StContainer = styled.div`
  border: 1px solid black;
  margin: auto;
  margin-bottom: 40px;
  width: 90%;
`;

const StImg = styled.img`
  /* margin: 10px; */
  /* border: 1px solid black; */
  /* border-right: 1px solid black; */
  /* overflow: block; */
  :hover {
    background-color: #48af48;
    border-radius: 4px;
  }
`;

export default Slide;
