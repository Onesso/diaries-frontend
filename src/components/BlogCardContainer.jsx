import React from "react";
import BlogCard from "./BlogCard";


export default function BlogCardContainer({blog}) {

  return (
    <div className="container">
      <div className="note-has-grid row">
        {blog.map((blog) => (
          <BlogCard key={blog.id} blog={blog}/>
        ))}
      </div>
    </div>
  );
}
