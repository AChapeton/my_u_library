import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Book from "./pages/Book";
import Login from "./pages/Login";
import RegisterStudent from "./pages/RegisterStudent";
import Requests from "./pages/Requests";
import CheckReturns from "./pages/CheckReturns";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Cookies from "js-cookie";

const isAuthenticated = () => {
  const token = Cookies.get("token");
  console.log("isAuth: ", token);
  return !!token;
};

const PrivateRoute = ({ element, ...rest }) => {
  return isAuthenticated() ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" />
  );
};

function App() {
  const location = useLocation();
  console.log(location);
  const isLoginPage = location.pathname === "/login";
  console.log(isLoginPage);

  return (
    <Layout>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        {isAuthenticated() ? (
          <Route path="/" element={<Dashboard />} />
        ) : (
          <Navigate to="/login" />
        )}
        {/* <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} /> */}
        {isAuthenticated() ? (
          <Route path="/book/:id" element={<Book />} />
        ) : (
          <Navigate to="/login" />
        )}
        {/* <Route path="/book/:id" element={<PrivateRoute element={<Book />} />} /> */}
        {isAuthenticated() ? (
          <Route path="/register" element={<RegisterStudent />} />
        ) : (
          <Navigate to="/login" />
        )}
        {/* <Route
          path="/register"
          element={<PrivateRoute element={<RegisterStudent />} />}
        /> */}
        {isAuthenticated() ? (
          <Route path="/requests" element={<Requests />} />
        ) : (
          <Navigate to="/login" />
        )}
        {/* <Route
          path="/requests"
          element={<PrivateRoute element={<Requests />} />}
        /> */}
        {isAuthenticated() ? (
          <Route path="/check-returns" element={<CheckReturns />} />
        ) : (
          <Navigate to="/login" />
        )}
        <Route
          path="/check-returns"
          element={<PrivateRoute element={<CheckReturns />} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
