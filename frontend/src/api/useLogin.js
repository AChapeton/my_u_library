import { useNavigate } from "react-router-dom";
import useSessionStore from "../store/useSessionStore";
import Cookies from "js-cookie";

const useLogin = () => {
  const navigate = useNavigate()
  const {setAccountData} = useSessionStore()
  
  const fetchLogin = async (login_data) => {
    try {
      const response = await fetch('http://127.0.0.1:4000/api/login', {
        method: 'POST',
        body: JSON.stringify(login_data),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      console.log('response: ', response)
      let data = await response.json();
      console.log('data: ', data);
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
    } catch (error) {
      console.log(error)
    }
  };

  return {fetchLogin}
};

export default useLogin;