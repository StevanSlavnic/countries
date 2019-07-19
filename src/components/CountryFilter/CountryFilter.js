import React, { Component } from "react";

import { connect } from "react-redux";

class CountryFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryFilter: "",
      countries: [{ name: "" }],
      filteredCountries: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   const countries = this.props.countries.countries
  //     ? this.props.countries.countries
  //     : [];
  //   this.setState({
  //     // countryFilter: e.target.value,
  //     countries: countries
  //   });
  //   console.log(this.state.countries);
  // }

  handleChange = e => {
    // this.props.onChange(e.target.value);

    // const countries = this.props.countries.countries
    //   ? this.props.countries.countries
    //   : [];
    // const filteredCountries = countries.filter(
    //   country => country.name === e.target.value
    // );

    const query = e.target.value;

    this.fetchCountry(query);

    // console.log(filteredCountries);

    this.setState({
      countryFilter: query
      // filteredCountries: filteredCountries
    });
  };

  fetchCountry = letters => {
    // const name = this.props.match.params.name;
    const countries = this.props.countries.countries;
    const country = countries.filter(
      country => country.name.toString().toLowerCase() === letters
    );
    this.setState({
      // countryFilter: e.target.value
      filteredCountries: country
    });

    console.log("Country", country);
  };

  render() {
    console.log("Filtered", this.state.filteredCountries);
    // console.log(this.props);
    console.log("country filter", this.state.countryFilter);
    return (
      <div>
        <input
          type="text"
          id="filter"
          value={this.state.countryFilter}
          onChange={e => this.handleChange(e)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries,
    isLoading: state.countriesIsLoading
  };
};

export default connect(mapStateToProps)(CountryFilter);
