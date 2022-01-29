import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home.js";
import Contact from "./Component/ContactUs/Contact";
import Header from "./Component/Shared/Header/Header";
import Footer from "./Component/Shared/Footer/Footer";
import Register from "./Component/Register/Register";
import SignIn from "./Component/SignIn/SignIn";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import StreamingDetails from "./Component/Home/Compo/StreamingDetails";
import WatchList from "./Component/WatchList/WatchList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/watchList"
          element={
            <PrivateRoute>
              <WatchList />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="home/:posterId"
          element={
            <PrivateRoute>
              <StreamingDetails />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
