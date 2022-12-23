function Comment({ id, body, creator }) {
  return (
    <div>
      <div>{body}</div>
      <div>{creator}</div>
    </div>
  );
}

export default Comment;
