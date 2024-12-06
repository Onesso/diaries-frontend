import React from "react";
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import "./BlogDetailsPage.css";
import { Link, useParams } from "react-router";
import moment from "moment";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../Modal.jsx";

export default function BlogDetails({ deleteBlog }) {
  const [blog, setBlog] = useState({});
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { slug } = useParams();

  const handleisOpen = () => {
    setIsOpenModal(!isOpenModal);
  };
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/blog/${slug}`)
      .then((res) => {
        console.log(res.data);
        setBlog(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  // formating time
  const datetime = blog.updated;
  const updatedDate = moment(datetime).format("MMMM Do YYYY, h:mm:ss A");

  const datetime2 = blog.created;
  const createDate = moment(datetime2).format("MMMM Do YYYY, h:mm:ss A");

  return (
    <>
      <div className="note-container">
        <h3 className="title">{blog.title}</h3>
        <span className="d-flex justify-content-center">
          <p className="note-date font-12 text-muted me-5">
            {" "}
            created: {createDate}
          </p>
          <p className="note-date font-12 text-muted me-5">
            last updated: {updatedDate}
          </p>
        </span>
        <span className="button-group">
          <Link to={`/edit-blog/${slug}`}>
            <button className="btn btn-primary">
              <FiEdit />
              <span>Edit</span>
            </button>
          </Link>

          <button className="btn btn-danger" onClick={handleisOpen}>
            <BiSolidTrashAlt />
            <span>Delete</span>
          </button>
        </span>
        <p className="description">{blog.body}</p>
      </div>

      {isOpenModal && (
        <Modal handleisOpen={handleisOpen} deleteBlog={()=>deleteBlog(slug)} />
      )}
    </>
  );
}
