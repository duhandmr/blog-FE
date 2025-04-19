import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
