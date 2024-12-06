import React from "react";
import "./Modal.css";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function Modal({ handleisOpen, deleteBlog }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteBlog();
    navigate("/");
    toast.success("Blog deleted succefully");
  };

  return (
    <div className="c-modal-overlay">
      <div className="c-modal">
        <button className="close-button" onClick={handleisOpen}>
          ×
        </button>
        <div className="c-modal-content">
          <h2>Delete Blog</h2>
          <p>Are you you want to Delete this note?</p>
          <span className="d-flex justify-content-center">
            <button className="btn btn-danger me-3" onClick={handleDelete}>
              Delete
            </button>
            <button className="btn btn-primary" onClick={handleisOpen}>
              Cancel
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
