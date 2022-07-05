import React, { useContext } from "react";
import { AuthContext, AuthContextProvider } from "./contexts/AuthContext";
import { AuthenticationTitle } from "./components/Login.tsx";
import LandingPage from "./components/LandingPage";
import { ForgotPassword } from "./components/ForgotPassword.tsx";
import { Signup } from "./components/Signup.tsx";
import DashboardShell from "./components/dashboard/Dashboard.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import  Courses  from "./components/dashboard/Courses.tsx";
import Profile from "./components/dashboard/Profile.tsx";
function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate replace to="/login" />;
}
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <DashboardShell/>
              </PrivateRoute>
            }
            exact
          />
          <Route exact path="login" element={<AuthenticationTitle />} />
          <Route exact path="signup" element={<Signup />} />
          <Route exact path="forgot-password" element={<ForgotPassword />} />
          
          {/* <Route exact path="profile" element={<Profile />} /> */}
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
