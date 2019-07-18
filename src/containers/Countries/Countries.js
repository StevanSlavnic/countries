import React, { Component } from "react";
import _ from "lodash";
import classes from "./Countries.module.scss";
import * as countryService from "../../services/countries/countriesService";
import { connect } from "react-redux";
import { countriesFetchData } from "../../store/actions/countriesAction";

import TeaserCountry from "../../containers/TeaserCountry/TeaserCountry";
import CountryFilter from "../../components/CountryFilter/CountryFilter";

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const countries = this.props.countries.countries
      ? this.props.countries.countries
      : [];

    return (
      <React.Fragment>
        <CountryFilter />
        <div className={classes.Root}>
          {countries.map(country => (
            <TeaserCountry
              key={country.name}
              name={country.name}
              className={classes.TeaserCountry}
            >
              {country}
            </TeaserCountry>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries,
    isLoading: state.countriesIsLoading,
    name: state.countries.name
  };
};

export default connect(mapStateToProps)(Countries);
