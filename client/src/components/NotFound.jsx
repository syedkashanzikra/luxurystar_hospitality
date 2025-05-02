import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header.jsx';


const NotFound = () => {
  return (
    
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
      textAlign: "center"
    }}>

      <h1 style={{
        fontSize: "8rem",
        fontWeight: "bold",
        color: "#ff6b6b",
        animation: "bounce 1.5s infinite"
      }}>
        404
      </h1>

      <h2 style={{ fontSize: "2rem", color: "#1e293b", marginTop: "20px" }}>
        Oops! Page Not Found
      </h2>

      <p style={{ fontSize: "1.2rem", color: "#475569", margin: "20px 0" }}>
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link to="/" style={{
        padding: "12px 24px",
        backgroundColor: "#0ea5e9",
        color: "#fff",
        textDecoration: "none",
        borderRadius: "8px",
        fontWeight: "bold",
        transition: "background 0.3s"
      }}>
        Go Back Home
      </Link>

      {/* Inline keyframes animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;
