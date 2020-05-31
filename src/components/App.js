import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.dispatch(handleInitialData());
  }

  render() {
    return <div>{this.props.loading === true ? null : <Dashboard />}</div>
  }
}

const mapStateToProps = state => {
  return {
    loading: state.authedUser === null
  };
};
export default connect(mapStateToProps)(App);
