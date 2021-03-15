import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CountUp from "react-countup";

const Cards = ({
  latest: {
    active,
    recovered,
    deaths,

    critical,
    affectedCountries,
    cases,
  },
  date,
}) => {
  return (
    <div>
      <CardGroup>
        <Card
          className="card"
          bg="info"
          text={"white"}
          className="text-center"
          style={{ margin: "10px", backgroundColor: "red" }}
        >
          <Card.Body>
            <Card.Title>Active: </Card.Title>
            <Card.Text>
              {" "}
              <strong>
                <CountUp start={0} end={active} duration={2.75} separator="," />
              </strong>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>{date}</small>
          </Card.Footer>
        </Card>
        <Card
          className="card"
          bg="danger"
          text={"white"}
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>
              {" "}
              <strong>
                <CountUp start={0} end={deaths} duration={2.75} separator="," />{" "}
              </strong>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>{date}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="success"
          text={"white"}
          className="card"
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>Recovery</Card.Title>
            <Card.Text>
              {" "}
              <strong>
                <CountUp
                  start={0}
                  end={recovered}
                  duration={2.75}
                  separator=","
                />{" "}
              </strong>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>{date}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card
          className="card"
          bg="dark"
          text={"white"}
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>Cases : </Card.Title>
            <Card.Text>
              {" "}
              <strong>
                <CountUp start={0} end={cases} duration={2.75} separator="," />
              </strong>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>{date}</small>
          </Card.Footer>
        </Card>
        <Card
          className="card"
          bg="primary"
          text={"white"}
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>Critical Cases</Card.Title>
            <Card.Text>
              {" "}
              <strong>
                <CountUp
                  start={0}
                  end={critical}
                  duration={2.75}
                  separator=","
                />{" "}
              </strong>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>{date}</small>
          </Card.Footer>
        </Card>
        <Card
          bg="secondary"
          text={"white"}
          className="card"
          className="text-center"
          style={{ margin: "10px" }}
        >
          <Card.Body>
            <Card.Title>Affected Countries</Card.Title>
            <Card.Text>
              {" "}
              <strong>
                <CountUp
                  start={0}
                  end={affectedCountries}
                  duration={2.75}
                  separator=","
                />{" "}
              </strong>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>{date}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Cards;
