import React from "react";

export default function Filter() {
  return (
    <div className="container" style={{ width: "500px", margin: "20px auto" }}>
      <select
        className="form-select"
        aria-label="Default select example"
        style={{ height: "50px" }}
      >
        <option selected>Filter Blogs</option>
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
  );
}
