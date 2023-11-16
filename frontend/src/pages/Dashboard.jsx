import React, { useEffect, useMemo, useState } from "react";
import useGetBooks from "../api/useGetBooks";
import BookCard from "../components/BookCard";
import NoDataFound from "../components/NoDataFound";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const { books, error, isLoading } = useGetBooks();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [newLoan, setNewLoan] = useState(false);

  const location = useLocation()
  const navigate = useNavigate();
  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]) 

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

  useEffect(() => {
    if (newLoan) {
      toast.success("The book has been successfully lent.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setNewLoan(false);
      queryParams.delete('new_loan');
      navigate(`?${queryParams.toString()}`, { replace: true });
    }
  }, [newLoan, queryParams, navigate]);

  useEffect(() => {
    if (queryParams.get('new_loan') === 'true') {
      setNewLoan(true);
    }
  }, [queryParams]);

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
      <ToastContainer/>
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
