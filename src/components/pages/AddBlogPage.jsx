import React from "react";
import "./AddBlogPage.css";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddBlogPage({ addBlog }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const newBlog = {
    title: title,
    body: body,
    category: category,
  };

  const handlsubmit = (e) => {
    e.preventDefault();
    if (!title || !body || !category) {
      console.log("All fields are required!");
      return;
    }
    console.log("just picking before sending it to the post endpoint",newBlog)
    addBlog(newBlog);
    navigate("/");
  };

  return (
    <form onSubmit={handlsubmit}>
      <h5>Add New Blog</h5>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter blogs's title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Content
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
          Blog's category
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
        Add Blog
      </button>
    </form>
  );
}
