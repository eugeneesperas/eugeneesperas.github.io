import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import Cards from "./Cards";
import MySearchBar from "./trials/MySearchBar";

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        <img className="hero-image" src="./images/13.jpg" alt="hero-image" />
        <h1 className="h1-1">Discover paradise</h1>
        <h1 className="h1-2">in the Philippines</h1>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            LETS GO
          </Button>
        </div>
      </div>
      <MySearchBar />
      <Cards />
    </>
  );
}

export default HeroSection;
