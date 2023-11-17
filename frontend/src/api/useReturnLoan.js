import Cookies from "js-cookie";

const BASE_URL = process.env.BASE_URL
const useReturnLoan = () => {
  const token = Cookies.get("token");
  const fetchReturnLoan = async (loan_id) => {
      const response = await fetch(`${BASE_URL}/loan/${loan_id}/return`, {
        method: 'PUT',
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

  return {fetchReturnLoan}
};

export default useReturnLoan;