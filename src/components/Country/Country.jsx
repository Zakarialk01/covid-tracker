import React from "react";

import {
  Card,
  CardGroup,
  Accordion,
  useAccordionToggle,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CountUp from "react-countup";
import "./Country.css";

const Country = ({
  name,
  cases,
  active,
  continent,

  flag,
  critical,
  deaths,
  population,
}) => {
  if (!name) return "loading";
  const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log("totally custom!")
    );

    return (
      <button
        type="button"
        style={{
          backgroundColor: "#292e2e",
          color: "white",
          border: "none",
          width: "100%",
          height: "50px",
        }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  };

  return (
    <div>
      <CardGroup style={{ width: "100%" }}>
        <Accordion defaultActiveKey="0">
          <Card style={{ width: "18rem" }}>
            <Card.Img className="img" variant="top" src={flag} />

            <CustomToggle eventKey="1">Details</CustomToggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {" "}
                name : <strong>{name}</strong>
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {" "}
                continent : <strong>{continent}</strong>
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                population:
                <strong>
                  <CountUp
                    start={0}
                    end={population}
                    duration={5}
                    separator=","
                  />
                </strong>
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                cases :
                <strong>
                  <CountUp start={0} end={cases} duration={5} separator="," />
                </strong>
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse>
              <Card.Body>
                active :
                <strong>
                  <CountUp start={0} end={active} duration={5} separator="," />
                </strong>
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {" "}
                critical :
                <strong>
                  <CountUp
                    start={0}
                    end={critical}
                    duration={5}
                    separator=","
                  />
                </strong>
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                deaths :{" "}
                <strong>
                  <CountUp start={0} end={deaths} duration={5} separator="," />
                </strong>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </CardGroup>
      <br></br>
    </div>
  );
};

export default Country;
