import { combineReducers } from "redux";
import repo from "./repoReducer";
import profile from "./profileReducer";

const reducer = combineReducers({
  repo,
  profile,
});

export default reducer;
