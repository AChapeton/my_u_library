import React from "react";
import Cookies from "js-cookie";
import { useQuery } from "react-query";
import useSessionStore from "../store/useSessionStore";

const getUserLoans = async (user_id) => {
  const token = Cookies.get("token");
  try {
    const response = await fetch(`http://127.0.0.1:4000/api/loan/${user_id}/loans`, {
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
    const loans = data.loans
    return loans;
  } catch (error) {
    console.log(error);
  }
};

const useGetUserLoans = () => {
  const {account} = useSessionStore()
  const user_id = account.id
  console.log('userId: ', user_id)
  const {data, error, isLoading} = useQuery(['userLoans'], () => getUserLoans(user_id))
  return {userLoans: data, error, isLoading}
}

export default useGetUserLoans