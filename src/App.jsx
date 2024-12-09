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
  const [filterText, setFilterText] = useState("");

  // const handleFilterText = (val) => {
  //   setFilterText(val);
  // };

  //filter text
  // const filteredBlog =
  //   filterText === "EDUCATION"
  //     ? blog.filter((blog) => blog.category == "EDUCATION")
  //     : blog;

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
  // const addBlog = (data) => {
  //   console.log("what i have received about to post", data);
  //   axios
  //     .post("http://127.0.0.1:8000/blog/", data)
  //     .then((res) => {

  //       toast.success("Blog added");
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };

  const addBlog = async (data) => {
    try {
      console.log("Data received, about to post:", data);
      const res = await axios.post("http://127.0.0.1:8000/blog/", data);
      toast.success("Blog added successfully!");
      console.log("Response data:", res.data);
    } catch (error) {
      toast.error("Failed to add blog. Please try again.");
      if (error.response) {
        console.error("Error response:", error.response.data);
      } else {
        console.error("Error message:", error.message);
      }
    }
  };

  //update blog funtion
  const updateBlog = (data, slug) => {
    axios
      .put(`http://127.0.0.1:8000/blog/${slug}/`, data)
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
    axios.delete(`http://127.0.0.1:8000/blog/${slug}/`).catch((error) => {
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
