import React from "react";

export default function Filter({ handleFilterText }) {
  return (
    <div className="container" style={{ width: "500px", margin: "20px auto" }}>
      <select
        className="form-select"
        aria-label="Default select example"
        style={{ height: "50px" }}
        onChange={(e)=> handleFilterText(e.target.value)}
      >
        <option selected>Filter Blogs</option>
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
  );
}
