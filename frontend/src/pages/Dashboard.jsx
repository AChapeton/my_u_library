import React, { useEffect, useState } from 'react'
import {useQuery} from '@tanstack/react-query'
import useGetBooks from '../api/useGetBooks';

const Dashboard = () => {
  const {getBooks} = useGetBooks()
  const [books, setBooks] = useState([])

  useEffect(()=>{
    const fetchBooks = async ()=> {
      try{
        const response =  await getBooks()
        const bookData = await response.json()
        setBooks(bookData)
      }catch(error){
        console.errro('fetch error: ', error)
      }
    }

    fetchBooks()
  }, [getBooks])

  console.log('books: ', books)

  return (
    <>
      <h1>Dashboard</h1>
      {/* <div>{data}</div> */}
    </>
  )
}

export default Dashboard