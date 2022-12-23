// 설명: toast-ui 기본
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';

// 설명: toast-ui color picker 플러그인

// 설명: StHeader, StItemSlider 스타일링
import logo from '../img/logo.png';
import React from 'react';
import styled, { keyframes } from 'styled-components';

function PostForm() {
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
      <Editor
        theme="dark"
        initialValue="글 작성 가자잇!"
        previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={false}
        hideModeSwitch={true}
        language="ko-KR"
      />
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
