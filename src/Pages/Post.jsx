import {useParams} from "react-router-dom";
import styled from "styled-components";
import "../css/post.css";

function Post() {
  // 아래 부분은 firebase에서 데이터를 가져올 부분.
  const data = [
    {
      id: 1,
      title: "1111111",
    },
    {
      id: 2,
      title: "22222222",
    },
    {
      id: 3,
      title: "333333333",
    },
    {
      id: 4,
      title: "4444444444",
    },
  ];

  const param = useParams();

  const post = data.find((item) => item.id === parseInt(param.id));

  return (
    <div className="post-body">
      <StPost>{post.title}</StPost>
    </div>
  );
}
export default Post;

const StPost = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
