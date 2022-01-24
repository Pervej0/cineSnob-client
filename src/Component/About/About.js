import React from "react";

const About = () => {
  const url =
    "https://images.unsplash.com/photo-1486693128850-a77436e7ba3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  return (
    <>
      <section
        className="hero-section"
        style={{
          height: "50vh",
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${url})`,
        }}
      ></section>
    </>
  );
};

export default About;
