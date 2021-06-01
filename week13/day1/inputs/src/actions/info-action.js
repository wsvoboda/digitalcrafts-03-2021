import { POST_INFO } from "../action-types/info-action-types";

export const postInfo = (dispatch) => {
  return dispatch({ type: POST_INFO });
};
