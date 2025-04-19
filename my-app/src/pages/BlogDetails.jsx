import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const foundBlog = storedBlogs.find((b) => b.id === Number(id));
    setBlog(foundBlog);
  }, [id]);

  if (!blog) return <div className="p-6">Blog bulunamadı.</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <p className="mt-4">{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
