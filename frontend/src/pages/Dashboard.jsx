import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import useGetBooks from '../api/useGetBooks';
import BookCard from '../components/BookCard';

const Dashboard = () => {
  const {books, error, isLoading} = useGetBooks()

  if(isLoading){
    return <div>Loading...</div>
  }

  if(!isLoading){
    console.log('books: ', books)
  }

  if(error){
    return <div>Error: {error.message}</div>
  }

  

  return (
    <>
      <h1>Dashboard</h1>
      <div className='row'>
        {
          books.map((book => (
            <BookCard key={book._id} title={book.title} author={book.author}/>
          )))
        }
      </div>
    </>
  )
}

export default Dashboard