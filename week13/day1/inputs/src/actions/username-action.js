import { POST_USERNAME } from "../action-types/username-action-types";

export const postUsername = (dispatch, inputValue) => {
  return dispatch({ type: POST_USERNAME, payload: inputValue });
};
