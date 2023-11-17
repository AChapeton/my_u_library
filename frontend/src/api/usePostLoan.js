import Cookies from "js-cookie";
import useSessionStore from "../store/useSessionStore";
const BASE_URL = process.env.BASE_URL

const usePostLoan = () => {
  const token = Cookies.get("token");
  const {account} = useSessionStore()
  const user_id = account.id
  const url = window.location.pathname.split("/book/")
  const bookd_id = url[1]
  const fetchPostLoan = async (loan_data) => {
      const response = await fetch(`${BASE_URL}/loan/${user_id}/request/${bookd_id}`, {
        method: 'POST',
        body: JSON.stringify(loan_data),
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      console.log('response: ', response)
      const data = await response.json();
      console.log('data: ', data)
      return data
  };

  return {fetchPostLoan}
};

export default usePostLoan;