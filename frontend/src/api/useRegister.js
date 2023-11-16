import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const useRegister = () => {
  
  const fetchRegister = async (register_data) => {
    try {
      const response = await fetch('http://127.0.0.1:4000/api/register', {
        method: 'POST',
        body: JSON.stringify(register_data),
        headers: {
          "Content-Type": "application/json"
        }
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

  return {fetchRegister}
};

export default useRegister;