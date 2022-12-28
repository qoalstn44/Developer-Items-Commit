import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { authService } from '../firebase';
import { addComment } from '../redux/modules/commentModule';

import Comment from './Comment';

function CommentList({ postId }) {
  const [comment, setComment] = useState('');
  const globalComment = useSelector((state) => state.commentModule.comments);
  const dispatch = useDispatch();

  const onChangeComment = (event) => {
    setComment(event.target.value);
  };
  const onSubmitComment = (event) => {
    event.preventDefault();
    if (authService.currentUser === null) {
      alert('로그인을 해주세요.');
      return;
    }
    dispatch(addComment({ postId, comment }));
    setComment('');
  };
  return (
    <StCommentContainer>
      <StForm onSubmit={onSubmitComment}>
        <input
          type="text"
          placeholder="댓글을 작성해보세요."
          onChange={onChangeComment}
          value={comment}
          maxLength={22}
          required
        />
        <button>완료</button>
      </StForm>
      {globalComment.map((comment) => (
        // 아래의 key는 id와 겹치지 않게 하기 위해 +1
        <div key={comment.id + 1}>
          <Comment
            postId={postId}
            commentId={comment.id}
            displayName={comment.displayName}
            userUID={comment.userUID}
            body={comment.body}
            commentDate={comment.createAt}
          />
        </div>
      ))}
    </StCommentContainer>
  );
}
export default CommentList;

const StCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StForm = styled.form`
  background-color: aqua;
  margin: 20px;
`;
