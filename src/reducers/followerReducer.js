import * as followers from "../actions/followerAction";
const INITIAL_STATE = {
  followers: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case followers.GET_FOLLOWERS:
      return { ...state, followers: [...payload] };
    default:
      return state;
  }
}
