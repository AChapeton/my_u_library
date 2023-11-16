import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import useSessionStore from "./store/useSessionStore";
import Dashboard from "./pages/Dashboard";
import Book from "./pages/Book";
import Login from "./pages/Login";
import RegisterStudent from "./pages/RegisterStudent";
import Requests from "./pages/Requests";
import CheckReturns from "./pages/CheckReturns";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Cookies from "js-cookie";
import Error404 from "./pages/Error404";
import AddBook from "./pages/AddBook";

const isAuthenticated = () => {
  const token = Cookies.get("token");
  console.log("isAuth: ", token);
  return !!token;
};

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  const {account} = useSessionStore()
  console.log('account: ', account)

  return (
    <Layout>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/" exact
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/book/:id"
          element={isAuthenticated() ? <Book /> : <Navigate to="/login" />}
        />
        <Route
          path="create-book"
          element={isAuthenticated() ? <AddBook/> : <Navigate to="/login" />}
        />
        <Route
          path="/register"
          element={
            isAuthenticated() ? <RegisterStudent /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/requests"
          element={isAuthenticated() ? <Requests /> : <Navigate to="/login" />}
        />
        <Route
          path="/check-returns"
          element={
            isAuthenticated() ? <CheckReturns /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </Layout>
  );
}

export default App;
