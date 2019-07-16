import React, { Component } from "react";
import { connect } from "react-redux";
import { countriesFetchData } from "../../store/actions/countriesAction";
import TeaserCountry from "../TeaserCountry/TeaserCountry";
import classes from "./Countries.module.scss";

class Countries extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchData("https://restcountries.eu/rest/v2");
  }

  render() {
    const countries = this.props.countries.countries
      ? this.props.countries.countries
      : [];

    return countries.map(country => (
      <TeaserCountry
        key={country.name}
        name={country.name}
        className={classes.TeaserCountry}
      >
        {country}
      </TeaserCountry>
    ));
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries,
    isLoading: state.countriesIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(countriesFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
