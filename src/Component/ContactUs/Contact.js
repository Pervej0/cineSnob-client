import React from "react";

const Contact = () => {
  const url =
    "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";
  return (
    <>
      <section>
        <div
          className="hero-section"
          style={{
            height: "50vh",
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${url})`,
          }}
        ></div>
        <div className="md:mx-14 mx-4 my-20">
          <div className="grid md:grid-cols-2 gap-8 grid-cols-1 items-center">
            <div>
              <img src="https://i.ibb.co/BrfNRKG/building.jpg" alt="" />
            </div>
            <div className="mt-5">
              <h1 className="text-3xl text-black text-bold font-mono font-semibold">
                The things came first
              </h1>
              <p className="text-gray-700 leading-8 mt-4">
                The movie industry as we know it today originated in the early
                19th century through a series of technological developments: the
                creation of photography, the discovery of the illusion of motion
                by combining individual still images, and the study of human and
                animal locomotion.
                <br /> <br /> The first to present projected moving pictures to
                a paying audience were the Lumière brothers in December 1895 in
                Paris, France. They used a device of their own making, the
                Cinématographe, which was a camera, a projector and a film
                printer all in one.
              </p>
              <ul className="mt-5 font-semibold leading-9">
                <li>130/C Main Town, Unknown Land, Mars</li>
                <li>
                  <span className="font-bold">Phone:</span> +0304202
                </li>
                <li>
                  <span className="font-bold">Email:</span> hello@gmail.com
                </li>
                <li>
                  <span className="font-bold">Fax:</span> 393332234*
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
