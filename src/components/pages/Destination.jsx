import React from "react";
import "./Destination.css";
import GroupIslandCard from "../GroupIslandCard";
import CardList from "../CardWithModal";
import Button from "../Button";
import MyCards from "../MyCards";
import Cards from "../Cards";
import MySearchBar from "../trials/MySearchBar";

function Destination() {
  return (
    <>
      {/* my searchbar */}
      <div className="destination-hero-container">
        <img className="hero-image" src="./images/10.jpg" alt="hero-image" />
        <h1 className="h1-1">The Philippines most</h1>
        <h1 className="h1-2">EXTRA ORDINARY PLACES</h1>
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
      <Cards />
      <MyCards />
      <MySearchBar />
    </>
  );
}
export default Destination;
