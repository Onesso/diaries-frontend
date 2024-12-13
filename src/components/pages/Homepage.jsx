import React from "react";
import Filter from "../Filter";
import BlogCardContainer from "../BlogCardContainer";

export default function Homepage({ blog, handleFilterText }) {
  return (
    <>
      {blog.length < 1 ? (
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            color: "red",
            fontWeight: "bold",
          }}
        >
          Blog not found
        </h4>
      ) : (
        <Filter handleFilterText={handleFilterText} />
      )}
      <BlogCardContainer blog={blog} />
    </>
  );
}
