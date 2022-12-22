import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "../Pages/MainPage";
import PostList from "../Pages/PostList";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/postlist" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
