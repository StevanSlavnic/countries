import React, { Component } from "react";
import classes from "./Layout.module.scss";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // backgroundColor: ""
    };
  }

  render() {
    console.log(this.props);

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
          <main className={classes.Root}>{this.props.children}</main>
        </div>
      </div>
    );
  }
}

export default Layout;
