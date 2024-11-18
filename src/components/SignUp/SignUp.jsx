import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { PulseLoader } from "react-spinners";
import Validations from "../Validation/Regex";
import TotalServices from "../../TotalService";
import logo from "../../assets/logo/logoBlack.svg";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("");

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const handleSignUp = async () => {
    if (
      Validations.isEmpty(email) ||
      Validations.isEmpty(password) ||
      Validations.isEmpty(name)
    ) {
      toast.error("Fields Can't be Empty");
    } else if (!Validations.isEmail(email)) {
      toast.error("Invalid Email");
    } else if (!Validations.isName(name)) {
      toast.error("Invalid Name");
    } else if (!Validations.validatePassword(password)) {
      toast.error(
        "Password must have atleast one lowercase letter, one uppercase letter, one digit, and one special character"
      );
    } else {
      try {
        setLoader(true);

        const response = await TotalServices.SingUp({
          email: email,
          password: password,
          name: name,
        });
        console.log(response, "res");

        if (response.status === 200) {
          navigate("/login");
          setLoader(false);
        }
      } catch (error) {
        console.log("error ", error);
        setLoader(false);
      }
    }
  };
  return (
    <div className="yellow-color-text gift-box-background flex items-center justify-center h-screen">
      <div className="w-full h-full backdrop-blur-sm flex flex-col items-center justify-center">
        <img src={logo} alt="logo" className="w-1/2 lg:w-1/4 mb-2" />
        <div className="w-11/12 lg:w-[30%] rounded-lg flex-col bg-gray-900 px-6 py-16 text-left shadow-lg">
          <h1 className="text-center text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
            Create an account
          </h1>
          <form
            className="w-full pb-5 flex flex-col items-center justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              handleSignUp();
            }}
          >
            {/* <label className="block  text-sm font-medium  ">Name</label> */}
            <input
              type="text"
              className="w-full mb-5 bg-transparent placeholder-gray-400 border-b-2 border:bg-yellow-[#E7AB3C] p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
              placeholder="First Name"
              required={true}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />

            {/* <label className="block text-sm font-medium  ">Your email</label> */}
            <input
              type="email"
              className="w-full mb-5 bg-transparent placeholder-gray-400 border-b-2 border:bg-yellow-[#E7AB3C] p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
              placeholder="name@company.com"
              required={true}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />

            {/* <label className="block  text-sm font-medium  ">Password</label> */}
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full mb-5 bg-transparent placeholder-gray-400 border-b-2 border:bg-yellow-[#E7AB3C] p-3 hover:outline-none focus:outline-none hover:border-yellow-500 "
              required={true}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            {loader ? (
              <button
                type="submit"
                className="w-full text-white bg-[#18a47c]  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                <PulseLoader color="white" size={10} />
              </button>
            ) : (
              <button
                type="submit"
                className="mt-5 w-[95%] border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300"
              >
                Create an account
              </button>
            )}

            <div className="yellow-color-text mt-5 flex justify-center text-sm">
              <Link to="/login" className="flex">
                Already have an account?
                <p className="font-bold ml-1 hover:underline">Login</p>
              </Link>
            </div>
            <div className="yellow-color-text mt-2 flex justify-center text-sm">
              <Link to="/" className="flex w-full justify-center">
                <p className="font-bold hover:underline">Home</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
