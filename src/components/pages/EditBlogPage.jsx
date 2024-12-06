import React, { useEffect, useState } from "react";
import "./AddBlogPage.css";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditBlogPage({ updateBlog }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const { slug } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/blog/${slug}/`)
      .then((res) => {
        console.log(res.data);
        setTitle(res.data.title);
        setBody(res.data.body);
        setCategory(res.data.category);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [slug]);

  const updateBlogObject = {
    title: title,
    body: body,
    category: category,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("updated blog: ", { updateBlogObject });
    if (!title || !body || !category) {
      console.log("All fields are required!");
      return;
    }
    navigate(`/blogs/${slug}`);
    toast.success("Blog updated");
    updateBlog(updateBlogObject, slug);
  };

  return (
    <form
      onSubmit={handleSubmit}
      action={`http://127.0.0.1:8000/blog/${slug}/`}
    >
      <h5>Update Blog</h5>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter blogs's title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Body
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={4}
          placeholder="Enter blog's content"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          category
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          style={{ height: "40px" }}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Pick a category</option>
          <option value="EDUCATION">EDUCATION</option>
          <option value="BITCOIN">BITCOIN</option>
          <option value="GAMING">GAMING</option>
          <option value="DATA ENGINEERING">DATA ENGINEERING</option>
          <option value="TYPESCRIPT">TYPESCRIPT</option>
          <option value="CYBERSECURITY">CYBERSECURITY</option>
          <option value="CROSS PLATFORM">CROSS PLATFORM</option>
          <option value="FRONTEND">FRONTEND</option>
          <option value="BACKEND">BACKEND</option>
          <option value="QUANTUM">QUANTUM</option>
          <option value="MECHANICAL">MECHANICAL</option>
          <option value="IOT">IOT</option>
        </select>
      </div>

      <button
        className="btn btn-primary d-flex justify-content-center"
        style={{ width: "100%" }}
      >
        Update Blog
      </button>
    </form>
  );
}
