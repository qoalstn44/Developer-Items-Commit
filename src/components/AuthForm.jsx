import { authService } from '../firebase';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styled from 'styled-components';
import logo from '../img/logo.png';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import googleicon from '../img/googleicon.png';

const AuthForm = ({ setSignInModal, ssi }) => {
  const closeModal = () => {
    setSignInModal(false);
  };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        setSignInModal(false);
      } else {
        data = await signInWithEmailAndPassword(authService, email, password);
        setSignInModal(false);
      }
      console.log(data);
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
    }
    const data = await signInWithPopup(authService, provider);
    console.log(data);
    setSignInModal(false);
  };

  return (
    <Stmodal>
      <button
        onClick={closeModal}
        style={{ position: 'absolute', right: '10px', top: '10px' }}
      >
        X
      </button>
      <img src={logo} alt="logo" />
      <Sth1> {newAccount ? '회원가입 페이지' : '로그인 페이지'}</Sth1>

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
  z-index: 100;
`;
const Sth1 = styled.h1`
  margin-bottom: 50px;
  font-size: 50px;
  font-weight: bold;
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
`;

const Stgogleimg = styled.img`
  margin-bottom: 100px;
  cursor: pointer;
  :hover {
    filter: brightness(10) invert(1);
  }
`;

const StAccount = styled.span`
  font-size: 20px;
  cursor: pointer;
  :hover {
    color: gray;
  }
`;
