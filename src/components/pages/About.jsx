import React from "react";
import { Row, Col } from "react-bootstrap";

function About() {
  return (
    <>
      <div className="aboutcont">
        <h1>About Us</h1>
        <div className="container-md">
          <Row>
            <Col md={6}>
              <img
                className="img-fluid abtimg"
                src="./images/7.jpg"
                alt="Philippines"
              />
              <p>Mayon Volcano</p>
            </Col>
            <Col md={6}>
              <p>
                We are passionate about showcasing the wonders of the
                Philippines and promoting it as an exceptional tourist
                destination. Our mission goes beyond the breathtaking landscapes
                and pristine beaches; we are here to celebrate the vibrant
                cultural heritage and warm hospitality that the Philippines
                offers to its visitors. With over 7,000 islands waiting to be
                explored, our archipelago provides a diverse range of
                experiences. From bustling cities teeming with life to tranquil
                rural retreats that allow you to immerse yourself in the wonders
                of nature, the Philippines has it all. Whether you are
                fascinated by the historical sites of Manila, eager to dive into
                the vibrant marine ecosystems of Palawan, or ready to indulge in
                the mouthwatering flavors of Filipino cuisine, our country
                caters to every traveler's taste and interest. At our core, we
                strive to showcase the hidden gems of the Philippines while
                supporting local communities and preserving the natural wonders
                that make our nation truly remarkable. We invite you to join us
                on this journey and experience the Philippines, an unforgettable
                destination that captures the hearts of travelers from around
                the world.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container-md">
          <h2>From the Developers</h2>
          <p>
            As developers, we are driven by our passion for technology and the
            desire to create exceptional experiences for travelers. Through
            innovative design and cutting-edge development, we have crafted this
            platform to help you discover the beauty and magic of the
            Philippines. Our team consists of talented individuals with diverse
            backgrounds and expertise, united by a shared love for our country.
            We have poured our hearts and souls into this project, meticulously
            curating content and ensuring a seamless user experience. We are
            committed to continuously improving and expanding our platform to
            provide you with the best possible resources for your Philippine
            adventure. We value your feedback and suggestions, so please don't
            hesitate to reach out to us. Thank you for choosing our platform,
            and we hope it becomes your go-to guide as you explore the wonders
            of the Philippines.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
