import { faLevelUpAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FooterImg from "../../../Common/Images/footer.jpg";
import BrandName from "../../../Common/Images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white md:p-12 py-10 px-4 font-serif">
      <div className="text-right relative right-10">
        <a href="#" className="bg-red-500 p-3 absolute">
          <FontAwesomeIcon icon={faLevelUpAlt} size="2x" />
        </a>
      </div>
      <div className="grid gap-10 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between md:px-4 md:gap-6 pb-10">
        <div>
          <div className="mb-3 border-b pb-2 border-white font-serif">
            <div>
              <img src={BrandName} alt="" />
            </div>
          </div>
          <div>
            <p className="font-mono">
              Open your door, promise you would definetly surprise surpirise.
            </p>
          </div>
        </div>
        <div className="col-span-2 col-12">
          <img src={FooterImg} alt="footer-bg" />
        </div>
        <div className="col-md-4 col-sm-8 col-12">
          <h4 className="mb-4 text-xl font-semibold text-white">Follow Us</h4>
          <ul className="ps-0 list-unstyled">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Linkdin</li>
            <li>Youtube</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-dashed pt-2 text-center">
        <small>
          2019 &copy; corportaionLtd All Right reserved ; Design by{" "}
          <span className="text-yellow-300 cursor-pointer">Pervej</span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
