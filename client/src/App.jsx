import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Index from "./components/Index";
import About from "./components/About";
import Account from "./components/Account";
import Contact from "./components/Contact";
import Event from "./components/Event";
import Restaurant from "./components/Restaurant";
import RoomDetails from "./components/Room-Details";
import Room from "./components/Room";
import NotFound from "./components/NotFound"; // Assuming NotFound.jsx bana liya tu ne

import "./App.css";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Event />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/room-details" element={<RoomDetails />} />
        <Route path="/room" element={<Room />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
