import { createSlice } from "@reduxjs/toolkit";

const loadBlogsFromLocalStorage = () => {
  const savedBlogs = localStorage.getItem("blogs");
  return savedBlogs ? JSON.parse(savedBlogs) : [];
};

const initialState = {
  blogs: loadBlogsFromLocalStorage().length
    ? loadBlogsFromLocalStorage()
    : [
        {
          id: 1,
          title: "Test Blog",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis asperiores illo velit non laudantium, omnis libero unde sint delectus consequuntur id quia ea impedit repudiandae quibusdam aut. Omnis obcaecati sequi deserunt neque harum nulla, nobis veritatis dicta aut voluptate consectetur eius molestiae officia labore.",
        },
      ],
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs.push(action.payload);
      localStorage.setItem("blogs", JSON.stringify(state.blogs));
    },
  },
});

export const { addBlog, removeBlog, updateBlog } = blogSlice.actions;

export default blogSlice.reducer;
