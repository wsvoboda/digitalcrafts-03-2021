import { POST_EMAIL } from "../action-types/email-action-types";

const initialState = "Email";

const email = (state = initialState, action) => {
  switch (action.type) {
    case POST_EMAIL:
      return (state = action.payload);
    default:
      return state;
  }
};

export default email;
