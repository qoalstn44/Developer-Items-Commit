import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import logo from '../../img/logo.png';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { getPosts } from '../../redux/modules/postModule';

// import {
//   doc,
//   onSnapshot,
//   query,
//   collection,
//   orderBy,
// } from 'firebase/firestore';
// import { dbService } from '../../firebase';
// import { async } from '@firebase/util';

const BestView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const data = useSelector((state) => state.postModule.posts);
  const real = [...data];
  // console.log(data);

  real.sort((a, b) => b.clickCounter - a.clickCounter);
  // console.log(real);

  const [topView_1, topView_2, topView_3, topView_4, topView_5, topView_6] = [
    real[0],
    real[1],
    real[2],
    real[3],
    real[4],
    real[5],
  ];
  // console.log(topView_1, topView_2, topView_3, topView_4, topView_5, topView_6);

  // const data_1 = useSelector((state) => state.postModule.posts[0]);
  // const data_2 = useSelector((state) => state.postModule.posts[1]);
  // const data_3 = useSelector((state) => state.postModule.posts[2]);
  // const data_4 = useSelector((state) => state.postModule.posts[3]);
  // const data_5 = useSelector((state) => state.postModule.posts[4]);
  // const data_6 = useSelector((state) => state.postModule.posts[5]);
  // console.log(data_1, data_2, data_3, data_4, data_5, data_6);

  // const [bestView, setBestView] = useState(null);

  // const kidongg = [
  //   { title: 'me', body: 'we' },
  //   { title: 'you', body: 'code' },
  // ];

  // const fuck = () => {
  //   const q = query(
  //     collection(dbService, `posts`),
  //     orderBy('clickCounter', 'desc')
  //   );
  //   onSnapshot(q, (querySnapshot) => {
  //     const bestViewArray = querySnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setBestView(bestViewArray);
  //   });
  // };

  // setTimeout(fuck, 2000);

  // useEffect(() => {}, []);

  // console.log(bestView);

  // const [topView_1, topView_2, topView_3, topView_4, topView_5, topView_6] = [
  //   bestView[0],
  //   bestView[1],
  //   bestView[2],
  //   bestView[3],
  //   bestView[4],
  //   bestView[5],
  // ];

  // console.log(topView_1, topView_2, topView_3, topView_4, topView_5, topView_6);

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
          <StTitle>{topView_1?.title}</StTitle>
          <StContent>{topView_1?.body}</StContent>
          <StViewCount>View: {topView_1?.clickCounter}</StViewCount>
        </StBestViewBox>
        <StBestViewBox>
          <StImg src={logo} alt="logo" />
          <StTitle>{topView_2?.title}</StTitle>
          <StContent>{topView_2?.body}</StContent>
          <StViewCount>View: {topView_2?.clickCounter}</StViewCount>
        </StBestViewBox>
        <StBestViewBox>
          <StImg src={logo} alt="logo" />
          <StTitle>{topView_3?.title}</StTitle>
          <StContent>{topView_3?.body}</StContent>
          <StViewCount>View: {topView_3?.clickCounter}</StViewCount>
        </StBestViewBox>
        <StBestViewBox>
          <StImg src={logo} alt="logo" />
          <StTitle>{topView_4?.title}</StTitle>
          <StContent>{topView_4?.body}</StContent>
          <StViewCount>View: {topView_4?.clickCounter}</StViewCount>
        </StBestViewBox>
        <StBestViewBox>
          <StImg src={logo} alt="logo" />
          <StTitle>{topView_5?.title}</StTitle>
          <StContent>{topView_5?.body}</StContent>
          <StViewCount>View: {topView_5?.clickCounter}</StViewCount>
        </StBestViewBox>
        <StBestViewBox>
          <StImg src={logo} alt="logo" />
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
  border: 3px solid black;
  margin: auto;
  margin-bottom: 40px;
  width: 70%;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export default BestView;
