import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faComputer,
  faComputerMouse,
  faKeyboard,
  faHeadphones,
  faMicrophone,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const Slide = () => {
  // const postNameList = [
  //   'Desktop',
  //   'Monitor',
  //   'Mouse',
  //   'Keyborad',
  //   'Headphone',
  //   'Mike',
  // ];
  // const postImgList = [
  //   faDesktop,
  //   faComputer,
  //   faComputerMouse,
  //   faKeyboard,
  //   faHeadphones,
  //   faMicrophone,
  // ];
  // const postLink = [
  //   '/desktop',
  //   '/monitor',
  //   '/mouse',
  //   '/keyborad',
  //   'headphone',
  //   'mike',
  // ];

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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 3000,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

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
  return (
    <StContainer>
      <Slider {...settings}>
        <StCommunityBox>
          <StTitle>PC</StTitle>
          <StIcon>
            <Link to={'/computer'}>
              <FontAwesomeIcon icon={faComputer} size="9x" color="black" />
            </Link>
          </StIcon>
        </StCommunityBox>
        <StCommunityBox>
          <StTitle>모니터</StTitle>
          <StIcon>
            <Link to={'/monitor'}>
              <FontAwesomeIcon icon={faDesktop} size="9x" color="black" />
            </Link>
          </StIcon>
        </StCommunityBox>
        <StCommunityBox>
          <StTitle>마우스</StTitle>
          <StIcon>
            <Link to={'/mouse'}>
              <FontAwesomeIcon icon={faComputerMouse} size="9x" color="black" />
            </Link>
          </StIcon>
        </StCommunityBox>
        <StCommunityBox>
          <StTitle>키보드</StTitle>
          <StIcon>
            <Link to={'/keyborad'}>
              <FontAwesomeIcon icon={faKeyboard} size="9x" color="black" />
            </Link>
          </StIcon>
        </StCommunityBox>
        <StCommunityBox>
          <StTitle>헤드셋</StTitle>
          <StIcon>
            <Link to={'/headphone'}>
              <FontAwesomeIcon icon={faHeadphones} size="9x" color="black" />
            </Link>
          </StIcon>
        </StCommunityBox>
        <StCommunityBox>
          <StTitle>마이크</StTitle>
          <StIcon>
            <Link to={'/mike'}>
              <FontAwesomeIcon icon={faMicrophone} size="9x" color="black" />
            </Link>
          </StIcon>
        </StCommunityBox>
      </Slider>
    </StContainer>
  );
};

const StTitle = styled.div`
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid black;
  text-decoration: none;
`;

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
