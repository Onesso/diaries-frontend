import React from "react";
import Filter from "../Filter";
import BlogCardContainer from "../BlogCardContainer";


export default function Homepage({blog}) {
  return (
    <>
      <Filter />
      <BlogCardContainer blog={blog}/>
    </>
  );
}
