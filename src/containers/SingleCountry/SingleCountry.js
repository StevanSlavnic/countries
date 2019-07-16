import React, { PureComponent } from "react";
import * as countryService from "../../services/countries/countriesService";
import { Link } from "react-router-dom";

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
    console.log(this.props);
    this.fetchCountry();
  };

  fetchCountry = () => {
    const name = this.props.match.params.name;

    countryService
      .getCountry(name)
      .then(response => {
        // console.log(response.data);
        this.setState({ country: response.data });
      })
      .catch(error => {
        this.setState({ hasError: true });
        console.log(error);
      });
  };

  render() {
    console.log("State", this.state.country[0].name);

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
        <div>{country.population}</div>
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

export default SingleCountry;
