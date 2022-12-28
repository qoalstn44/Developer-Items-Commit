import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getPosts } from '../../redux/modules/postModule';
import nullImage from '../../img/null-image.png';
import { Link, useNavigate } from 'react-router-dom';

const BestView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const data = useSelector((state) => state.postModule.posts);
  const real = [...data];

  real.sort((a, b) => b.clickCounter - a.clickCounter);

  const [topView_1, topView_2, topView_3, topView_4, topView_5, topView_6] = [
    real[0],
    real[1],
    real[2],
    real[3],
    real[4],
    real[5],
  ];

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
  const navigate = useNavigate();
  return (
    <StContainer>
      <Slider {...settings}>
        <StBestViewBox>
          <Link to={`/post/${topView_1.id}`}>
            {topView_1.attachmentUrl ? (
              <StImg src={topView_1.attachmentUrl} alt="logo" />
            ) : (
              <StImg src={nullImage} alt="logo" />
            )}
          </Link>
          <StTitle>{topView_1?.title}</StTitle>
          <StContent>{topView_1?.body}</StContent>
          <StViewCount>View: {topView_1?.clickCounter}</StViewCount>
        </StBestViewBox>
        <StBestViewBox>
          <Link to={`/post/${topView_2.id}`}>
            {topView_2.attachmentUrl ? (
              <StImg src={topView_2.attachmentUrl} alt="logo" />
            ) : (
              <StImg src={nullImage} alt="logo" />
            )}
          </Link>
          <StTitle>{topView_2?.title}</StTitle>
          <StContent>{topView_2?.body}</StContent>
          <StViewCount>View: {topView_2?.clickCounter}</StViewCount>
        </StBestViewBox>
        <StBestViewBox>
          <Link to={`/post/${topView_3.id}`}>
            {topView_3.attachmentUrl ? (
              <StImg src={topView_3.attachmentUrl} alt="logo" />
            ) : (
              <StImg src={nullImage} alt="logo" />
            )}
          </Link>
          <StTitle>{topView_3?.title}</StTitle>
          <StContent>{topView_3?.body}</StContent>
          <StViewCount>View: {topView_3?.clickCounter}</StViewCount>
        </StBestViewBox>
        <StBestViewBox>
          <Link to={`/post/${topView_4.id}`}>
            {topView_4.attachmentUrl ? (
              <StImg src={topView_4.attachmentUrl} alt="logo" />
            ) : (
              <StImg src={nullImage} alt="logo" />
            )}
          </Link>
          <StTitle>{topView_4?.title}</StTitle>
          <StContent>{topView_4?.body}</StContent>
          <StViewCount>View: {topView_4?.clickCounter}</StViewCount>
        </StBestViewBox>
        <StBestViewBox>
          <Link to={`/post/${topView_5.id}`}>
            {topView_5.attachmentUrl ? (
              <StImg src={topView_5.attachmentUrl} alt="logo" />
            ) : (
              <StImg src={nullImage} alt="logo" />
            )}
          </Link>
          <StTitle>{topView_5?.title}</StTitle>
          <StContent>{topView_5?.body}</StContent>
          <StViewCount>View: {topView_5?.clickCounter}</StViewCount>
        </StBestViewBox>
        <StBestViewBox>
          <Link to={`/post/${topView_6.id}`}>
            {topView_6.attachmentUrl ? (
              <StImg src={topView_6.attachmentUrl} alt="logo" />
            ) : (
              <StImg src={nullImage} alt="logo" />
            )}
          </Link>
          <StTitle>{topView_6?.title}</StTitle>
          <StContent>{topView_6?.body}</StContent>
          <StViewCount>View: {topView_6?.clickCounter}</StViewCount>
        </StBestViewBox>
      </Slider>
    </StContainer>
  );
};

const StViewCount = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StTitle = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 3px solid black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StContent = styled.div`
  width: 100%;
  padding: 20px 0;
  border-top: 3px solid black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StImg = styled.img`
  width: 100%;
  height: 250px;
  :hover {
    background-color: #94e394;
    border-radius: 4px;
  }
`;

const StBestViewBox = styled.div`
  margin: auto;
  text-align: center;
`;

const StContainer = styled.div`
  border: 3px solid black;
  margin: auto;
  margin-bottom: 40px;
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export default BestView;
