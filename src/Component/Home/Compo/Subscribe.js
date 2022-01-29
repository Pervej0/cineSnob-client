import React from "react";

const Subscribe = () => {
  const url =
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  return (
    <section className="my-12">
      <div
        className="hero-section flex items-center justify-center"
        style={{
          height: "50vh",
          background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${url})`,
        }}
      >
        <label className="flex border border-2 border-white md:w-2/5 w-auto">
          <input
            className="py-3 border text-white bg-transparent w-full focus:outline-none border-0 px-2"
            type="email"
            placeholder="Enter your email"
          />
          <button className="text-gray-800 text-lg bg-white px-4 py-3 font-bold uppercase  ">
            Subscribe
          </button>
        </label>
      </div>
    </section>
  );
};

export default Subscribe;
