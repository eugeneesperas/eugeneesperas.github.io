import React from "react";
import { Card, CardGroup, Row, Col } from "react-bootstrap";
import "./City.css";

function Dive() {
  return (
    <>
      <div className="h1-EventsContainer">
        <h1>Philippines Best Diving Destinations</h1>
      </div>
      <div className="EventsContainer">
        <div>
          <Row xs={1} md={1} lg={2} className="g-3">
            <Col>
              <CardGroup>
                <Card className="cards-events">
                  <Card.Img
                    classNmae="img-fluid"
                    variant="top"
                    src="/six/d8.png"
                  />
                </Card>
              </CardGroup>
            </Col>
            <Col className="cards-events">
              <CardGroup className="group-events">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h1 className="title-events">
                        Tubbataha Reefs Natural Park
                      </h1>
                    </Card.Title>
                    <Card.Text className="text-events">
                      Tubbataha Reefs Natural Park is a protected marine area
                      located in the Sulu Sea, in the Philippines. It is
                      composed of two coral atolls, known as the North Atoll and
                      the South Atoll, and the Jessie Beazley Reef. The park
                      covers a total area of approximately 97,030 hectares and
                      was declared a UNESCO World Heritage Site in 1993.
                      Tubbataha Reefs Natural Park is renowned for its
                      exceptional biodiversity and pristine coral reefs. It is
                      home to a wide variety of marine life, including over 600
                      species of fish, 360 species of corals, 11 species of
                      sharks, 13 species of dolphins and whales, and numerous
                      species of birds. The reefs are considered to be among the
                      best-preserved coral reef ecosystems in the world.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </div>
      </div>
      <div className="EventsContainer">
        <div>
          <Row xs={1} md={1} lg={2} className="g-3">
            <Col className="cards-events">
              <CardGroup className="group-events">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h1 className="title-events">Malapascua Island</h1>
                    </Card.Title>
                    <Card.Text className="text-events">
                      Malapascua Island is a small tropical island located in
                      the Visayan Sea, approximately 6.8 kilometers off the
                      northeastern coast of Cebu Island in the Philippines.
                      Despite its relatively small size, Malapascua is known for
                      its stunning white sandy beaches, crystal-clear turquoise
                      waters, and vibrant marine life. The island has become a
                      popular destination for beach lovers and scuba diving
                      enthusiasts.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
            <Col>
              <CardGroup>
                <Card className="cards-events">
                  <Card.Img
                    classNmae="img-fluid"
                    variant="top"
                    src="/six/d7.png"
                  />
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </div>
      </div>
      <div className="EventsContainer">
        <div>
          <Row xs={1} md={1} lg={2} className="g-3">
            <Col>
              <CardGroup>
                <Card className="cards-events">
                  <Card.Img
                    classNmae="img-fluid"
                    variant="top"
                    src="/six/d3.png"
                  />
                </Card>
              </CardGroup>
            </Col>
            <Col className="cards-events">
              <CardGroup className="group-events">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h1 className="title-events">Puerto Galera</h1>
                    </Card.Title>
                    <Card.Text className="text-events">
                      Puerto Galera is a popular beach and diving destination
                      located on the northeastern coast of Mindoro Island in the
                      Philippines. It is known for its picturesque beaches,
                      clear waters, and vibrant marine biodiversity. The town of
                      Puerto Galera and its surrounding areas are designated as
                      a UNESCO Biosphere Reserve and one of the most diverse
                      marine ecosystems in the world.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </div>
      </div>
      <div className="EventsContainer">
        <div>
          <Row xs={1} md={1} lg={2} className="g-3">
            <Col className="cards-events">
              <CardGroup className="group-events">
                <Card>
                  <Card.Body>
                    <Card.Title>
                      <h1 className="title-events">La Union</h1>
                    </Card.Title>
                    <Card.Text className="text-events">
                      La Union is a province located in the Ilocos Region of the
                      Philippines, specifically in the island of Luzon. It is
                      known for its beautiful beaches, consistent waves for
                      surfing, and laid-back coastal atmosphere. La Union has
                      gained popularity as a surfing destination, attracting
                      both local and international surfers. The main surfing
                      area in La Union is the town of San Juan, particularly
                      along the stretch of coastline known as Urbiztondo Beach.
                      The waves here are suitable for surfers of all levels,
                      from beginners to advanced riders. Surfing schools and
                      rental shops are available along the beach, offering
                      lessons and equipment for those who want to learn or
                      improve their skills.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
            <Col>
              <CardGroup>
                <Card className="cards-events">
                  <Card.Img
                    classNmae="img-fluid"
                    variant="top"
                    src="/six/d4.png"
                  />
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default Dive;
