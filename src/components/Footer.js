import React from "react";
import {FiFacebook, FiInstagram, FiTwitter} from "react-icons/fi"

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <ul className="grid-vertical">
            <li className="footer-list-title">
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Media Library</a>
            </li>
            <li>
              <a href="#">News and Press Releases</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Enterprise policy</a>
            </li>
            <li>
              <a href="#">Sustainability</a>
            </li>
            <li>
              <a href="#">Press Material</a>
            </li>
          </ul>
          <ul className="grid-vertical">
            <li className="footer-list-title">
              <a href="#">How to Start</a>
            </li>
            <li>
              <a href="#">Asset Buying Guide</a>
            </li>
            <li>
              <a href="#">Authorized Consumers</a>
            </li>
            <li>
              <a href="#">Authorized Distributors</a>
            </li>
            <li>
              <a href="#">Deals</a>
            </li>
            <li>
              <a href="#">Demos and trials</a>
            </li>
          </ul>
          <ul className="grid-vertical">
            <li className="footer-list-title">
              <a href="#">Get in touch</a>
            </li>
            <li>
              <a href="#">Contact Sales</a>
            </li>
            <li>
              <a href="#">Contact Support</a>
            </li>
            <li>
              <a href="#">Register your assets</a>
            </li>
            <li>
              <a href="#">Developer program</a>
            </li>
            <li>
              <a href="#">Collabrate</a>
            </li>
          </ul>
        </div>
        <div className="low-header-bar">
          <a href="">Trademarks</a>
          <a href="">Safety and Warning</a>
          <a href="">Cookie Policy</a>
          <a href="">Declarations of Conformity</a>
          <a href="">Commercial Disclaimers</a>
          <a href="">Privacy Policy</a>
        </div>
        <div className="low-header-bar2">
        <p>All Rights Reserved © {new Date().getFullYear()} </p>
          <div className="low-header-bar2-links">
          <a href=""><FiFacebook size={20}/></a>
          <a href=""><FiInstagram size={20}/></a>
          <a href=""><FiTwitter size={20}/></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
