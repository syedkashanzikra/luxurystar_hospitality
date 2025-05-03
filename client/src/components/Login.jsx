import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Breadcrumb from "./subcomponents/Breadcrumb";
import Header from './Header.jsx';
import Footer from './Footer.jsx'
import { Link } from 'react-router-dom';
import { loginUser } from "../api"; // adjust path if needed

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await loginUser(loginData);
      toast.success("Login successful!");

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("user", JSON.stringify(res.data));

      setTimeout(() => {
        window.location.href = "/"; 
      }, 1000);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Breadcrumb
        title="Login"
        paths={[
          { label: "Home", link: "/" },
          { label: "Login", active: true }
        ]}
      />

      <div className="si__contact__area section-space">
        <div className="container custom-width-2">
          <div className="row si__contact__bg">
            <div className="col-lg-12">
              <div className="si__contact__text text-center">
                <h1>Login to Your Account</h1>
                <p>Access your dashboard and manage your bookings easily.</p>
              </div>
            </div>

            <form className="row" onSubmit={handleSubmit}>
              <div className="col-lg-6 offset-lg-3">
                <div className="si__contact__info text-center">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={loginData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-6 offset-lg-3">
                <div className="si__contact__info text-center" style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Your Password"
                    required
                    value={loginData.password}
                    onChange={handleChange}
                    style={{ paddingRight: "40px" }}
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    style={{
                      position: "absolute",
                      right: "15px",
                      top: "67%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      fontSize: "18px",
                      color: "#999"
                    }}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              <div className="col-lg-12 text-center">
                <button
                  type="submit"
                  className="room__btn2 mt-5"
                  disabled={loading}
                  style={{ opacity: loading ? 0.6 : 1 }}
                >
                  {loading ? "Logging in..." : "Login Now"}
                </button>
              </div>

              <div className="col-lg-12 text-center mt-3">
                <p style={{ fontSize: "1.5rem", color: "#555" }}>
                  Don't have an account?{" "}
                  <Link to="/signup" style={{ color: "#0ea5e9", textDecoration: "none", fontWeight: "bold" }}>
                    Sign up now
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
      <Footer />
    </>
  );
};

export default Login;
