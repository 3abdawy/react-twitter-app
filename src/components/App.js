import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";
class App extends Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        <NewTweet/>
        {this.props.loading === true ? null : <Dashboard />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.authedUser === null
  };
};
export default connect(mapStateToProps)(App);
