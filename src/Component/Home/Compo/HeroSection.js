import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HeroSection = () => {
  const url =
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80";
  return (
    <section
      className="hero-section"
      style={{
        height: "100vh",
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${url})`,
      }}
    >
      <div className="flex items-center flex-col gap-5 h-full justify-center">
        <h1 className="md:text-5xl text-3xl font-bold uppercase text-white text-center leading-8">
          Give your eyes best seen
          <br /> to best feel
        </h1>
        <div className="relative">
          <button className="text-white ease-in-out duration-300 hover:mt-6 absolute top-0">
            <FontAwesomeIcon icon={faCloudDownloadAlt} size="3x" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
