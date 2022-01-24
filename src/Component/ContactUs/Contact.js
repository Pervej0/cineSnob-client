import React from "react";

const Contact = () => {
  const url =
    "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
  return (
    <>
      <section
        className="hero-section"
        style={{
          height: "50vh",
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${url})`,
        }}
      ></section>
      <h1>COOOOOOONtact us</h1>
    </>
  );
};

export default Contact;
