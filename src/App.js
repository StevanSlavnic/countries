import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { countriesFetchData } from "./store/actions/countriesAction";

import * as container from "./containers/indexContainers";
import Layout from "./components/Layout/Layout";
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    this.props.fetchData("https://restcountries.eu/rest/v2");
  }

  render() {
    const loadingApp = this.props.loadingApp;

    // public routes
    let publicRoutes = [
      { path: "/", exact: true, component: container.Countries },
      { path: "/country/:name", component: container.SingleCountry }
    ];

    let routes = [...publicRoutes];

    let redirection = <Redirect to={"/"} />;

    const appMarkup = (
      <Layout>
        <Switch>
          {/* List all the routes user is able to access to */}
          {routes.map((route, index) => (
            // console.log(route)
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={index}
            />
          ))}

          {/* Redirect if some path is not undefined */}
          {redirection}
        </Switch>
      </Layout>
    );
    return (
      <React.Fragment>
        {loadingApp ? (
          <h1 style={{ padding: "20px" }}>Loading...</h1>
        ) : (
          appMarkup
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries,
    isLoading: state.countriesIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(countriesFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
