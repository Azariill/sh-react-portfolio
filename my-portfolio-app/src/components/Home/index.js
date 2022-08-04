/** @format */

import React, { useEffect, useState } from "react";
import "./index.scss";
import spaceManSwingImage from "../../assets/images/SpaceSwing.png";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["H","i,"," ", "I'", "m","","S", "c", "o", "t", "t", " "];
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  useEffect(() =>{
    setTimeout(() =>{
     navigate('/about');

    }, 23000)
  },[navigate]);

  return (
    <>
    <section className="hero-section d-flex align-items-center justify-content-center">
      <div className=" d-flex flex-row flex-wrap justify-content-center align-items-center mt-5 col-12">
        {/* Main Hero content */}
        <div className="hero-content d-flex flex-column align-items-center  col-sm-12 col-md-4 ">
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
          className="floatingImg col-sm-12 col-md-2"
          src={spaceManSwingImage}
          alt="man is spacesuit"
        />
        </div>
      </div>
    </section>
    <Loader type="pacman" />
    </>
  );
};

export default Home;
