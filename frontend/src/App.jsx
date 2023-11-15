import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Book from './pages/Book'
import Login from './pages/Login'
import RegisterStudent from './pages/RegisterStudent'
import Requests from './pages/Requests'
import CheckReturns from './pages/CheckReturns'
import Layout from './components/Layout';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <Layout>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Dashboard/>}/>
          <Route path='/book/:id' element={<Book/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<RegisterStudent/>}/>
          <Route path='/requests' element={<Requests/>}/>
          <Route path='/check-returns' element={<CheckReturns/>}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
