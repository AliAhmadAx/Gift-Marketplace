import React, { useState, useEffect, useContext } from "react";
import Login from "../Pages/Login/Login";
import MainPage from "../Pages/ChatGPT/MainPage";
import { AuthContext } from "../App";


const ProtectedRoute = () => {
  const {userLogin}=useContext(AuthContext)
  const [UserIsLogin, setUserIsLogin] = useState(
    localStorage.getItem("UserIsLogin")
  );

  useEffect(() => {
    setUserIsLogin(localStorage.getItem("UserIsLogin"));
  }, [userLogin]);
  return UserIsLogin === "true" ? <MainPage />: <Login />;
};

export default ProtectedRoute;
