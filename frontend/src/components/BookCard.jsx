import React from "react";
import {format, parseISO} from 'date-fns'
import { Link, useNavigate } from "react-router-dom";
import useReturnLoan from "../api/useReturnLoan";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookCard = ({
  id,
  title,
  author,
  genre,
  isCheckOut,
  username,
  isReturn,
  returnDate
}) => {
  const navigate = useNavigate();
  const { fetchReturnLoan } = useReturnLoan();

  const handleReturn = async () => {
    try{
      await fetchReturnLoan(id);
      navigate("/?return_book=true");
    }catch(error){
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

  const formattedReturnDate = returnDate
  ? format(new Date(returnDate), "MM/dd/yy H:mm")
  : "N/A";


  return (
    <div className="col-3 mb-4">
      <ToastContainer />
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {author ? (
            <p className="card-text">
              <span className="font-weight-bold">Author:</span> {author}
            </p>
          ) : null}
          {username ? (
            <p className="card-text">
              <span className="font-weight-bold">Username:</span> {username}
            </p>
          ) : null}
          {genre ? (
            <p className="card-text">
              <span className="font-weight-bold">Genre:</span> {genre}
            </p>
          ) : null}
          {returnDate ? (
            <p className="card-text">
              <span className="font-weight-bold">Return Date:</span> {formattedReturnDate}
            </p>
          ) : null}

          {isCheckOut ? (
            <Link to={`/book/${id}`} className="btn btn-primary">
              Check book
            </Link>
          ) : isReturn ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleReturn}
            >
              Check return
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
