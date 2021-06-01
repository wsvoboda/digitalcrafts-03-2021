import { POST_EMAIL } from "../action-types/email-action-types";

export const postEmail = (dispatch, inputValue) => {
  return dispatch({ type: POST_EMAIL, payload: inputValue });
};
