import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { BsEye } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import TotalServices from "../../TotalService";
import { toast } from "react-toastify";
import addFavorite from "../Functions/AddtoFavorites";
import { ThemeContext } from "../../App";
import logo from "../../assets/logo/logoBlack.svg";

const Login = () => {
  const [ForgotPass, setForgotPass] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [forgetEmail, setForgetEmail] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [BtnDisabled, setBtnDisabled] = useState(false);
  const [BtnDisabled2, setBtnDisabled2] = useState(false);
  const [loginCheck, setLoginCheck] = useState("true");
  const { setLogin, login, favorite, setFavorite } = useContext(ThemeContext);
  let navigate = useNavigate();

  useEffect(() => {
    var isLogin = localStorage.getItem("UserIsLogin");
    // setHeaderShow(false);

    if (isLogin) {
      navigate("/");
    }
  }, []);

  // LOGIN API STARTS
  const handleLogin = async () => {
    // localStorage.setItem("login", JSON.stringify(userName, Password));

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const passCapital = Password.search(/.*[A-Z].*/);
    const passSpecial = Password.search(
      /.*[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~].*/
    );

    if (email === "" || Password === "") {
      toast.error("Please fill all the fields!!");
    } else if (!regex.test(email)) {
      toast.error("Invalid Email Address!!");
    } else if (Password.length <= 8) {
      toast.error("Password Invalid!!");
    } else if (passCapital < 0 && passSpecial < 0) {
      toast.error("Password Invalid!!");
    } else {
      const response = await TotalServices.login({
        email: email,
        password: Password,
      });
      console.log(response, "response");
      if (response.status === 200) {
        setBtnDisabled(false);
        let token = {
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
        };
        let fav = localStorage.getItem("favorites");
        if (fav) {
          let oldFavs = JSON.parse(fav);

          localStorage.setItem(
            "favorites",
            JSON.stringify([
              ...response.data.favourite_products_ids,
              ...oldFavs,
            ])
          );
        } else {
          localStorage.setItem(
            "favorites",
            JSON.stringify(response.data.favourite_products_ids)
          );
        }
        localStorage.setItem("UserAuth", JSON.stringify(token));
        localStorage.setItem("UserIsLogin", "true");
        // localStorage.setItem("favorites",JSON.stringify(response.data.favourite_products_ids))
        setFavorite(!favorite);
        setLogin(!login);
        addFavorite();
        navigate("/");
      } else if (response.status !== 200) {
        document.getElementById("error").style.display = "block";
        setBtnDisabled(false);
        toast.error(response.data.message);
      }
    }
  };
  return (
    <>
      {/* {loginCheck !== "true" && ( */}
      <>
        <Helmet>
          <title>Gift MarketPlace | Login</title>
        </Helmet>

        <div className="w-full yellow-color-text gift-box-background flex items-center justify-center h-screen">
          <div className="w-full h-full backdrop-blur-sm flex flex-col items-center justify-center">
            <img src={logo} alt="logo" className="w-1/2 lg:w-1/4 mb-2" />
            <div className="w-11/12 lg:w-[30%] rounded-lg flex-col bg-gray-900 px-6 py-14 shadow-lg">
              <div className="mb-8 flex justify-center">
                <h1 className="text-center text-xl font-bold leading-tight tracking-tight md:text-2xl ">
                  Login
                </h1>
                {/* <img
                  className="w-24"
                  src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo.c36eaf5e6.svg"
                  alt=""
                /> */}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                <div className="w-full text-center">
                  <p
                    id="error"
                    style={{ display: "none" }}
                    className="text-xs text-red-600"
                  >
                    Username or Password is incorrect
                  </p>
                </div>
                <div className="flex flex-col text-sm rounded-md">
                  <input
                    className="mb-5 bg-transparent placeholder-gray-400 border-b-2 border:bg-yellow-[#E7AB3C] p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Email"
                    // required
                  />
                  {showPassword === true ? (
                    <input
                      className="mb-5 bg-transparent placeholder-gray-400 border-b-2 border:bg-yellow-[#E7AB3C] p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
                      type="password"
                      name="password"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      //   required
                      placeholder="Enter Password"
                    />
                  ) : (
                    <input
                      className="mb-5 bg-transparent placeholder-gray-400 border-b-2 border:bg-yellow-[#E7AB3C] p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
                      type="password"
                      name="password"
                      value={Password}
                      onChange={(e) => setPassword(e.target.value)}
                      //   required
                      placeholder="Enter Password"
                    />
                  )}
                  {/* {showPassword === true ? (
                <BsEye
                  onClick={() => setShowPassword(!showPassword)}
                  size="1.3em"
                  className="self-center -ml-10 cursor-pointer text-gray-400 hover:text-black"
                />
              ) : (
                <BsEye
                  onClick={() => setShowPassword(!showPassword)}
                  size="1.3em"
                  className="self-center -ml-10 cursor-pointer text-gray-400 hover:text-black"
                />
              )} */}
                </div>
                <button
                  disabled={BtnDisabled}
                  className="mt-5 w-[95%] border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
                  type="submit"
                >
                  {BtnDisabled === false ? (
                    "Login"
                  ) : (
                    <PulseLoader
                      color={"white"}
                      size={10}
                      style={{ zIndex: "-10" }}
                    />
                  )}
                </button>
                <div className="yellow-color-text mt-5 flex justify-center text-sm">
                  <Link to="/signup" className="flex w-full justify-center">
                    Don't have an account?
                    <p className="font-bold ml-1 hover:underline">Register</p>
                  </Link>
                </div>
                <div className="yellow-color-text mt-2 flex justify-center text-sm">
                  <Link to="/" className="flex w-full justify-center">
                    <p className="font-bold hover:underline">Home</p>
                  </Link>
                </div>

                <div className="mt-5 flex justify-center gap-3 "></div>
              </form>
            </div>
          </div>
        </div>
      </>
      {/* )} */}
    </>
  );
};

export default Login;
