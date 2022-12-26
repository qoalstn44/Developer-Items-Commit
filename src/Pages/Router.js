import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import PostList from '../Pages/PostList';
import PostForm from '../Pages/PostForm';
import Post from '../Pages/Post';
import Layout from '../components/main/Layout';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/postform" element={<PostForm />} />
          <Route path="/postlist" element={<PostList />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRouter;
