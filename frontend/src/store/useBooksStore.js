import {create} from 'zustand'
import { persist } from 'zustand/middleware'

const useBooksStore = create(persist((set) => ({
    books: [],
    setBooks: newBooks => set({books: [...newBooks]}),
}),{
    name: "BOOKS_DATA_V1" 
}))

export default useBooksStore
