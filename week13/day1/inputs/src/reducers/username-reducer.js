import { POST_USERNAME } from "../action-types/username-action-types";

const initialState = "Username";

const username = (state = initialState, action) => {
  switch (action.type) {
    case POST_USERNAME:
      return (state = "Whitney");
    default:
      return state;
  }
};

export default username;
