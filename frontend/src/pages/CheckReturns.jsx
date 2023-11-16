import React from 'react'
import useGetLoans from '../api/useGetLoans'
import BookCard from '../components/BookCard'

const CheckReturns = () => {
  const {loans, error, isLoading} = useGetLoans()

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if(!isLoading){
    console.log('loans: ', loans)
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1>Check Returns</h1>
      <div className="row">
        {loans.map((loan) => {
          console.log('return: ', loan.isCheckedOut)
          if(!loan.isCheckedOut){
            return (<BookCard
              key={loan._id}
              id={loan._id}
              title={loan.book.title}
              author={false}
              genre={false}
              isCheckOut={false}
              username={loan.user.username}
              isReturn={true}
            />)
          }
        })}
      </div>
    </>
  )
}

export default CheckReturns