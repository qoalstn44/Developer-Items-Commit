import { useState } from 'react';
import Button from './Button';

function Comment({ id, body, creator }) {
  const [toggle, setToggle] = useState(false);

  const onClickToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div>{id}</div>
      <div>{body}</div>
      <div>{creator}</div>
      <Button onClick={onClickToggle}>{toggle ? '취소' : '수정'}</Button>
      <hr />
    </div>
  );
}

export default Comment;
