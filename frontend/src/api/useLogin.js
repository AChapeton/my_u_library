import { useNavigate } from "react-router-dom";
import useSessionStore from "../store/useSessionStore";
import Cookies from "js-cookie";
const baseUrl  = import.meta.env.VITE_BASE_URL;

const useLogin = () => {
  const navigate = useNavigate()
  const {setAccountData} = useSessionStore()
  console.log('base url: ', baseUrl )
  console.log('env: ', import.meta.env.env.VITE_BASE_URL)
  
  const fetchLogin = async (login_data) => {
      const response = await fetch(`${baseUrl }/login`, {
        method: 'POST',
        body: JSON.stringify(login_data),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      let data = await response.json();
      const {token, id, username, email, role} = data
      Cookies.set('token', token, {expires: 1})
      setAccountData({
        id: id,
        username: username,
        email: email,
        role: role
      })
      navigate("/")
      return data
  };

  return {fetchLogin}
};

export default useLogin;