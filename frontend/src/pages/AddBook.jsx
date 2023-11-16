import React from 'react'
import AddBookForm from '../components/AddBookForm'
import useCurrentYear from '../hooks/useCurrentYear'

const AddBook = () => {
  const {currentYear} = useCurrentYear()

  return (
    <>
      <AddBookForm currentYear={currentYear}/>
    </>
  )
}

export default AddBook