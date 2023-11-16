import React from "react";
import Cookies from "js-cookie";
import { useQuery } from "react-query";

const getLoans = async () => {
  const token = Cookies.get("token");

  try {
    const response = await fetch("http://127.0.0.1:4000/api/loan", {
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

const useGetLoans = () => {
  const {data, error, isLoading} = useQuery(['loans'], getLoans)
  return {loans: data, error, isLoading}
}

export default useGetLoans