import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const useLogout = () => {
  const navigate = useNavigate()
  
  const fetchLogout = async () => {
    try {
      const response = await fetch('http://127.0.0.1:4000/api/logout', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      Cookies.remove('token')
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  };

  return {fetchLogout}
};

export default useLogout;