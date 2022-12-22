import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../Pages/MainPage";
import PostList from "../Pages/PostList";
import PostForm from "../Pages/PostForm";
import Post from "../Pages/Post";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/postform" element={<PostForm />} />
        <Route path="/postlist" element={<PostList />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
