import { useNavigate } from "react-router-dom";
import useSessionStore from "../store/useSessionStore";
import Cookies from "js-cookie";
const baseUrl  = import.meta.env.VITE_BASE_URL;

const useLogout = () => {
  const navigate = useNavigate()
  const {setLogout} = useSessionStore()
  
  const fetchLogout = async () => {
    try {
      const response = await fetch(`${baseUrl}/logout`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      Cookies.remove('token')
      setLogout()
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  };

  return {fetchLogout}
};

export default useLogout;