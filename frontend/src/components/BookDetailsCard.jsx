import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import usePostLoan from "../api/usePostLoan";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetailsCard = ({ book }) => {
  const navigate = useNavigate();
  const { fetchPostLoan } = usePostLoan();

  const handleLoan = async () => {
    try {
      await fetchPostLoan();
      navigate("/?new_loan=true");
    } catch (error) {
      toast.error("Something went wrong. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="col-6 mt-5">
      <ToastContainer />
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-center">{book.title}</h3>
          <p className="card-text">
            <span className="font-weight-bold">Author:</span> {book.author}
          </p>
          <p className="card-text">
            <span className="font-weight-bold">Genre:</span> {book.genre}
          </p>
          <p className="card-text">
            <span className="font-weight-bold">Published Year:</span>{" "}
            {book.publishedYear}
          </p>
          <p className="card-text">
            <span className="font-weight-bold">Stock:</span> {book.stock}
          </p>
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={handleLoan}
          >
            Request book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsCard;
