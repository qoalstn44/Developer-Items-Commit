import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment, updateComment } from '../redux/modules/commentModule';
import Button from './Button';

function Comment({ postId, commentId, body, creator }) {
  const [toggle, setToggle] = useState(false);
  const [newBody, setNewBody] = useState(body);
  const dispatch = useDispatch();
  const onClickToggle = () => {
    setToggle(!toggle);
  };

  const onChangeNewBody = (event) => {
    setNewBody(event.target.value);
  };

  const updateSubmitComment = (e) => {
    e.preventDefault();
    dispatch(updateComment({ postId, commentId, newBody }));
    setToggle(!toggle);
  };

  const deleteClickComment = (event) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(deleteComment({ postId, commentId }));
      alert('삭제되었습니다.');
    }
  };
  return (
    <div>
      <div>{creator}</div>
      {!toggle ? (
        <div>{body}</div>
      ) : (
        <form onSubmit={updateSubmitComment}>
          <input
            type="text"
            onChange={onChangeNewBody}
            value={newBody}
            required
          />
          <Button>수정완료</Button>
        </form>
      )}
      <Button onClick={onClickToggle}>{toggle ? '취소' : '수정'}</Button>
      <Button onClick={deleteClickComment}>삭제</Button>
      <hr />
    </div>
  );
}

export default Comment;
