import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Comment from './Comment';

function CommentList() {
  const globalComment = useSelector((state) => state.commentModule.comments);

  console.log('globalComment:', globalComment);

  return (
    <StCommentContainer>
      {globalComment.map((comment) => (
        <Comment
          id={comment.id}
          body={comment.body}
          creator={comment.creator}
        />
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
