import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Cards, Country, Chart, About } from "./components";
import value from "./images/image.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  const buttonSearch = (e) => {
    e.preventDefault();
  };

  const search = (e) => {
    setSearchCountry(e.target.value);
  };

  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
      ])
      .then((res) => {
        setLatest(res[0].data);
        setResults(res[1].data);
        console.log(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  const filterCountry = results.filter((item) => {
    console.log(searchCountry);
    if (searchCountry === "") {
      return item;
    } else if (
      item.country.toLowerCase().includes(searchCountry.toLowerCase())
    ) {
      return item;
    }
  });

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Chart results={results} />

            <About />
          </Route>
          <Route exact path="/stats">
            <Chart />

            <br></br>
            <img src={value} alt="zakaria" />
            <br></br>

            <Cards latest={latest} date={lastUpdated} />
          </Route>
          <Route exact path="/country">
            <Chart results={results} />
            <br></br>

            <form class="search-bar" onSubmit={buttonSearch}>
              <input
                type="search"
                name="search"
                pattern=".*\S.*"
                onChange={search}
                required
              />
              <button class="search-btn" type="submit">
                <span>Search</span>
              </button>
            </form>

            <div
              className="Card"
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                margin: "25px",
              }}
            >
              {filterCountry.length > 0 &&
                filterCountry
                  .filter((number) => number.population > 10000000)
                  .map((result) => (
                    <Country
                      name={result.country}
                      cases={result.cases}
                      active={result.active}
                      continent={result.continent}
                      flag={result.countryInfo.flag}
                      critical={result.critical}
                      deaths={result.deaths}
                      population={result.population}
                    />
                  ))}
            </div>
          </Route>
        </Switch>

        <hr></hr>
        <footer class="footer">
          <div class="footerContainer">
            <h5 class="copyright">
              Copyright © 2021 COVID-19 Live Now. LOUKILIZAKARIA All Rights
              Reserved. #StaySafe
            </h5>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
