import React from "react";
import Cookies from "js-cookie";
import { useQuery } from "react-query";

const baseUrl  = import.meta.env.VITE_BASE_URL;

const getBook = async () => {
  const token = Cookies.get("token");
  const url = window.location.pathname.split("/book/")
  const id = url[1]
  try {
    const response = await fetch(`${baseUrl}/books/${id}`, {
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
    console.log("data: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const useGetBook = () => {
  const {data, error, isLoading} = useQuery(['book'], getBook)
  return {book: data, error, isLoading}
}

export default useGetBook