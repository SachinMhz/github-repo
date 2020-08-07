import { combineReducers } from "redux";
import repo from "./repoReducer";
import profile from "./profileReducer";
import followers from "./followerReducer";
import followings from "./followingReducer";

const reducer = combineReducers({
  repo,
  profile,
  followers,
  followings,
});

export default reducer;
