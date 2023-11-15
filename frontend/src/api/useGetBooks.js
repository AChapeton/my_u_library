import React from "react";
import Cookies from "js-cookie";
import { useQuery } from "react-query";

const getBooks = async () => {
  const token = Cookies.get("token");

  try {
    const response = await fetch("http://127.0.0.1:4000/api/books", {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(response.message);
    }

    console.log("response: ", response);
    const data = await response.json()
    return data;
  } catch (error) {
    console.log(error);
  }
};

const useGetBooks = () => {
  const {data, error, isLoading} = useQuery(['books'], getBooks)
  return {books: data, error, isLoading}
}

export default useGetBooks

// const useGetBooks = () => {
//   const getBooks = async () => {
//     const token = Cookies.get('token')
//     console.log(token)

//     try {
//       const response = await fetch('http://127.0.0.1:4000/api/books', {
//         method: 'GET',
//         headers: {
//           'Authorization': token,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (!response.ok) {
//         throw new Error(response.message);
//       }

//       console.log('response: ', response)
//       return response
//     } catch (error) {
//       console.log(error)
//     }
//   };

//   return {getBooks}
// };

// export default useGetBooks;
