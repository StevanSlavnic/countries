import React, { Component } from "react";
import classes from "./Layout.module.scss";
// import * as countryService from "../../services/countries/countriesService";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // countries: []
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   if (event.target.value.length > 0) {
  //     this.fetchCountries(event.target.value);
  //   }
  //   // console.log(this.state.name);
  //   console.log(event.target.value);
  // }

  // fetchCountries = name => {
  //   countryService
  //     .getCountry(name)
  //     .then(response => {
  //       console.log(response.data);
  //       this.setState({ countries: response.data });
  //     })
  //     .catch(error => {
  //       this.setState({ hasError: true });
  //       console.log(error);
  //     });
  // };

  render() {
    // console.log(this.state.name);

    // const { countries } = this.state;

    return (
      <div className={classes.LayoutRoot}>
        <div className="HeaderWrapper">
          <div>
            <div>
              <h1>Where in the world?</h1>
            </div>
            <div onClick={this.props.backgroundColorChange}>Dark mode</div>
          </div>
        </div>
        <div className={classes.MainWrap}>
          {/* <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          /> */}
          <main>{this.props.children}</main>
        </div>
      </div>
    );
  }
}

export default Layout;
