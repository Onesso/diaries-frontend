import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  data,
  Route,
  RouterProvider,
} from "react-router";
import Homepage from "./components/pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import AddBlogPage from "./components/pages/AddBlogPage";
import BlogDetailsPage from "./components/pages/BlogDetailsPage";
import EditBlogPage from "./components/pages/EditBlogPage";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [blog, setBlog] = useState([]);
  const [filterText, setFilterText] = useState("")

  const handleFilterText = (val) => {

  }

  //geting all the blogs
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/blog/")
      .then((res) => {
        console.log(res.data);
        setBlog(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  //post new blog function
  const addBlog = (data) => {
    axios
      .post("http://127.0.0.1:8000/blog/", data)
      .then((res) => {
        setBlog([...blog, data]);
        toast.success("Blog added");
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //update blog funtion
  const updateBlog = (data, slug) => {
    axios
      .put(`http://127.0.0.1:8000/blog/${slug}`, data)
      .then((res) => {
        console.log(res.data);
        toast.success("Blog updated successfully ");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //delete blog
  const deleteBlog = (slug) => {
    axios.delete(`http://127.0.0.1:8000/blog/${slug}`).catch((error) => {
      console.log(error.message);
    });
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage blog={blog} />} />
        <Route path="/add-blog" element={<AddBlogPage addBlog={addBlog} />} />
        <Route
          path="/blogs/:slug"
          element={<BlogDetailsPage deleteBlog={deleteBlog} />}
        />
        <Route
          path="/edit-blog/:slug"
          element={<EditBlogPage updateBlog={updateBlog} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
