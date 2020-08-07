import * as followings from "../actions/followingAction";
const INITIAL_STATE = {
  followings: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case followings.GET_FOLLOWINGS:
      return { ...state, followings: [...payload] };
    default:
      return state;
  }
}
