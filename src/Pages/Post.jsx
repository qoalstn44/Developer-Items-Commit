import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import backButton from '../img/x.png';
import CommentList from '../components/CommentList';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComment } from '../redux/modules/commentModule';
import Header from '../components/main/Header';
import { deletePost } from '../redux/modules/postModule';
import { authService } from '../firebase';

function Post() {
  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComment(postItemData.id));
  }, []);

  const globalPostData = useSelector((state) => state.postModule.posts);
  const globalComment = useSelector((state) => state.commentModule.comments);
  const onClickToggle = () => {
    setToggle(!toggle);
  };
  const param = useParams();
  const navigate = useNavigate();

  const postItemData = globalPostData.find((item) => item.id === param.id);

  const onClickBack = () => {
    navigate('/postlist');
  };

  const onClickDeletePost = () => {
    if (postItemData.userUID !== authService?.currentUser?.uid) {
      alert('로그인을 해주세요.');
      return;
    }
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(deletePost({ postId: param.id }));
      alert('삭제되었습니다.');
      navigate(`/postlist`);
    }
  };

  return (
    <div>
      <StPost>
        <Header />
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
        <div>{postItemData.body}</div>
        {postItemData.userUID === authService?.currentUser?.uid ? (
          <div>
            <button onClick={onClickDeletePost}>삭제</button>
          </div>
        ) : null}

        <button onClick={onClickToggle}>
          {toggle ? '댓글 닫기' : '댓글 열기'} ({globalComment.length}개)
        </button>
        {toggle ? <CommentList postId={postItemData.id} /> : null}
      </StPost>
    </div>
  );
}
export default Post;

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
