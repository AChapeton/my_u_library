import React from "react";
import { Link } from "react-router-dom";
import useReturnLoan from "../api/useReturnLoan";

const BookCard = ({
  id,
  title,
  author,
  genre,
  isCheckOut,
  username,
  isReturn,
}) => {
  const { fetchReturnLoan } = useReturnLoan();
  const handleReturn = () => {
    fetchReturnLoan(id);
  };

  return (
    <div className="col-3 mb-4">
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
