import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

import { connect } from "react-redux";

class SingleCountry extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      country: [
        {
          name: ""
        }
      ],
      hasError: false
    };
  }

  componentDidMount = () => {
    console.log("SingleCountry mounted");

    this.fetchCountry();
  };

  fetchCountry = () => {
    const name = this.props.match.params.name;
    const countries = this.props.countries.countries;
    const country = countries.filter(country => country.name === name);
    this.setState({
      country: country
    });
  };

  render() {
    const country = this.state.country[0];
    console.log(country);

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="SingleCountryWrapper">
        <div>
          <Link to="">Back</Link>
        </div>

        <div>
          <img width={100} src={country.flag} alt={country.name} />
        </div>

        <div>{country.nativeName}</div>
        <div>
          <NumberFormat
            value={country.population}
            displayType={"text"}
            thousandSeparator={true}
          />
        </div>
        <div>{country.region}</div>
        <div>{country.subregion}</div>
        <div>{country.capital}</div>
        <div>
          {country.topLevelDomain &&
            country.topLevelDomain.map(domain => domain)}
        </div>
        <div>
          {country.currencies &&
            country.currencies.map(currency => currency.name).join(", ")}
        </div>
        <div>
          {country.languages &&
            country.languages.map(language => language.name).join(", ")}
        </div>

        <div>{/* {.join(", ")} */}</div>
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

export default connect(mapStateToProps)(SingleCountry);
