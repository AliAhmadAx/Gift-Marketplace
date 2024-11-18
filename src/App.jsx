import React, { useState, createContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Error404 from "./ExtraPages/Error404";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Search from "./pages/Search";
import Gifts from "./pages/Gifts";
import ComparisonList from "./pages/ComparisonList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Error404 from "./components/Error404/Error404";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import ComparisonGrid from "./pages/ComarisonGrid";
import ComingSoon from "./pages/CommingSoon";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import TermsUse from "./pages/TermsUse";
import AllGifts from "./pages/AllGifts";

export const ThemeContext = createContext();

function App() {
  const [favorite, setFavorite] = useState(false);
  const [login, setLogin] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // const [UserIsLogin] = useState(
  //   localStorage.getItem("UserIsLogin")
  // );

  const [data, setData] = useState([]);

  const [test, setTest] = useState([]);

  return (
    <div className="App">
      <ToastContainer />

      <ThemeContext.Provider
        value={{
          setLogin,
          login,
          favorite,
          setFavorite,
          data,
          setData,
          test,
          setTest,
          inputValue,
          setInputValue,
        }}
      >
        <Router>
          <Navbar />
          <ScrollToTop />

          <Routes key={document.pathname}>
            <>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/termsOfUse" element={<TermsUse />} />

              <Route path="/all-gifts" element={<AllGifts />} />
              <Route path="/search/:query" element={<Search />} />
              <Route path="/favorite-gift" element={<Gifts />} />
              {/* <Route path="/comparison-list" element={<ComingSoon />} /> */}
              <Route path="/comparison-list" element={<ComparisonGrid />} />
              <Route path="/product-details" element={<ProductDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />

              <Route path="*" element={<Error404 />} />
            </>
          </Routes>
          <Footer />
        </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
