import { POST_INFO } from "../action-types/info-action-types";

const initialState = {};

const info = (state = initialState, action) => {
  switch (action.type) {
    case POST_INFO:
      return { username: "Whitney", email: "yahoo.com" };
    default:
      return state;
  }
};

export default info;
