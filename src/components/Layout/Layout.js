import React, { Component } from "react";

import Header from "./Header/Header";
import classes from "./Layout.module.scss";
import { connect } from "react-redux";

class Layout extends Component {
  render() {
    console.log(this.props);

    return (
      <div className={classes.LayoutRoot} style={this.props.style}>
        <div className="HeaderWrapper">
          <div>
            <div>
              <h1>Where in the world?</h1>
            </div>
            <div onClick={this.props.backgroundColorChange}>Dark mode</div>
          </div>
        </div>
        <div className={classes.MainWrap}>
          <main className={classes.Main}>{this.props.children}</main>
        </div>
      </div>
    );
  }
}

export default Layout;
