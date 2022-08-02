/** @format */

import React, { useEffect, useState } from "react";
import "./index.scss";
import spaceManSwingImage from "../../assets/images/SpaceSwing.png";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["H","i,"," ", "I'", "m","","S", "c", "o", "t", "t", " "];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <section className="hero-section ">
      <div className=" d-flex flex-row flex-wrap justify-content-center align-items-center vh-100">
        {/* Main Hero content */}
        <div className="hero-content d-flex flex-column align-items-center  col-sm-12 col-md-6 ">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <h2>FullStack Developer / JavaScript Expert</h2>
          <div className="contact-btns d-flex-row">
            <NavLink exact="true" activeclassname="active" to="/contact">
              <button className="contact-me-btn mt-3">Contact me</button>
            </NavLink>
            <span className="contact-span">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/scott-heier-224a40224/"
              >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Azariill/"
              >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
              </a>
            </span>
          </div>
        </div>
        <div className='img-div  col-sm-12 col-md-3 '>
        <img
          className="col-sm-12 col-md-2"
          src={spaceManSwingImage}
          alt="man is spacesuit"
        />
        </div>
      </div>

      {/* divs for the animated stars/particles */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </section>
  );
};

export default Home;
