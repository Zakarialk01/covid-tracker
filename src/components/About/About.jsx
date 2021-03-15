import React from "react";
import zakaria from "./zakaria.jpg";
import about from "./about_tringle.png";

import "./About.css";

function About() {
  return (
    <div className="container">
      <h1 className="h1">
        COVID TRACKER APP {""}
        <br></br>
        <span style={{ fontSize: "30px" }}> Loukili Zakaria</span>{" "}
      </h1>
      <div className="about">
        <img src={zakaria} />

        <p className="p">
          This website contains all satatistics about covid-19 detailed with
          exact numbers {""}, to get in touch with me this is my website and
          below my social links{" "}
          <a
            className="a"
            href="https://loukilizakaria-a597d.web.app"
            target="_blank"
          >
            <br></br>
            <br></br>
            https://loukilizakaria-a597d.web.app
          </a>
        </p>
      </div>
      <p></p>

      <div className="social">
        <a href="#" class="fa fa-github"></a>
        <a href="#" class="fa fa-whatsapp"></a>
        <a href="#" class="fa fa-google"></a>
        <a href="#" class="fa fa-linkedin"></a>
      </div>
    </div>
  );
}

export default About;
