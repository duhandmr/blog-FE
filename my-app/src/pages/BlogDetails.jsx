import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../components/NavBar";

const BlogDetails = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blogs.blogs);

  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p className="text-red-500">Blog bulunamadı</p>;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 p-6">
        <section className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{blog.title}</h1>
          <p className="text-sm font-normal">{blog.content}</p>
        </section>
      </main>
    </>
  );
};

export default BlogDetails;
