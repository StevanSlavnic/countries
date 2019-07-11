import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

class CountryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Card>{this.props.children}</Card>;
  }
}

export default CountryCard;
