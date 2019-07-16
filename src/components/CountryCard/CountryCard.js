import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import classes from "./CountryCard.module.scss";

class CountryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Card className={classes.CountryCard}>{this.props.children}</Card>;
  }
}

export default CountryCard;
