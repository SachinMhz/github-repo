import * as repo from "../actions/repoAction";
const INITIAL_STATE = {
  repo: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case repo.GET_REPOSITORY:
      return { ...state, repo: [...payload] };
    default:
      return state;
  }
}
