import { POST_EMAIL } from "../action-types/email-action-types";

export const postEmail = (dispatch) => {
  return dispatch({ type: POST_EMAIL });
};
