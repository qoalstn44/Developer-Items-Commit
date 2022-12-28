import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import PostList from '../Pages/PostList';
import PostForm from '../Pages/PostForm';
import Post from '../Pages/Post';
import React from 'react';
import ProfilePage from './ProfilePage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
          <Route path="/authform" element={<AuthTest />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/postform" element={<PostForm />} />
          <Route path="/:id" element={<PostList />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/postmodify/:id" element={<PostModify />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
