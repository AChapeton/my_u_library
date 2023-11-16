import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGetBooks from "../api/useGetBooks";
import BookCard from "../components/BookCard";
import NoDataFound from "../components/NoDataFound";

const Dashboard = () => {
  const { books, error, isLoading } = useGetBooks();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    if(!isLoading){
      if(!searchTerm){
        setFilteredBooks(books)
      }else{
        const filtered = books.filter((book) => {
          return (
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.genre.toLowerCase().includes(searchTerm.toLowerCase())
          )
        });
        setFilteredBooks(filtered)
      }
    }

  }, [books, searchTerm, isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoading) {
    console.log("books: ", books);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if(books.length === 0){
    return (
      <>
        <h2>Returns</h2>
        <NoDataFound message="You do not have books in the library"/>
      </>
    )
  }

  return (
    <>
      <h1>Dashboard</h1>
      <input
          type="text"
          className="form-control mb-4"
          placeholder="Search by title, author, or genre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      <div className="row">
        {filteredBooks.map((book) => (
          <BookCard
            key={book._id}
            id={book._id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            isCheckOut={true}
            username={false}
            isReturn={false}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
