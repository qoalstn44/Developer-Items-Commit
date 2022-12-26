// 설명: toast-ui 기본
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Editor as ToastEditor } from '@toast-ui/react-editor';
import { useRef } from 'react';

// 설명: useState
import { useState } from 'react';
// 설명: modules
import { addPost, getPosts } from '../redux/modules/postModule';
// 설명: StHeader, StItemSlider 스타일링
import logo from '../img/logo.png';
import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const onClickPostList = () => {
  window.location.href = '/postlist';
};

const onRemove = () => {
  if (window.confirm('정말 삭제하시겠습니까?')) {
    // 삭제 로직
    alert('삭제되었습니다.');
    onClickPostList();
  } else {
    alert('삭제가 취소되었습니다.');
  }
};
const onCompletion = () => {};
// 설명: useState
function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const onChangeTitle = () => {
    const data = editorRef.current?.getInstance().getMarkdown();
    setTitle(data);
  };
  const onChangeBody = () => {
    const data = editorRef.current?.getInstance().getMarkdown();
    setBody(data);
  };
  const dispatch = useDispatch();
  const onClick = () => {
    if (window.confirm('정말 등록하시겠습니까?')) {
      dispatch(addPost({ title: title }));
      alert('등록되었습니다.');
      onClickPostList();
    } else {
      alert('등록이 취소되었습니다.');
    }
  };

  const editorRef = useRef();
  return (
    <div>
      <StHeader>
        <p>토글</p>
        <p>시간</p>
        <img src={logo} alt="logo" />
        <p>날씨</p>
        <p>로그인 회원가입</p>
      </StHeader>
      <StItemSlider>
        <p>컴퓨터</p>
        <p>키보드</p>
        <p>마우스</p>
        <p>모니터</p>
        <p>의자</p>
        <p>책상</p>
      </StItemSlider>
      <input></input>
      <Editor
        ref={editorRef}
        theme="dark"
        initialValue={title}
        previewStyle="vertical"
        height="800px"
        initialEditType="markdown"
        useCommandShortcut={false}
        hideModeSwitch={true}
        language="ko-KR"
        onChange={onChange}
      />
      <StPostFormButton>
        <button onClick={onRemove}>뒤로가기</button>
        <button onClick={onClick}>작성완료</button>
      </StPostFormButton>
    </div>
  );
}

export default PostForm;

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
const StItemSlider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
const StPostFormButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
