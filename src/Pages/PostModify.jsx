// 설명: toast-ui 기본
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Editor as ToastEditor } from '@toast-ui/react-editor';
import { useRef } from 'react';

// 설명: useState
import { useEffect, useState } from 'react';
// 설명: modules
import { addPost } from '../redux/modules/postModule';

// 설명: StHeader, StItemSlider 스타일링
import logo from '../img/logo.png';
import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { authService, storageService } from '../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { getComment } from '../redux/modules/commentModule';

// 설명: useState

function PostForm() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComment(postItemData.id));
  }, []);

  const globalPostData = useSelector((state) => state.postModule.posts);
  const globalComment = useSelector((state) => state.commentModule.comments);
  const param = useParams();
  const navigate = useNavigate();

  const postItemData = globalPostData.find((item) => item.id === param.id);

  // 설명: 뒤로가기 버튼 클릭시 경고창 띄우기
  const onRemove = () => {
    if (
      window.confirm(
        '뒤로가면 지금까지 작성하신 글이 삭제됩니다! 정말 뒤로가시겠습니까?'
      )
    ) {
      // 삭제 로직
      alert('삭제되었습니다.');
      navigate(`/postlist`);
    } else {
      alert('뒤로가기가 취소되었습니다.');
    }
  };
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeBody = () => {
    const data = editorRef.current?.getInstance().getMarkdown();
    setBody(data);
  };

  const onClick = (event) => {
    if (title === '' || body === '') {
      event.preventDefault();
      alert('입력을 완료해 주세요');
    } else {
      event.preventDefault();
      dispatch(addPost({ title: title, body: body }));
      alert('수정되었습니다.');
      navigate(`/post/${param.id}`);
    }
  };

  const editorRef = useRef();
  return (
    <div>
      {/* <StHeader>
        <p>토글</p>
        <p>시간</p>
        <img src={logo} alt="logo" />
        <p>날씨</p>
        <p>로그인 회원가입</p>
      </StHeader> */}
      {/* <StItemSlider>
        <p>컴퓨터</p>
        <p>키보드</p>
        <p>마우스</p>
        <p>모니터</p>
        <p>의자</p>
        <p>책상</p>
      </StItemSlider> */}
      <StPostTitle>
        <input
          maxLength="80"
          type="text"
          placeholder="제목을 입력해주세요."
          required
          onChange={onChangeTitle}
        />
        <div>{title}</div>
      </StPostTitle>
      <Editor
        ref={editorRef}
        theme="dark"
        initialValue={body}
        previewStyle="vertical"
        height="650px"
        initialEditType="markdown"
        useCommandShortcut={false}
        hideModeSwitch={true}
        language="ko-KR"
        onChange={onChangeBody}
        hooks={{
          addImageBlobHook: async (blob, callback) => {
            const fileRef = ref(
              storageService,
              `${authService.currentUser.uid}/${uuidv4()}`
            );
            const response = await uploadBytes(fileRef, blob, 'data_url');
            callback(await getDownloadURL(response.ref));
          },
        }}
      />

      <StPostFormButton>
        <button onClick={onRemove}>뒤로가기</button>
        <button onClick={onClick}>수정완료</button>
      </StPostFormButton>
    </div>
  );
}

export default PostForm;

// const StHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 20px;
// `;
// const StItemSlider = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 20px;
// `;
const StPostFormButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > button {
    position: relative;
    display: inline-block;
    width: 50%;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: 7000;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 3px;
    overflow: hidden;
    background: #121212;
    color: #fff;
    z-index: 1;
    border: #121212;
  }
  & > button:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background: #e0e5ec;
    transition: all 0.3s ease;
  }
  & > button:hover {
    color: #000;
  }
  & > button:hover:after {
    left: 0;
    width: 100%;
  }
  & > button :active {
    top: 2px;
  }
`;
const StPostTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align: 'left';

  & > div {
    width: 50%;
    height: 52px;
    border: 3px solid #232428;
    background-color: #232428;
    color: white;
    text-align: left;
  }
  & > input:focus {
    outline: none;
  }
  & > input {
    width: 50%;
    height: 50px;
    border: 3px solid #232428;
    background-color: #232428;
    color: white;
  }
`;