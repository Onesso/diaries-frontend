import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import moment from "moment";
export default function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <h3>Contact</h3>
        <p>Frank Were</p>
        <p>8942 Ruaraka Lane, Nairobi</p>
      </div>
      <div className="connect">
        <h3>Connect</h3>
        <div className="linksSection">
          <li>
            <FaInstagram size={35} />
            <a href="http://"></a>
          </li>
          <li>
            <FiGithub size={35} />
            <a href="http://"></a>
          </li>
          <li>
            <BsTwitterX size={35} />
            <a href="http://"></a>
          </li>
        </div>
      </div>
      <div className="copyright">
        <p>All rights researved</p>
      </div>
    </div>
  );
}
