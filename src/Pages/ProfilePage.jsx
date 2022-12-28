import { updateProfile } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { authService } from '../firebase';
import { storageService } from '../firebase';
import { ref, getDownloadURL, uploadString } from 'firebase/storage';
import nullImage from '../img/null-image.png';

function ProfilePage() {
  const [displayName, setdisplayName] = useState(
    authService.currentUser.displayName
  );
  const [name, setName] = useState(authService.currentUser.displayName);
  const [newProfileImg, setNewProfileImg] = useState(
    authService.currentUser.photoURL
  );
  const [error, setError] = useState('');

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'displayName') {
      setdisplayName(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateProfile(authService, displayName).then(() => {
        updateProfile(authService.currentUser, {
          displayName: displayName,
        });
      });
      setName(displayName);
      setdisplayName('');
    } catch (error) {
      setError(error.massge);
    }
  };

  const handleSumit = async (event) => {
    event.preventDefault();
    const newCurrentUser = authService.currentUser;
    if (newProfileImg === authService.currentUser.photoURL) {
      alert('사진을 바꿔주세요!');
      return;
    } else if (!newProfileImg) {
      alert('사진이 없습니다!');
      return;
    }
    if (newProfileImg !== newCurrentUser.photoURL) {
      const imgRef = ref(
        storageService,
        `userProfileImgs/${authService.currentUser.uid}`
      );
      const response = await uploadString(imgRef, newProfileImg, 'data_url');
      const attachmentUrl = await getDownloadURL(response.ref, imgRef);
      await updateProfile(newCurrentUser, {
        ...newCurrentUser,
        photoURL: attachmentUrl,
      });
    }
    alert('수정 완료!');
  };

  const fileInput = useRef();

  const onFileChange = (e) => {
    const {
      target: { files },
    } = e;
    const theFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setNewProfileImg(result);
      console.log(result);
    };
  };
  return (
    <StProfile>
      <StDiv>
        <StProfileName>프로필페이지</StProfileName>
        {authService.currentUser.photoURL ? (
          <StImg src={newProfileImg} alt="photoURL" />
        ) : (
          <StImg src={nullImage} alt="photoURL" />
        )}
        <Stuserprofile> ID : {authService.currentUser?.email}</Stuserprofile>
        <Stuserprofile>
          닉네임 : {name}
          <div></div>
        </Stuserprofile>
        <StForm onSubmit={onSubmit}>
          <input
            name="displayName"
            type="displayName"
            value={displayName}
            required
            placeholder="변경할 닉네임"
            onChange={onChange}
          ></input>
          <button type="submit">닉네임변경</button>
        </StForm>
        <input
          type="file"
          onChange={onFileChange}
          ref={fileInput}
          accept="image/*"
        />
        <button onClick={handleSumit}>사진변경</button>
        {error}
      </StDiv>
    </StProfile>
  );
}

export default ProfilePage;

const StProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  max-width: 800px;
  margin: auto;
  margin-top: 20px;
  height: 800px;
`;

const StProfileName = styled.h2`
  top: 250px;
`;
const Stuserprofile = styled.h3`
  margin: 10px;
`;

const StImg = styled.img`
  width: 300px;
`;
const StDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`;
const StForm = styled.form`
  margin: 10px;
`;
