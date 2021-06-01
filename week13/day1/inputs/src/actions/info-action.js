import { POST_INFO } from "../action-types/info-action-types";

export const postInfo = (dispatch, username, email) => {
  return dispatch({ type: POST_INFO, payload: { username, email } });
};
