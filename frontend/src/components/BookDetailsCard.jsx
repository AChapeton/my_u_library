import React from "react";
import usePostLoan from "../api/usePostLoan";

const BookDetailsCard = ({ book }) => {
  const {fetchPostLoan} = usePostLoan()

  const handleLoan = () => {
    fetchPostLoan()
  }

  return (
    <div className="col-6 mt-5">
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
          <button type="button" className="btn btn-primary w-100" onClick={handleLoan}>
            Request book
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsCard;
