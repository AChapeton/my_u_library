const BASE_URL = process.env.BASE_URL

const useRegister = () => {
  
  const fetchRegister = async (register_data) => {
      const response = await fetch(`${BASE_URL}/api/register`, {
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
  };

  return {fetchRegister}
};

export default useRegister;