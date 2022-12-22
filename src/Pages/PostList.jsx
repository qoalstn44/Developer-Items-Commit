import styled, {keyframes} from "styled-components";
import logo from "../img/logo.png";
import postcontainer from "../img/postcontainer.png";
import {useNavigate} from "react-router-dom";

const boxFade = keyframes`
  50% { // 50% -> 정해둔 초의 50%가 지났을 때 중괄호 안의 코드를 실행
    opacity: 50%; // 불투명도
  }
`;

function PostList() {
  // 아래 부분은 firebase에서 데이터를 가져올 부분.
  const data = [
    {
      id: 1,
      title: "1111111",
    },
    {
      id: 2,
      title: "22222222",
    },
    {
      id: 3,
      title: "333333333",
    },
    {
      id: 4,
      title: "4444444444",
    },
  ];
  const navigate = useNavigate();
  const onClick = (event) => {
    navigate(`/post/${event.target.id}`);
  };
  return (
    <div>
      <StHeader>
        <p>토글</p>
        <p>시간</p>
        <img src={logo} alt="logo" />
        <p>날씨</p>
        <p>로그인 회원가입</p>
      </StHeader>
      <StItemList>
        <StListName>콤퓨타</StListName>
        {data.map((item) => (
          <StItem key={item.id}>
            <StItemImg></StItemImg>
            <StItemTitle>{item.title}</StItemTitle>
            <button onClick={onClick} id={item.id}>
              가라잇!
            </button>
          </StItem>
        ))}
      </StItemList>
    </div>
  );
}
export default PostList;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
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
  background-image: url(${postcontainer});
  background-size: 380px 240px;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 200px;
  text-align: center;
  margin: 10px 0px 10px 0px;
  @media screen and (min-width: 800px) {
    background-size: 500px 280px;
    background-color: aqua;
    width: 500px;
    height: 250px;
  }
`;
const StItemImg = styled.div`
  background-color: black;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 15px;
`;
const StItemTitle = styled.div`
  background-color: white;
`;