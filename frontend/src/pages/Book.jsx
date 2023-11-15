import React from 'react'
import useGetBook from '../api/useGetBook'
import BookDetailsCard from '../components/BookDetailsCard'
const Book = () => {
  const {book, error, isLoading} = useGetBook()



  if(isLoading){
    return <div>Loading...</div>
  }

  if(!isLoading){
    console.log('book: ', book)
  }

  if(error){
    return <div>Error: {error.message}</div>
  }

  return (
    <div className='d-flex justify-content-center'>
      <BookDetailsCard book={book}/>
    </div>
  )
}

export default Book
