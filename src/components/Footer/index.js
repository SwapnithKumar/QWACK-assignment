import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

import "./index.css";

const Footer = () => (
  <div className="footer-container">
    <div className="footer-top-container">
      <div>
        <img
          src="https://www.qwackedu.com/static/media/logo.2a487917892639ad5b74.png"
          alt="website logo"
          className="mb-4 w-75"
        />
        <p className="mb-2">Let's Practise grammer</p>
        <p className="mb-4">
          Read more
          <FaArrowRight />
        </p>
        <div className="icons-container">
          <FaFacebookF className="bg-light p-2 w-25 h-25 m-1" />
          <FaTwitter className="bg-light p-2 w-25 h-25 m-1" />
          <BsInstagram className="bg-light p-2 w-25 h-25 m-1" />
          <FaLinkedinIn className="bg-light p-2 w-25 h-25 m-1" />
        </div>
      </div>
      <div>
        <h4>Quick Links</h4>
        <p className="para">About us</p>
        <p className="para">Terms and Conditions</p>
        <p className="para">Privacy Policy</p>
      </div>
      <div>
        <h4>Get In Touch</h4>
        <div className="d-flex">
          <CiMail className="mt-1 email-icon" />
          <p>contact@qwackedu.com</p>
        </div>
        <div className="address-container d-flex">
          <IoLocationOutline className="mt-1 location-icon" />
          <div>
            <p>SF - 204 Aayna Complex</p>
            <p>Nr. Zydus Hospital, Habatpur Road</p>
            <p>Thaltej - Ahmedabad Gujarat - 380054</p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className="footer-bottom-container">
      <p className="pt-3">Copyright © 2022 Q.W.A.C.K. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
