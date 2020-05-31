import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return (
    <div>
    <h3 className='center'>Your Timeline</h3>
    <ul className="dashboard-list">
        {this.props.tweetsId.map((id)=>(
            <li key={id}>
                <div>TWEET ID : {id}</div>
            </li>
        ))}
    </ul>
    </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    tweetsId: Object.keys(state.tweets).sort(
      (a, b) => state.tweets[b].timeStamp - state.tweets[a].timeStamp
    )
  };
};

export default connect(mapStateToProps)(Dashboard);
