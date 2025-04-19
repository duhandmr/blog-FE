import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Lorem, ipsum dolor.",
      content: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.",
    },
    {
      id: 2,
      title: "Yeni Teknolojiler",
      content: "Yapay zeka, web geliştirme, React ve daha fazlası.",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs));
  }, [blogs]);

  return (
    <div>
      <Navbar />
      <section className="min-h-screen bg-gray-100 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Link
              to={`/blog-details/${blog.id}`}
              key={blog.id}
              className="block p-6 bg-white border rounded-lg shadow hover:bg-gray-100"
            >
              <h5 className="text-xl font-bold mb-2">{blog.title}</h5>
              <p>{blog.content.slice(0, 60)}...</p>
            </Link>
          ))}

          <div
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center cursor-pointer p-6 bg-white border-2 border-dashed border-gray-400 rounded-lg hover:bg-gray-100 transition-all duration-300"
          >
            <span className="text-4xl font-bold text-gray-500">+</span>
          </div>
        </div>
      </section>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setBlogs={setBlogs}
      />
    </div>
  );
};

export default Home;
