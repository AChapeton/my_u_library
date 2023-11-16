import React from 'react'
import useGetLoans from '../api/useGetLoans'
import BookCard from '../components/BookCard'
import NoDataFound from '../components/NoDataFound'

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

  if(loans.length === 0){
    return (
      <>
        <h2>Returns</h2>
        <NoDataFound message="You do not have books on loan"/>
      </>
    )
  }

  return (
    <>
      <div>
        <h2>Pending Returns</h2>
        <div className="row">
          {loans.map((loan) => {
            console.log('return: ', loan.isCheckedOut)
            if(loan.isCheckedOut){
              return (<BookCard
                key={loan._id}
                id={loan._id}
                title={loan.book.title}
                author={false}
                genre={false}
                isCheckOut={false}
                username={loan.user.username}
                isReturn={true}
                returnDate={loan.returnDate}
              />)
            }
          })}
        </div>
      </div>
      <div>
        <h2>Completed Returns</h2>
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
                returnDate={loan.returnDate}
              />)
            }
          })}
        </div>
      </div>
    </>
  )
}

export default CheckReturns