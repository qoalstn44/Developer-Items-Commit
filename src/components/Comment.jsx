import styled from 'styled-components';

function Comment({ id, comment, creator }) {
  return (
    <StCommentContainer>
      <div>{id}</div>
      <div>{comment}</div>
      <div>{creator}</div>
    </StCommentContainer>
  );
}
export default Comment;

const StCommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
