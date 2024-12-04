import React from "react";
import "./AddBlogPage.css";

export default function EditBlogPage() {
  return (
    <form>
      <h5>Add New Blog</h5>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter blogs's title"
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
        >
          <option selected>Pick a category</option>
          <option value="1">EDUCATION</option>
          <option value="2">BITCOIN</option>
          <option value="3">GAMING</option>
          <option value="4">DATA ENGINEERING</option>
          <option value="5">TYPESCRIPT</option>
          <option value="6">CYBERSECURITY</option>
          <option value="7">CROSS PLATFORM</option>
          <option value="8">FRONTEND</option>
          <option value="9">BACKEND</option>
          <option value="10">QUANTUM</option>
          <option value="11">MECHANICAL</option>
          <option value="12">IOT</option>
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
