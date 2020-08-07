import { combineReducers } from "redux";
import repo from "./repoReducer";
import profile from "./profileReducer";
import followers from "./followerReducer";
import followings from "./followingReducer";
import tab from "./tabReducer";

const reducer = combineReducers({
  repo,
  profile,
  followers,
  followings,
  tabName: tab,
});

export default reducer;
