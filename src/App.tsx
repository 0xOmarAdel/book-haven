import { Routes, Route } from "react-router-dom";

import MainLayout from "./pages/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Category from "./pages/Category";
import Author from "./pages/Author";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="/category/:id" element={<Category />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/author/:id" element={<Author />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
