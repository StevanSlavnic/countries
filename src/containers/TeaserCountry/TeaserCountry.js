import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      <Link to={`/country/${country.name}`} className={classes.CountryCard}>
        <CountryCard>
          <div key={country.alpha3Code}>
            <div className={classes.CountryImage}>
              <img width="100%" src={country.flag} alt={country.name} />
            </div>
            <div className={classes.CountryInfo}>
              <div>Name: {country.name}</div>
              <div>Population: {country.population}</div>
              <div>Region: {country.region}</div>
              <div>Capital: {country.capital}</div>
            </div>
          </div>
        </CountryCard>
      </Link>
    );
  }
}

export default TeaserCountry;
