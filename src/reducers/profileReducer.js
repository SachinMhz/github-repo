import * as profile from "../actions/profileAction";
const INITIAL_STATE = {
  profile: [], 
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case profile.GET_PROFILE:
      return { ...state, ...payload };
    default:
      return state;
  }
}
