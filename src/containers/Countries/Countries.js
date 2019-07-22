import React, { Component } from "react";
import _ from "lodash";
import classes from "./Countries.module.scss";
import { connect } from "react-redux";
import TeaserCountry from "../../containers/TeaserCountry/TeaserCountry";

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryFilter: "",
      filteredCountries: [],
      filteredRegionCountries: [],
      regionFilter: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      filteredCountries: this.props.countries.countries
    });
  }

  handleChange = e => {
    const query = e.target.value;

    this.fetchCountry(query);

    this.setState({
      countryFilter: query
    });
  };

  handleSelectChange = e => {
    console.log(e.target.value);

    const query = e.target.value;

    this.fetchRegion(query);

    this.setState({
      regionFilter: query
    });
  };

  fetchCountry = name => {
    const countries = this.props.countries.countries;
    const country = countries.filter(country =>
      country.name
        .toString()
        .toLowerCase()
        .includes(name)
    );
    this.setState({
      filteredCountries: country
    });
  };

  fetchRegion = region => {
    const countries = this.props.countries.countries;

    const country = countries.filter(country =>
      country.region.includes(region)
    );

    this.setState({
      filteredCountries: country
    });
  };

  render() {
    this.regions = [
      {
        name: "Africa"
      },
      {
        name: "Americas"
      },
      {
        name: "Asia"
      },
      {
        name: "Europe"
      },
      {
        name: "Oceania"
      }
    ];
    const countries = this.state.filteredCountries
      ? this.state.filteredCountries
      : this.props.countries.countries
      ? this.props.countries.countries
      : [];

    // const countriesCopy

    const regionCountries = this.state.filteredRegionCountries;

    console.log("Filtered countries", this.state.filteredCountries);

    return (
      <React.Fragment>
        <div className={classes.countryFilters}>
          <div>
            <input
              type="text"
              id="filter"
              value={this.state.countryFilter}
              onChange={e => this.handleChange(e)}
              placeholder={"Search for a country"}
            />
          </div>
          <div>
            <select
              name="regions"
              value={this.state.regions}
              onClick={this.handleSelectChange}
            >
              <option value={""}>Select country</option>
              <React.Fragment>
                {this.regions.map((e, key) => {
                  return (
                    <option
                      key={key}
                      value={e.value}
                      // onClick={e => this.handleRegion(e)}
                    >
                      {e.name}
                    </option>
                  );
                })}
              </React.Fragment>
            </select>
          </div>
        </div>
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
