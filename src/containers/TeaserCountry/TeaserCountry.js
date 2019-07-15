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

    console.log("teaser", this.props.color);

    return (
      <Link to={`/country/${country.name}`}>
        <CountryCard>
          <div key={country.alpha3Code} style={this.props.style}>
            <div>
              <img width="100" src={country.flag} />
            </div>
            <div>Name: {country.name}</div>
            <div>Population: {country.population}</div>
            <div>Region: {country.region}</div>
            <div>Capital: {country.capital}</div>
          </div>
        </CountryCard>
      </Link>
    );
  }
}

export default TeaserCountry;
