import Cookies from "js-cookie";
const useReturnLoan = () => {
  const token = Cookies.get("token");
  const fetchReturnLoan = async (loan_id) => {
    try {
      const response = await fetch(`http://127.0.0.1:4000/api/loan/${loan_id}/return`, {
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
    } catch (error) {
      console.log(error)
    }
  };

  return {fetchReturnLoan}
};

export default useReturnLoan;