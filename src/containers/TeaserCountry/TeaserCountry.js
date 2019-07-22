import React, { Component } from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

import CountryCard from "../../components/CountryCard/CountryCard";
import classes from "./TeaserCountry.module.scss";

class TeaserCountry extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const country = this.props.children;
    return (
      <Link
        to={`/country/${country.name}`}
        className={classes.CountryCard}
        name={country.name}
      >
        <CountryCard>
          <div key={country.alpha3Code}>
            <div className={classes.CountryImage}>
              <img width="100%" src={country.flag} alt={country.name} />
            </div>
            <div className={classes.CountryInfo}>
              <div className={classes.CountryName}>{country.name}</div>
              <div className={classes.CountryGenerals}>
                <div>
                  <span>Population: </span>{" "}
                  <span className={classes.CountryPopulation}>
                    <NumberFormat
                      value={country.population}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </span>
                </div>
                <div>
                  <span>Region: </span> {country.region}
                </div>
                <div>
                  <span>Capital: </span> {country.capital}
                </div>
              </div>
            </div>
          </div>
        </CountryCard>
      </Link>
    );
  }
}

export default TeaserCountry;
