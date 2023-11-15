import React, { useEffect, useState } from 'react'
import useGetBooks from '../api/useGetBooks';

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
      {/* <div>{data}</div> */}
    </>
  )
}

export default Dashboard