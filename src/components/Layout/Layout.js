import React, { Component } from "react";

import Header from "./Header/Header";
import classes from "./Layout.module.scss";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changed: false
    };
  }

  handleBackgroundChange = () => {
    this.setState(state => ({
      changed: !state.changed
    }));
  };

  render() {
    console.log(this.state.changed);
    return (
      <div
        className={classes.LayoutRoot}
        style={{ backgroundColor: this.state.changed ? "#000" : "#fff" }}
      >
        <div className="HeaderWrapper">
          <div>
            <div>
              <h1>Where in the world?</h1>
            </div>
            <div onClick={() => this.handleBackgroundChange()}>Dark mode</div>
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
