import { authService } from '../firebase';

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styled from 'styled-components';
import logo from '../img/logo.png';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { GithubAuthProvider } from 'firebase/auth';

const AuthTest = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
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
    } else if (name === 'github') {
      provider = new GithubAuthProvider();
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data);
  };

  return (
    <Stmodal>
      <img src={logo} alt="logo" />
      <Sth1> {newAccount ? '회원가입 페이지' : '로그인 페이지'}</Sth1>
      <span onClick={toggleAccount}>
        {newAccount ? '로그인 페이지' : '회원가입 페이지'}
      </span>
      <form onSubmit={onSubmit}>
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

        <Stinput2
          type="submit"
          value={newAccount ? '회원가입 하기' : '로그인 하기'}
        />

        {error}
      </form>

      <div>
        <button onClick={onSocialClick} name="google">
          구글로그인
        </button>
        <button onClick={onSocialClick} name="github">
          깃허브로그
        </button>
      </div>
    </Stmodal>
  );
};
export default AuthTest;

const Stmodal = styled.div`
  width: 600px;
  height: 850px;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
`;
const Sth1 = styled.h1`
  margin-bottom: 50px;
  font-size: 50px;
  font-weight: bold;
`;

const Stinput = styled.input`
  width: 500px;
  height: 20px;
  margin: 5px;
  text-align: center;
  font-size: 25px;
`;

const Stinput2 = styled.input`
  margin: 0px;
  font-size: 20px;
  cursor: pointer;
`;
