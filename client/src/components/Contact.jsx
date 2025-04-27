import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-confetti';
import Info from "./subcomponents/Info";
import Breadcrumb from "./subcomponents/Breadcrumb";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      toast.success(data.message || "Form Submitted Successfully!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });

      // After small timeout, show Thank You page
      setTimeout(() => {
        setIsSubmitted(true);
      }, 2000);

    } catch (error) {
      console.error("Form submit error:", error);

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

  if (isSubmitted) {
    return (
      <div style={{ height: "100vh", width: "100%", backgroundColor: "#f0f8ff", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
        <Confetti width={dimensions.width} height={dimensions.height} numberOfPieces={500} recycle={false} gravity={0.3} />
        <h1 style={{ fontSize: "3rem", color: "#0f172a", marginBottom: "20px", textAlign: "center" }}>🎉 Thank You! 🎉</h1>
        <p style={{ fontSize: "1.5rem", color: "#334155", textAlign: "center" }}>Your message has been successfully sent.</p>
        <button
          onClick={() => setIsSubmitted(false)}
          style={{
            marginTop: "30px",
            padding: "12px 24px",
            fontSize: "1.2rem",
            backgroundColor: "#0ea5e9",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.3s"
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb
        title="Contact Us"
        paths={[
          { label: "Home", link: "/" },
          { label: "Contact Us", active: true }
        ]}
      />

      <Info />

      {/* Contact Form */}
      <div className="si__contact__area section-space">
        <div className="container custom-width-2">
          <div className="row si__contact__bg">
            <div className="col-lg-12">
              <div className="si__contact__text text-center">
                <h1>Write here below?</h1>
                <p>
                  For your car we will do everything advice, repairs and they
                  can
                  <br /> maintenance. We are the some preferred choice
                </p>
              </div>
            </div>

            <form className="row" onSubmit={handleSubmit}>
              <div className="col-lg-6">
                <div className="si__contact__info text-center">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name..."
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="si__contact__info text-center">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="si__contact__info text-center">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="si__contact__info">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-12 text-center">
                <button type="submit" className="room__btn2">
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Contact;
