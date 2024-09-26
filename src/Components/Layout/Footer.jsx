import React from "react";
import FooterApi from "../../API/FooterApi.json";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  const icons = {
    FaLocationDot: <FaLocationDot />,
    IoCall: <IoCall />,
    BiLogoGmail: <BiLogoGmail />,
  };
  return (
    <div className="container">
      <footer className="footer-section">
        <ul
          className="grid-three--cols grid"
      
        >
          {FooterApi.map((currelem, index) => {
            return (
              <li key={index} >
                <div className="footer-details flex">
                  <span className="footer-icons">{icons[currelem.icon]} </span>{" "}
                  <p className="footer-actual-data flex">
                    <span>{currelem.title}</span>
                    <span>{currelem.details}</span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
