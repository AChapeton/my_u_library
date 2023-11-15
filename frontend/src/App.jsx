import React from 'react';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Book from './pages/Book'
import Login from './pages/Login'
import RegisterStudent from './pages/RegisterStudent'
import Requests from './pages/Requests'
import CheckReturns from './pages/CheckReturns'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/book/:id",
      element: <Book/>
    },
    {
      path: "/register",
      element: <RegisterStudent/>
    },
    {
      path: "/requests",
      element: <Requests/>
    },
    {
      path: "/check-returns",
      element: <CheckReturns/>
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
