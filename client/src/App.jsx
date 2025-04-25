import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Index } from "./components/Index.jsx";
import { About } from "./components/About.jsx";
import { Account } from "./components/Account.jsx";
import { Contact } from "./components/Contact.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom"; 

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
