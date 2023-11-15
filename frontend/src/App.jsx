import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Book from './pages/Book'
import Login from './pages/Login'
import RegisterStudent from './pages/RegisterStudent'
import Requests from './pages/Requests'
import CheckReturns from './pages/CheckReturns'
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Cookies from 'js-cookie'

const isAuthenticated = () =>{
  const token = Cookies.get('token')
  console.log(token)
  return !!token
}

const PrivateRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

function App() {
  const location = useLocation()
  console.log(location)
  const isLoginPage = location.pathname === '/login'
  console.log(isLoginPage)


  return (
    <Layout>
      {!isLoginPage && <Navbar/>}
      <Routes>
        <Route index element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/book/:id" element={<PrivateRoute element={<Book />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<PrivateRoute element={<RegisterStudent />} />} />
        <Route path="/requests" element={<PrivateRoute element={<Requests />} />} />
        <Route path="/check-returns" element={<PrivateRoute element={<CheckReturns />} />} />
      </Routes>
    </Layout>
)
}

export default App
