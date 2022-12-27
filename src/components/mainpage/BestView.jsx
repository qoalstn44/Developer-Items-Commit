import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import logo from '../../img/logo.png';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const BestView = () => {
  const data = useSelector((state) => state.postModule.posts);
  // console.log(data);

  const data_1 = useSelector((state) => state.postModule.posts[0]);
  const data_2 = useSelector((state) => state.postModule.posts[1]);
  const data_3 = useSelector((state) => state.postModule.posts[2]);
  const data_4 = useSelector((state) => state.postModule.posts[3]);
  const data_5 = useSelector((state) => state.postModule.posts[4]);
  const data_6 = useSelector((state) => state.postModule.posts[5]);
  // console.log(data_1, data_2, data_3, data_4, data_5, data_6);

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

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplayspeed: 3000,

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

  return (
    <StContainer>
      <Slider {...settings}>
        <StBestViewBox>
          <StImg src={logo} alt="logo" />
          <StTitle>{data_1.title}</StTitle>
          <StContent>{data_1.body}</StContent>
        </StBestViewBox>
        <StBestViewBox>
          <StImg src={logo} alt="logo" />
          <StTitle>{data_2.title}</StTitle>
          <StContent>{data_2.body}</StContent>
        </StBestViewBox>
        <StBestViewBox>
          <StImg src={logo} alt="logo" />
          <StTitle>{data_3.title}</StTitle>
          <StContent>{data_3.body}</StContent>
        </StBestViewBox>
        <StBestViewBox>
          <StImg src={logo} alt="logo" />
          <StTitle>{data_4.title}</StTitle>
          <StContent>{data_4.body}</StContent>
        </StBestViewBox>
        <StBestViewBox>
          <StImg src={logo} alt="logo" />
          <StTitle>{data_5.title}</StTitle>
          <StContent>{data_5.body}</StContent>
        </StBestViewBox>
        <StBestViewBox>
          <StImg src={logo} alt="logo" />
          <StTitle>{data_6.title}</StTitle>
          <StContent>{data_6.body}</StContent>
        </StBestViewBox>
      </Slider>
    </StContainer>
  );
};

const StTitle = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StContent = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  /* border: 1px solid black; */
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
