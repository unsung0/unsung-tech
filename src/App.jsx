import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Services from "./Pages/Services.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
