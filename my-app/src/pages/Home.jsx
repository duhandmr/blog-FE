import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBlog } from "../features/blog/blogSlice";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import Modal from "../components/Modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const blogs = useSelector((state) => state.blogs.blogs);

  useEffect(() => {
    const saved = localStorage.getItem("blogs");
    if (!saved) {
      localStorage.setItem("blogs", JSON.stringify(blogs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  const handleAddNewBlog = (newBlog) => {
    dispatch(addBlog(newBlog));
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 p-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              to={`/blog-details/${blog.id}`}
              className="block p-6 bg-white border rounded-lg shadow hover:bg-gray-100"
            >
              <h5 className="text-xl font-bold mb-2">{blog.title}</h5>
              <p>{blog.content.slice(0, 60)}</p>
            </Link>
          ))}

          <div
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center cursor-pointer p-6 bg-white border-2 border-dashed border-gray-400 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            <span className="text-4xl font-bold text-gray-500">+</span>
          </div>
        </section>
      </main>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        onSaveBlog={handleAddNewBlog}
      />
    </>
  );
};

export default Home;
