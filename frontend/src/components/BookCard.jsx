import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ id, title, author, genre }) => {
  return (
    <div className="col-3 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <span className="font-weight-bold">Author:</span> {author}
          </p>
          <p className="card-text">
            <span className="font-weight-bold">Genre:</span> {genre}
          </p>
          <Link to={`/book/${id}`} className="btn btn-primary">
            Check book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
