import { updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import styled from 'styled-components';
import { authService } from '../firebase';

function ProfilePage() {
  const [displayName, setdisplayName] = useState('');
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
    } catch (error) {
      setError(error.massge);
    }
  };

  return (
    <StProfile>
      <StProfileName>프로필페이지</StProfileName>
      <img src={authService.currentUser?.photoURL} />
      <Stuserprofile> ID : {authService.currentUser?.email}</Stuserprofile>
      <Stuserprofile>
        닉네임 : {authService.currentUser?.displayName}
      </Stuserprofile>
      <form onSubmit={onSubmit}>
        <input
          name="displayName"
          type="displayName"
          value={displayName}
          required
          onChange={onChange}
        ></input>
        <button type="submit">변경하기</button>
      </form>
      {error}
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
  position: absolute;
  top: 200px;
`;
const Stuserprofile = styled.h3`
  margin: auto;
`;
