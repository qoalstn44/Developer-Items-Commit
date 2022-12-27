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
import { addPost } from '../redux/modules/postModule';

// 설명: StHeader, StItemSlider 스타일링
import logo from '../img/logo.png';
import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authService, storageService } from '../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

// 설명: useState
function PostForm() {
  const [category, setCategory] = useState('noting');
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      alert('입력을 완료해 주세요');
    } else if (category === 'noting') {
      alert('카테고리를 선택해주세요.');
    } else {
      event.preventDefault();
      dispatch(addPost({ title: title, body: body, category: category }));
      alert('등록되었습니다.');
      navigate(`/postlist`);
    }
  };

  const editorRef = useRef();
  console.log(category);

  const onChangeSelect = (event) => {
    setCategory(event.target.value);
  };
  return (
    <div>
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
      <StCategory>
        <StCategoryName>카테고리 : </StCategoryName>
        <select name="카테고리" onChange={onChangeSelect} required>
          <option value="noting">선택하세요</option>
          <option value="computer">컴퓨터</option>
          <option value="monitor">모니터</option>
          <option value="keyboard">키보드</option>
          <option value="mouse">마우스</option>
          <option value="headphone">헤드셋</option>
          <option value="mike">마이크</option>
        </select>
      </StCategory>
      <Editor
        ref={editorRef}
        theme="dark"
        initialValue={body}
        previewStyle="vertical"
        height="800px"
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
        <button onClick={onClick}>작성완료</button>
      </StPostFormButton>
    </div>
  );
}

export default PostForm;

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

const StCategory = styled.div`
  background-color: #232428;
  color: white;
  border-top: 0.01rem solid white;
  border-bottom: 0.01rem solid white;
  display: flex;
  justify-content: row;
  align-items: center;
  padding: 10px;
`;
const StCategoryName = styled.div`
  margin-right: 10px;
  font-size: 13px;
`;
