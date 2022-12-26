import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React, { Component } from 'react';
import Slider from 'react-slick';

import logo from '../../img/logo.png';
import styled from 'styled-components';

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
      style={{ ...style, display: 'block', background: 'black' }}
      onClick={onClick}
    />
  );
}

class BestView extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 1000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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
          <StBestViewBox>
            <StImg src={logo} alt="logo" />
            <StTitle>제목1</StTitle>
            <StContent>내용1</StContent>
          </StBestViewBox>
          <StBestViewBox>
            <StImg src={logo} alt="logo" />
            <StTitle>제목2</StTitle>
            <StContent>내용2</StContent>
          </StBestViewBox>
          <StBestViewBox>
            <StImg src={logo} alt="logo" />
            <StTitle>제목3</StTitle>
            <StContent>내용3</StContent>
          </StBestViewBox>
          <StBestViewBox>
            <StImg src={logo} alt="logo" />
            <StTitle>제목4</StTitle>
            <StContent>내용4</StContent>
          </StBestViewBox>
          <StBestViewBox>
            <StImg src={logo} alt="logo" />
            <StTitle>제목5</StTitle>
            <StContent>내용5</StContent>
          </StBestViewBox>
          <StBestViewBox>
            <StImg src={logo} alt="logo" />
            <StTitle>제목6</StTitle>
            <StContent>내용6</StContent>
          </StBestViewBox>
        </Slider>
      </StContainer>
    );
  }
}

const StTitle = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid black;
`;

const StContent = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid black;
`;

const StImg = styled.img`
  width: 100%;
  :hover {
    background-color: #48af48;
    border-radius: 4px;
  }
`;

const StBestViewBox = styled.div`
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

export default BestView;
