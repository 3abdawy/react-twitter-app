import { getInitialData } from "../utils/api";
import { recieveUsers } from "../actions/users";
import { recieveTweets } from "../actions/tweets";
import { setAuthUser } from "../actions/authedUser";
import {showLoading , hideLoading} from 'react-redux-loading'
const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return dispatch => {
    dispatch(showLoading());
    return getInitialData().then(({ users, tweets }) => {
      dispatch(recieveUsers(users));
      dispatch(recieveTweets(tweets));
      dispatch(setAuthUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
