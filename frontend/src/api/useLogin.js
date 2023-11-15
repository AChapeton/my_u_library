import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const useLogin = () => {
  const navigate = useNavigate()
  
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
      let {token} = await response.json();
      console.log('token: ', token);
      Cookies.set('token', token, {expires: 1})
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  };

  return {fetchLogin}
};

export default useLogin;