import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { authService } from '../firebase';
import {
  deleteComment,
  getComment,
  updateComment,
} from '../redux/modules/commentModule';
import Button from './Button';

function Comment({
  postId,
  commentId,
  body,
  userUID,
  displayName,
  commentDate,
}) {
  const [toggle, setToggle] = useState(false);
  const [newBody, setNewBody] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComment(postId));
  }, [toggle]);
  const onClickToggle = () => {
    if (userUID !== authService?.currentUser?.uid) {
      alert('로그인을 해주세요.');
      return;
    }
    setToggle(!toggle);
  };

  const onChangeNewBody = (event) => {
    setNewBody(event.target.value);
  };

  const updateSubmitComment = (event) => {
    event.preventDefault();
    dispatch(updateComment({ postId, commentId, newBody }));
    setToggle(!toggle);
  };

  const deleteClickComment = () => {
    if (userUID !== authService?.currentUser?.uid) {
      alert('로그인을 해주세요.');
      return;
    }
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(deleteComment({ postId, commentId }));
      alert('삭제되었습니다.');
    }
  };
  return (
    <div>
      <StCommentWrap>
        <StCreator>{displayName ?? '익명사용자'}</StCreator>
        {!toggle ? (
          <StBody>{body}</StBody>
        ) : (
          <form onSubmit={updateSubmitComment}>
            <StForm>
              <StInput
                type="text"
                onChange={onChangeNewBody}
                value={newBody}
                placeholder="수정할 내용"
                maxLength={22}
                required
              />
              <Button>수정완료</Button>
            </StForm>
          </form>
        )}
        {userUID === authService?.currentUser?.uid ? (
          <div>
            <Button onClick={onClickToggle}>{toggle ? '취소' : '수정'}</Button>
            <Button onClick={deleteClickComment}>삭제</Button>
          </div>
        ) : null}
        <StCommentDate>
          {new Date(commentDate + 9 * 60 * 60 * 1000).toLocaleString('ko-KR', {
            timeZone: 'UTC',
          })}
        </StCommentDate>
      </StCommentWrap>
      <hr />
    </div>
  );
}

export default Comment;

const StCommentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
`;
const StCreator = styled.div`
  background-color: #a3a3a3;
  color: white;
  width: 200px;
  text-align: center;
  margin: 5px;
  padding: 3px;
`;
const StBody = styled.div`
  margin: 10px;
`;
const StForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StInput = styled.input`
  width: 150px;
`;
const StCommentDate = styled.div`
  font-size: 12px;
`;
