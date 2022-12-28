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
  const bestData = data.slice(0, 6);
  bestData.sort((a, b) => b.clickCounter - a.clickCounter);

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
        {bestData.map((item) => (
          <StBestViewBox key={item.id + 1}>
            <div>
              <Link to={`/post/${item.id}`}>
                {item.attachmentUrl ? (
                  <StImg src={item.attachmentUrl} alt="logo" />
                ) : (
                  <StImg src={nullImage} alt="logo" />
                )}
              </Link>
              <StTitle>{item?.title}</StTitle>
              <StContent>{item?.body}</StContent>
              <StViewCount>View: {item?.clickCounter}</StViewCount>
            </div>
          </StBestViewBox>
        ))}
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
