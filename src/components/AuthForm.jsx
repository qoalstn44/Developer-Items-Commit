import { authService } from '../firebase';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styled from 'styled-components';
import logo from '../img/logo.png';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import googleicon from '../img/googleicon.png';

const AuthForm = ({ setSignInModal }) => {
  const closeModal = () => {
    setSignInModal(false);
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [newAccount, setNewAccount] = useState();
  const [error, setError] = useState('');
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'displayName') {
      setDisplayName(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        await createUserWithEmailAndPassword(
          authService,
          email,
          password,
          displayName
        ).then(() => {
          updateProfile(authService.currentUser, {
            displayName: displayName,
          });
        });

        setSignInModal(false);
        alert('회원가입 완료됐습니다.');
      } else {
        await signInWithEmailAndPassword(authService, email, password);

        setSignInModal(false);
        alert('로그인 완료됐습니다.');
      }
    } catch (error) {
      setError(error.message);
    }
    setEmail('');
    setPassword('');
  };
  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  };

  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === 'google') {
      provider = new GoogleAuthProvider();
      provider.addScope('email');
    }
    await signInWithPopup(authService, provider);

    setSignInModal(false);
    alert('로그인 완료됐습니다.');
  };

  return (
    <Stmodal>
      <Stmodalclose onClick={closeModal}>✖</Stmodalclose>
      <img src={logo} alt="logo" />
      <Sth1> {newAccount ? '회원가입 페이지' : '로그인 페이지'}</Sth1>

      <form onSubmit={onSubmit}>
        {newAccount ? (
          <Stinput
            name="displayName"
            type="displayName"
            placeholder="닉네임"
            required
            value={displayName}
            onChange={onChange}
          />
        ) : null}

        <Stinput
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />

        <Stinput
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />

        <div>
          <StLogin type="submit" value={newAccount ? 'Sign In' : 'Log In'} />
          {error}
        </div>
        <Stgogleimg
          src={googleicon}
          alt="googleicon"
          onClick={onSocialClick}
          name="google"
        />
      </form>
      <StAccount onClick={toggleAccount}>
        {newAccount ? '로그인 하시겠습니까?' : '회원가입 하시겠습니까?'}
      </StAccount>
    </Stmodal>
  );
};
export default AuthForm;

const Stmodal = styled.div`
  max-width: 600px;
  height: 750px;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
  z-index: 100;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 500px;
  }
`;
const Sth1 = styled.h1`
  margin-bottom: 50px;
  font-size: 50px;
  font-weight: bold;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 20px;
  }
`;

const Stinput = styled.input`
  margin: 0.5px;
  width: 550px;
  height: 20px;
  text-align: center;
  font-size: 25px;
  border: 0.1px solid #ced4da;
  :focus {
    border-color: gray;
    outline: none;
  }
  @media (max-width: 768px) {
    width: 200px;
  }
`;

const StLogin = styled.input`
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 40px;
  cursor: pointer;
  border: none;
  background-color: white;
  :hover {
    color: gray;
  }
  @media (max-width: 768px) {
    margin-bottom: 5px;
    margin-top: 5px;
    font-size: 20px;
  }
`;

const Stgogleimg = styled.img`
  margin-bottom: 100px;
  cursor: pointer;
  max-width: 40px;
  :hover {
    filter: brightness(10) invert(1);
  }
  @media (max-width: 768px) {
    margin-bottom: 30px;
    max-width: 15px;
  }
`;

const StAccount = styled.span`
  font-size: 20px;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;

const Stmodalclose = styled.span`
  position: absolute;
  right: 10px;
  top: 10px;

  font-size: 30px;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;
