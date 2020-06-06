import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
class App extends Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true ? null : (
          <TweetPage match={{ params: { id: "sfljgka8pfddbcer8nuxv" } }} />
        )}
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
