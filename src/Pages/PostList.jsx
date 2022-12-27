import styled, { keyframes } from 'styled-components';
import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clickPost, getPosts } from '../redux/modules/postModule';

const boxFade = keyframes`
  50% { // 50% -> 정해둔 초의 50%가 지났을 때 중괄호 안의 코드를 실행
    opacity: 50%; // 불투명도
  }
`;

function PostList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const globalPostData = useSelector((state) => state.postModule.posts);

  const navigate = useNavigate();

  const onClickPost = async (event) => {
    const eventPost = globalPostData.filter(
      (post) => post.id === event.target.id
    );
    const eventPostCounter = eventPost[0].clickCounter;
    dispatch(
      clickPost({ postId: event.target.id, eventPostCounter: eventPostCounter })
    );
    navigate(`/post/${event.target.id}`);
  };
  const onClickForm = () => {
    navigate(`/postform`);
  };

  return (
    <div>
      {/* <StHeader>
        <p>토글</p>
        <p>시간</p>
        <img src={logo} alt="logo" />
        <p>날씨</p>
        <p>로그인 회원가입</p>
      </StHeader> */}
      <StItemList>
        <button onClick={onClickForm}>작성가자잇!</button>
        <StListName>콤퓨타</StListName>
        {globalPostData.map((item) => (
          // 아래의 key는 id와 겹치지 않게 하기 위해 +1
          <StItem key={item.id + 1}>
            <div>
              <StItemTitle>{item.title}</StItemTitle>
              <button onClick={onClickPost} id={item.id}>
                상세페이지 가라잇!
              </button>
              <StPostDate>
                {new Date(item.createAt + 9 * 60 * 60 * 1000).toLocaleString(
                  'ko-KR',
                  {
                    timeZone: 'UTC',
                  }
                )}
              </StPostDate>
            </div>
          </StItem>
        ))}
      </StItemList>
    </div>
  );
}
export default PostList;

// const StHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 20px;
// `;
const StListName = styled.div`
  font-size: 30px;
  & {
    animation: ${boxFade} 1s step-end infinite; // ease-in-out infinite : 무한 alternate
  }
`;
const StItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;
const StItem = styled.div`
  border: 3px solid black;
  background-size: 380px 240px;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 150px;
  text-align: center;
  margin: 10px 0px 10px 0px;
  @media screen and (min-width: 800px) {
    background-size: 500px 280px;
    width: 500px;
    height: 150px;
  }
`;

const StItemTitle = styled.div`
  background-color: white;
  margin: 10px 30px 10px 30px;
`;
const StPostDate = styled.div`
  margin-top: 10px;
`;
