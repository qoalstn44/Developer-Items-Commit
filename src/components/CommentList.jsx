import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
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
    dispatch(addComment({ postId, comment }));
  };

  return (
    <StCommentContainer>
      <form onSubmit={onSubmitComment}>
        <input
          type="text"
          onChange={onChangeComment}
          value={comment}
          required
        />
        <button>완료</button>
      </form>
      {globalComment.map((comment) => (
        // 아래의 key는 id와 겹치지 않게 하기 위해 +1
        <div key={comment.id + 1}>
          <Comment
            id={comment.id}
            body={comment.body}
            creator={comment.creator}
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
