import { POST_USERNAME } from "../action-types/username-action-types";

export const postUsername = (dispatch) => {
  return dispatch({ type: POST_USERNAME });
};
