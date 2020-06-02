import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import { TiArrowBackOutline } from "react-icons/ti/index";
import { TiHeartFullOutline } from "react-icons/ti/index";
import { TiHeartOutline } from "react-icons/ti/index";

class Tweet extends Component {
  toParent = (e, id) => {
    e.preventDefault();
    //todod: Redirect to parent Tweet.
  };

  handleLike = e => {
    e.preventDefault();
    //todo: handle like tweet
  };
  render() {
    console.group("Tweet");
    console.log(this.props);
    console.groupEnd();
    const { tweet } = this.props;
    if (tweet === null) {
      return <p>This Tweet doesn't Exist</p>;
    }

    const {
      name,
      avatar,
      timestamp,
      text,
      hasLiked,
      likes,
      replies,
      parent
    } = tweet;

    return (
      <div className="tweet">
        <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
        <div className="tweet-info">
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button
                className="replyingTo"
                onClick={e => this.toParent(e, parent.id)}
              >
                Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>

          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon" />
            <span>{replies !== 0 && replies}</span>
            <button className="heart-button" onClick={this.handleLike}>
              {hasLiked === true ? (
                <TiHeartFullOutline color="#e0245e" className="tweet-icon" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  //ownProps are props added to the component
  // state = state of the store
  const tweet = state.tweets[ownProps.id];
  const parentTweet = tweet ? state.tweets[tweet.replyingTo] : null;
  return {
    authedUser: state.authedUser,
    tweet: tweet
      ? formatTweet(
          tweet,
          state.users[tweet.author],
          state.authedUser,
          parentTweet
        )
      : null
  };
};

export default connect(mapStateToProps)(Tweet);
