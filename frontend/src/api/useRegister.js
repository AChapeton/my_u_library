const useRegister = () => {
  
  const fetchRegister = async (register_data) => {
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
  };

  return {fetchRegister}
};

export default useRegister;