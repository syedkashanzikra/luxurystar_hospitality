import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Breadcrumb from "./subcomponents/Breadcrumb";
import Header from './Header.jsx';
import Footer from './Footer.jsx'
import { Link } from 'react-router-dom';

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(prevState => !prevState);
    };
    
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Account created successfully!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
        // Clear form after success
        setSignupData({ name: "", email: "", phone: "", password: "" });
      } else {
        toast.error(data.message || "Signup failed!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        });
      }

    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Something went wrong!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
    }
  };

  return (
    <>
     <Header />
      <Breadcrumb
        title="Signup"
        paths={[
          { label: "Home", link: "/" },
          { label: "Signup", active: true }
        ]}
      />

      {/* Signup Form */}
      <div className="si__contact__area section-space">
        <div className="container custom-width-2">
          <div className="row si__contact__bg">
            <div className="col-lg-12">
              <div className="si__contact__text text-center">
                <h1>Create Your Account</h1>
                <p>Sign up and start managing your bookings today.</p>
              </div>
            </div>

            <form className="row" onSubmit={handleSubmit}>
              <div className="col-lg-6 offset-lg-3">
                <div className="si__contact__info text-center">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={signupData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-6 offset-lg-3">
                <div className="si__contact__info text-center">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={signupData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-6 offset-lg-3">
                <div className="si__contact__info text-center">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    required
                    value={signupData.phone}
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
      value={signupData.password}
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
                <button type="submit" className="room__btn2 mt-5">
                  Create Account
                </button>
              </div>
              <div className="col-lg-12 text-center mt-3">
                                <p style={{ fontSize: "1.5rem", color: "#555" }}>
                                    Already have an account?{" "}
                                    <Link to="/login" style={{ color: "#0ea5e9", textDecoration: "none", fontWeight: "bold" }}>
                                        Login now
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

export default Signup;
