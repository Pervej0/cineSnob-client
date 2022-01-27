import React from "react";
import useFirebase from "../../Hook/useFirebase";
import Spinner from "../Shared/Spinner/Spinner";
import HeroSection from "./Compo/HeroSection";
import "./Home.css";

const Home = () => {
  const { user } = useFirebase();

  return (
    <>
      <HeroSection />
    </>
  );
};

export default Home;
