import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import backButton from '../img/x.png';
import logo from '../img/logo.png';
import CommentList from '../components/CommentList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComment } from '../redux/modules/commentModule';

function Post() {
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComment(postItemData.id));
  }, []);

  const globalPostData = useSelector((state) => state.postModule.posts);

  const onClickToggle = () => {
    setToggle(!toggle);
  };
  const param = useParams();
  const navigate = useNavigate();

  const postItemData = globalPostData.find((item) => item.id === param.id);

  const onClickBack = () => {
    navigate('/postlist');
  };

  return (
    <div>
      <StPost>
        <StHeader>
          <p>토글</p>
          <p>시간</p>
          <img src={logo} alt="logo" />
          <p>날씨</p>
          <p>로그인 회원가입</p>
        </StHeader>
        <StPostHeader>
          <p>{postItemData.title}</p>
          <img
            onClick={onClickBack}
            width={50}
            height={50}
            src={backButton}
            alt="x-btn"
          />
        </StPostHeader>
        <p>{postItemData.body}</p>
        <button onClick={onClickToggle}>댓글 열기</button>
        {toggle ? <CommentList postId={postItemData.id} /> : null}
      </StPost>
    </div>
  );
}
export default Post;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const StPostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10% 0 10%;
`;
