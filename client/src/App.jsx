import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import About from "./components/About";
import Account from "./components/Account";
import Contact from "./components/Contact";
import Event from "./components/Event";
import Restaurant from "./components/Restaurant";
import RoomDetails from "./components/Room-Details";
import Room from "./components/Room";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import "./App.css";
import Signup from "./components/Signup";
import AdminScreen from "./admin/adminindex";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event" element={<Event />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/room-details" element={<RoomDetails />} />
        <Route path="/room" element={<Room />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />


        <Route path="/admin" element={<AdminScreen />} />

      </Routes>
    </Router>
  );
}

export default App;
