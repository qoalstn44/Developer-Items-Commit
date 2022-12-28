import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import PostList from '../Pages/PostList';
import PostForm from '../Pages/PostForm';
import Post from '../Pages/Post';

import React from 'react';
import ProfilePage from './ProfilePage';

import Layout from '../components/mainpage/Layout';
import AuthTest from './AuthTest';
import React from 'react';
import ProfilePage from './ProfilePage';
import PostModify from '../Pages/PostModify';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/authform" element={<AuthTest />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/postform" element={<PostForm />} />
          <Route path="/:id" element={<PostList />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/postmodify/:id" element={<PostModify />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
