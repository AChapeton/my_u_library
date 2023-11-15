import React from 'react'

// const useGetBooks = () => {
//   const getBooks = async () => {
//     try {
//       const response = await fetch('http://127.0.0.1:4000/api/books', {
//         method: 'GET',
//       });

//       if (!response.ok) {
//         throw new Error(response.message);
//       }

//       console.log('response: ', response)
//     } catch (error) {
//       console.log(error)
//     }
//   };

//   return {getBooks}
// };

// export default useGetBooks;

const useGetBooks = () => {
  const getBooks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:4000/api/books', {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(response.message);
      }

      console.log('response: ', response)
    } catch (error) {
      console.log(error)
    }
  };

  return {getBooks}
};

export default useGetBooks;
