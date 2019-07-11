import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "#fff"
    };
  }

  setBackgroundColor = () => {
    console.log("header", this.props.backgroundColor);
    return this.props.bgChange;
  };

  render() {
    return (
      <div className="HeaderWrapper">
        <div>
          <div>
            <h1>Where in the world?</h1>
          </div>
          <div onClick={this.setBackgroundColor}>Dark mode</div>
        </div>
      </div>
    );
  }
}

export default Header;
