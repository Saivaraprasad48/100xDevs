import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import UserProfile from "./pages/UserProfile";
import PropTypes from "prop-types";

const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};
const ProtectedRoute = ({ element: Element, ...rest }) => {
  return isAuthenticated() ? <Element {...rest} /> : <Navigate to="/signin" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<Signin />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={Dashboard} />}
          />
          <Route
            path="/send"
            element={<ProtectedRoute element={SendMoney} />}
          />
          <Route
            path="/user-profile"
            element={<ProtectedRoute element={UserProfile} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
