import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledgw, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <Link to="programs" offset={-220} smooth={true} duration={500}>
          <button className="btn">
            Explore more <img src={dark_arrow} alt="" />{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
