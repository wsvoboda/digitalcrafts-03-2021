export const changeFakeData = (dispatch) => {
  return dispatch({ type: "INSERT_FAKE_JOE" });
};

export const addSenatorToList = (dispatch) => {
  return dispatch({ type: "ADD_GOVT_OFFICIAL" });
};

export const removeElonFromList = (dispatch) => {
  return dispatch({ type: "REMOVE_ELON" });
};
