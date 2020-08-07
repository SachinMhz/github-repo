import * as tab from "../actions/tabAction";
const INITIAL_STATE = {
  tabName: "Repository",
};

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case tab.CHANGE_TAB:
      return { ...state, tabName: payload };
    default:
      return state;
  }
}
