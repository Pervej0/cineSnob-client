import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home.js";
import About from "./Component/About/About";
import Contact from "./Component/ContactUs/Contact";
import Header from "./Component/Shared/Header/Header";
import Footer from "./Component/Shared/Footer/Footer";
import Register from "./Component/Register/Register";
import SignIn from "./Component/SignIn/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
