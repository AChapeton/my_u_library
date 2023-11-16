import React from 'react'
import useGetUserLoans from '../api/useGetUsersLoans'
import BookCard from '../components/BookCard'

const Requests = () => {
  const { userLoans, error, isLoading } = useGetUserLoans();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isLoading) {
    console.log("userLoans: ", userLoans);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1>User Loans</h1>
      <div className="row">
        {userLoans.map((loan) => (
          <BookCard
            key={loan.book._id}
            id={loan.book_id}
            title={loan.book.title}
            author={loan.book.author}
            genre={loan.book.genre}
            isCheckOut={false}
          />
        ))}
      </div>
    </>
  )
}

export default Requests