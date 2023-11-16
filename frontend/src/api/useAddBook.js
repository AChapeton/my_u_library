import Cookies from "js-cookie";

const useAddBook = () => {
  const token = Cookies.get("token")
  const fetchAddBook = async (register_book_data) => {
      const response = await fetch('http://127.0.0.1:4000/api/books/add_book', {
        method: 'POST',
        body: JSON.stringify(register_book_data),
        headers: {
          Authorization: token,
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

  return {fetchAddBook}
};

export default useAddBook;